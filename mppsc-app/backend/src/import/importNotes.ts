import fs from 'fs';
import path from 'path';
import { prisma } from '../db';

const CONTENT_DIR = process.env.CONTENT_DIR || '/content';
const NOTES_ROOT = path.join(CONTENT_DIR, 'mpesb-syllabus', 'notes');
// Matches category folders like "01-hindi-bhasha-bodh" or "09-additional-gaps-in-covered-units"
const CATEGORY_DIR_RE = /^(\d+)-(.+)$/;

// Fixed, known set of MPESB missing-topics categories — not derivable from the
// folder slug alone (several are English titles, others need proper Hindi spacing).
const CATEGORY_NAMES: Record<string, string> = {
  '01': 'हिंदी भाषायी बोध',
  '02': 'English Language Comprehension',
  '03': 'तर्कशक्ति एवं विश्लेषणात्मक क्षमता',
  '04': 'अंकों की व्याख्या (संख्यात्मक अभियोग्यता)',
  '05': 'भारतीय समाज',
  '06': 'आंतरिक सुरक्षा एवं पुलिस की भूमिका',
  '07': 'बुनियादी कंप्यूटर ज्ञान',
  '08': 'तकनीकी पेपर — मैकेनिकल इंजीनियरिंग',
  '09': 'Additional Gaps in Covered Units',
};

function humanizeSlug(slug: string): string {
  return slug
    .split('-')
    .map((w) => (w.length ? w[0].toUpperCase() + w.slice(1) : w))
    .join(' ');
}

function listCategoryDirs(root: string): { code: string; slug: string; dirName: string; fullPath: string }[] {
  return fs
    .readdirSync(root, { withFileTypes: true })
    .filter((d) => d.isDirectory() && CATEGORY_DIR_RE.test(d.name))
    .map((d) => {
      const m = d.name.match(CATEGORY_DIR_RE)!;
      return { code: m[1], slug: d.name, dirName: d.name, fullPath: path.join(root, d.name) };
    })
    .sort((a, b) => Number(a.code) - Number(b.code));
}

function extractTitle(content: string, fallback: string): string {
  const firstHeading = content.split(/\r?\n/).find((line) => line.trim().startsWith('# '));
  if (firstHeading) return firstHeading.trim().replace(/^#+\s*/, '');
  return fallback;
}

export interface NotesImportResult {
  categoriesFound: number;
  notesFound: number;
  errors: string[];
}

export async function runNotesImport(): Promise<NotesImportResult> {
  const errors: string[] = [];
  let notesFound = 0;

  if (!fs.existsSync(NOTES_ROOT)) {
    return { categoriesFound: 0, notesFound: 0, errors: [`Notes directory not found: ${NOTES_ROOT}`] };
  }

  const categoryDirs = listCategoryDirs(NOTES_ROOT);

  for (const c of categoryDirs) {
    const name = CATEGORY_NAMES[c.code] || humanizeSlug(c.slug.replace(/^\d+-/, ''));
    const category = await prisma.noteCategory.upsert({
      where: { code: c.code },
      update: { name, orderIndex: Number(c.code) },
      create: { code: c.code, name, slug: c.slug, orderIndex: Number(c.code) },
    });

    const mdFiles = fs
      .readdirSync(c.fullPath, { withFileTypes: true })
      .filter((f) => f.isFile() && f.name.toLowerCase().endsWith('.md'))
      .map((f) => f.name)
      .sort((a, b) => {
        const na = Number(a.match(/^(\d+)/)?.[1] ?? '0');
        const nb = Number(b.match(/^(\d+)/)?.[1] ?? '0');
        return na - nb || a.localeCompare(b);
      });

    let orderIndex = 0;
    for (const fileName of mdFiles) {
      const fullPath = path.join(c.fullPath, fileName);
      const relPath = path.relative(CONTENT_DIR, fullPath).split(path.sep).join('/');
      try {
        const content = fs.readFileSync(fullPath, 'utf-8');
        const title = extractTitle(content, fileName.replace(/\.md$/i, ''));

        await prisma.noteFile.upsert({
          where: { sourceFile: relPath },
          update: { title, content, orderIndex, categoryId: category.id },
          create: { categoryId: category.id, title, content, orderIndex, sourceFile: relPath },
        });
        notesFound++;
        orderIndex++;
      } catch (e: any) {
        errors.push(`Failed to import ${relPath}: ${e?.message || e}`);
      }
    }
  }

  return { categoriesFound: categoryDirs.length, notesFound, errors };
}
