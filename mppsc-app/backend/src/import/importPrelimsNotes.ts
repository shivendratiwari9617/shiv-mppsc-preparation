import fs from 'fs';
import path from 'path';
import { prisma } from '../db';

const CONTENT_DIR = process.env.CONTENT_DIR || '/content';
const PRELIMS_NOTES_ROOT = path.join(CONTENT_DIR, 'mppsc-syllabus', 'prelims-notes');
const PRELIMS_ROOT = path.join(CONTENT_DIR, 'mppsc-syllabus', 'prelims');

const UNIT_DIR_RE = /^unit-(\d+)-(.+)$/;
const PAPER_DIR_RE = /^paper-(\d+)-(.+)$/;
const TITLE_RE = /^#\s+(.+)$/;

// Same fixed unit names as the syllabus-checklist importer — this corpus is
// authored one note per checklist item, against the same unit set.
const UNIT_NAMES: Record<string, string> = {
  'unit-01': 'मध्यप्रदेश का इतिहास, संस्कृति व साहित्य',
  'unit-02': 'भारत का इतिहास',
  'unit-03': 'भारत एवं मध्यप्रदेश का भूगोल',
  'unit-04': 'संवैधानिक तंत्र',
  'unit-05': 'अर्थव्यवस्था',
  'unit-06': 'विज्ञान, प्रौद्योगिकी एवं लोक स्वास्थ्य',
  'unit-07': 'पर्यावरण, जैवविविधता, सतत विकास एवं आपदा प्रबंधन',
  'unit-08': 'समसामयिक घटनाएँ',
  'unit-09': 'सूचना एवं संचार प्रौद्योगिकी (ICT)',
  'unit-10': 'मध्यप्रदेश की जनजातीय विरासत, लोक-संस्कृति व साहित्य',
  'paper-2': 'सामान्य अभिक्षमता परीक्षा (General Aptitude Test)',
};

function humanizeSlug(slug: string): string {
  return slug
    .split('-')
    .map((w) => (w.length ? w[0].toUpperCase() + w.slice(1) : w))
    .join(' ');
}

interface UnitDirInfo {
  code: string;
  name: string;
  orderIndex: number;
  fullPath: string;
}

function listUnitDirs(root: string): UnitDirInfo[] {
  const out: UnitDirInfo[] = [];
  for (const d of fs.readdirSync(root, { withFileTypes: true })) {
    if (!d.isDirectory()) continue;
    const unitMatch = d.name.match(UNIT_DIR_RE);
    const paperMatch = d.name.match(PAPER_DIR_RE);
    if (unitMatch) {
      const code = `unit-${unitMatch[1]}`;
      out.push({
        code,
        name: UNIT_NAMES[code] || humanizeSlug(unitMatch[2]),
        orderIndex: Number(unitMatch[1]),
        fullPath: path.join(root, d.name),
      });
    } else if (paperMatch) {
      const code = `paper-${paperMatch[1]}`;
      out.push({
        code,
        name: UNIT_NAMES[code] || humanizeSlug(paperMatch[2]),
        orderIndex: 100 + Number(paperMatch[1]),
        fullPath: path.join(root, d.name),
      });
    }
  }
  return out.sort((a, b) => a.orderIndex - b.orderIndex);
}

const GROUP_LABELS: Record<string, string> = {
  'bharat-ka-bhugol': 'भारत का भूगोल',
  'mp-ka-bhugol': 'मध्यप्रदेश का भूगोल',
};

interface TopicDirInfo {
  fullPath: string;
  dirName: string;
  groupLabel: string | null;
  relFromUnit: string;
}

// A "topic" directory is one that directly contains .md note files (one
// checklist file's worth of items). Walks down through any group subfolders
// (e.g. a future unit-03 bharat-ka-bhugol/mp-ka-bhugol split) to find them.
function findTopicDirs(unitDir: string): TopicDirInfo[] {
  const out: TopicDirInfo[] = [];

  const walk = (dir: string, groupSlug: string | null) => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const hasMd = entries.some((e) => e.isFile() && e.name.toLowerCase().endsWith('.md'));
    if (hasMd) {
      out.push({
        fullPath: dir,
        dirName: path.basename(dir),
        groupLabel: groupSlug ? GROUP_LABELS[groupSlug] || humanizeSlug(groupSlug) : null,
        relFromUnit: path.relative(unitDir, dir).split(path.sep).join('/'),
      });
      return;
    }
    for (const e of entries) {
      if (e.isDirectory()) walk(path.join(dir, e.name), groupSlug ?? e.name);
    }
  };

  for (const e of fs.readdirSync(unitDir, { withFileTypes: true })) {
    if (e.isDirectory()) walk(path.join(unitDir, e.name), null);
  }

  return out.sort((a, b) => a.relFromUnit.localeCompare(b.relFromUnit));
}

