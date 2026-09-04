import fs from 'fs';
import path from 'path';
import { prisma } from '../db';

const CONTENT_DIR = process.env.CONTENT_DIR || '/content';
const CHECKLIST_ROOT = path.join(CONTENT_DIR, 'mppsc-syllabus', 'prelims');

// "unit-01-mp-history-culture-literature" -> code "unit-01", order 1
// "paper-2-general-aptitude-test" -> code "paper-2", order 100 + 2 (sorts after all units)
const UNIT_DIR_RE = /^unit-(\d+)-(.+)$/;
const PAPER_DIR_RE = /^paper-(\d+)-(.+)$/;

// Numbered checklist lines, e.g. "1. मालवा..." or "16अ. सूफ़ी खनकाह..."
const ITEM_RE = /^(\d+[^\s.]*)\.\s+(.+)$/;
const HEADING_RE = /^##\s+(.+)$/;
const TITLE_RE = /^#\s+(.+)$/;

interface UnitDirInfo {
  code: string;
  name: string;
  orderIndex: number;
  fullPath: string;
}

// Fixed, known set of Prelims checklist units — proper Hindi names, not a
// mechanical slug title-case (the folder slugs are romanized for filesystem use).
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

interface MdFileInfo {
  fullPath: string;
  groupLabel: string | null; // immediate subfolder name relative to the unit dir, if nested
  sortKey: string;
}

// Known nested subfolders (currently only unit-03's भारत/MP geography split) — give
// them a readable Hindi label instead of the raw slug.
const GROUP_LABELS: Record<string, string> = {
  'bharat-ka-bhugol': 'भारत का भूगोल',
  'mp-ka-bhugol': 'मध्यप्रदेश का भूगोल',
};

function walkMdFiles(unitDir: string): MdFileInfo[] {
  const results: MdFileInfo[] = [];
  const walk = (dir: string, groupSlug: string | null) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full, groupSlug ?? entry.name);
      } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) {
        const groupLabel = groupSlug ? GROUP_LABELS[groupSlug] || humanizeSlug(groupSlug) : null;
        results.push({ fullPath: full, groupLabel, sortKey: path.relative(unitDir, full) });
      }
    }
  };
  walk(unitDir, null);
  results.sort((a, b) => a.sortKey.localeCompare(b.sortKey));
  return results;
}

interface ParsedItem {
  label: string;
  text: string;
  heading: string | null;
}

function parseChecklistFile(content: string): { title: string | null; items: ParsedItem[] } {
  let title: string | null = null;
  let currentHeading: string | null = null;
  const items: ParsedItem[] = [];

  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line) continue;

    const titleMatch = line.match(TITLE_RE);
    if (titleMatch && !title) {
      title = titleMatch[1].trim();
      continue;
    }
    const headingMatch = line.match(HEADING_RE);
    if (headingMatch) {
      currentHeading = headingMatch[1].trim();
      continue;
    }
    const itemMatch = line.match(ITEM_RE);
    if (itemMatch) {
      items.push({ label: itemMatch[1], text: itemMatch[2].trim(), heading: currentHeading });
    }
  }

  return { title, items };
}

export interface ChecklistImportResult {
  unitsFound: number;
  filesFound: number;
  itemsFound: number;
  errors: string[];
}

export async function runChecklistImport(): Promise<ChecklistImportResult> {
  const errors: string[] = [];
  let filesFound = 0;
  let itemsFound = 0;

  if (!fs.existsSync(CHECKLIST_ROOT)) {
    return { unitsFound: 0, filesFound: 0, itemsFound: 0, errors: [`Checklist directory not found: ${CHECKLIST_ROOT}`] };
  }

  const unitDirs = listUnitDirs(CHECKLIST_ROOT);

  for (const u of unitDirs) {
    const unit = await prisma.checklistUnit.upsert({
      where: { code: u.code },
      update: { name: u.name, orderIndex: u.orderIndex },
      create: { code: u.code, name: u.name, slug: u.code, orderIndex: u.orderIndex },
    });

    const mdFiles = walkMdFiles(u.fullPath);
    let fileOrderIndex = 0;

    for (const mf of mdFiles) {
      const relPath = path.relative(CONTENT_DIR, mf.fullPath).split(path.sep).join('/');
      try {
        const content = fs.readFileSync(mf.fullPath, 'utf-8');
        const { title, items } = parseChecklistFile(content);
        const fileTitle = title || path.basename(mf.fullPath, '.md');

        if (!items.length) {
          errors.push(`No numbered checklist items found: ${relPath}`);
          continue;
        }

        const checklistFile = await prisma.checklistFile.upsert({
          where: { sourceFile: relPath },
          update: { title: fileTitle, groupLabel: mf.groupLabel, orderIndex: fileOrderIndex, unitId: unit.id },
          create: {
            unitId: unit.id,
            title: fileTitle,
            groupLabel: mf.groupLabel,
            orderIndex: fileOrderIndex,
            sourceFile: relPath,
          },
        });
        filesFound++;
        fileOrderIndex++;

        let itemOrderIndex = 0;
        for (const item of items) {
          await prisma.checklistItem.upsert({
            where: { fileId_orderIndex: { fileId: checklistFile.id, orderIndex: itemOrderIndex } },
            update: { label: item.label, text: item.text, heading: item.heading },
            create: {
              fileId: checklistFile.id,
              orderIndex: itemOrderIndex,
              label: item.label,
              text: item.text,
              heading: item.heading,
            },
          });
          itemsFound++;
          itemOrderIndex++;
        }

        // Drop stale items if the source file shrank since the last import.
        await prisma.checklistItem.deleteMany({
          where: { fileId: checklistFile.id, orderIndex: { gte: itemOrderIndex } },
        });
      } catch (e: any) {
        errors.push(`Failed to import ${relPath}: ${e?.message || e}`);
      }
    }
  }

  return { unitsFound: unitDirs.length, filesFound, itemsFound, errors };
}