function leadingNumber(name: string): number {
  return Number(name.match(/^(\d+)/)?.[1] ?? '0');
}

function extractFirstHeading(content: string): string | null {
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line) continue;
    const m = line.match(TITLE_RE);
    if (m) return m[1].trim();
  }
  return null;
}

// The topic's display title comes from the sibling checklist source file's
// own `# ` heading (mppsc-syllabus/prelims/<unit>/<same-relative-path>.md) —
// that file already carries the proper Hindi title for this exact topic.
function resolveTopicTitle(unitDirName: string, topic: TopicDirInfo): string {
  const checklistFilePath = path.join(PRELIMS_ROOT, unitDirName, `${topic.relFromUnit}.md`);
  try {
    if (fs.existsSync(checklistFilePath)) {
      const heading = extractFirstHeading(fs.readFileSync(checklistFilePath, 'utf-8'));
      if (heading) return heading;
    }
  } catch {
    // fall through to slug-based fallback
  }
  return humanizeSlug(topic.dirName.replace(/^\d+-/, ''));
}

export interface PrelimsNotesImportResult {
  unitsFound: number;
  topicsFound: number;
  notesFound: number;
  errors: string[];
}

export async function runPrelimsNotesImport(): Promise<PrelimsNotesImportResult> {
  const errors: string[] = [];
  let topicsFound = 0;
  let notesFound = 0;

  if (!fs.existsSync(PRELIMS_NOTES_ROOT)) {
    return { unitsFound: 0, topicsFound: 0, notesFound: 0, errors: [`Prelims notes directory not found: ${PRELIMS_NOTES_ROOT}`] };
  }

  const unitDirs = listUnitDirs(PRELIMS_NOTES_ROOT);

  for (const u of unitDirs) {
    const unit = await prisma.prelimsNoteUnit.upsert({
      where: { code: u.code },
      update: { name: u.name, orderIndex: u.orderIndex },
      create: { code: u.code, name: u.name, slug: u.code, orderIndex: u.orderIndex },
    });

    const unitDirName = path.basename(u.fullPath);
    const topicDirs = findTopicDirs(u.fullPath);

    for (const t of topicDirs) {
      const dirPath = path.relative(CONTENT_DIR, t.fullPath).split(path.sep).join('/');
      const title = resolveTopicTitle(unitDirName, t);
      const orderIndex = leadingNumber(t.dirName);

      const topic = await prisma.prelimsNoteTopic.upsert({
        where: { dirPath },
        update: { title, groupLabel: t.groupLabel, orderIndex, unitId: unit.id },
        create: { unitId: unit.id, title, groupLabel: t.groupLabel, orderIndex, dirPath },
      });
      topicsFound++;

      const mdFiles = fs
        .readdirSync(t.fullPath, { withFileTypes: true })
        .filter((f) => f.isFile() && f.name.toLowerCase().endsWith('.md'))
        .map((f) => f.name)
        .sort((a, b) => leadingNumber(a) - leadingNumber(b) || a.localeCompare(b));

      let fileOrderIndex = 0;
      for (const fileName of mdFiles) {
        const fullPath = path.join(t.fullPath, fileName);
        const relPath = path.relative(CONTENT_DIR, fullPath).split(path.sep).join('/');
        try {
          const content = fs.readFileSync(fullPath, 'utf-8');
          const noteTitle = extractFirstHeading(content) || fileName.replace(/\.md$/i, '');

          await prisma.prelimsNoteFile.upsert({
            where: { sourceFile: relPath },
            update: { title: noteTitle, content, orderIndex: fileOrderIndex, topicId: topic.id },
            create: { topicId: topic.id, title: noteTitle, content, orderIndex: fileOrderIndex, sourceFile: relPath },
          });
          notesFound++;
          fileOrderIndex++;
        } catch (e: any) {
          errors.push(`Failed to import ${relPath}: ${e?.message || e}`);
        }
      }
    }
  }

  return { unitsFound: unitDirs.length, topicsFound, notesFound, errors };
}
