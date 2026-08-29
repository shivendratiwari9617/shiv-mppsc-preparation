import fs from 'fs';
import path from 'path';
import { prisma } from '../db';

const CONTENT_DIR = process.env.CONTENT_DIR || '/content';
// Matches top-level unit folders like "1) मध्यप्रदेश का इतिहास..." or "10) MP की जनजातीय..."
const UNIT_DIR_RE = /^(\d+)\)\s*(.+)$/;

interface UnitDirInfo {
  code: string;
  name: string;
  dirName: string;
  fullPath: string;
}

function listUnitDirs(root: string): UnitDirInfo[] {
  return fs
    .readdirSync(root, { withFileTypes: true })
    .filter((d) => d.isDirectory() && UNIT_DIR_RE.test(d.name))
    .map((d) => {
      const m = d.name.match(UNIT_DIR_RE)!;
      return {
        code: m[1],
        name: m[2].trim(),
        dirName: d.name,
        fullPath: path.join(root, d.name),
      };
    })
    .sort((a, b) => Number(a.code) - Number(b.code));
}

function walkHtmlFiles(dir: string): string[] {
  let results: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(walkHtmlFiles(full));
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

/**
 * Extracts the `const RAW = {...};` JS object literal embedded in each MCQ html
 * file and parses it as JSON. Uses manual brace/string scanning (not regex)
 * so it is robust to nested braces and escaped quotes inside the content.
 */
function extractRawObject(html: string): any {
  const marker = 'const RAW =';
  const startIdx = html.indexOf(marker);
  if (startIdx === -1) return null;

  let i = startIdx + marker.length;
  while (html[i] === ' ' || html[i] === '\t') i++;
  if (html[i] !== '{') return null;

  const objStart = i;
  let depth = 0;
  let inString = false;
  let stringChar = '"';
  let escape = false;

  for (; i < html.length; i++) {
    const ch = html[i];
    if (inString) {
      if (escape) {
        escape = false;
      } else if (ch === '\\') {
        escape = true;
      } else if (ch === stringChar) {
        inString = false;
      }
      continue;
    }
    if (ch === '"' || ch === "'") {
      inString = true;
      stringChar = ch;
      continue;
    }
    if (ch === '{') {
      depth++;
    } else if (ch === '}') {
      depth--;
      if (depth === 0) {
        i++;
        break;
      }
    }
  }

  const jsonText = html.slice(objStart, i);
  try {
    return JSON.parse(jsonText);
  } catch {
    return null;
  }
}

function resolveCorrectIndex(item: any, optionsLen: number): number | null {
  const candidates = ['correct_answer_index', 'answer_index', 'correctIndex', 'correct'];
  for (const key of candidates) {
    if (item && Object.prototype.hasOwnProperty.call(item, key)) {
      const n = Number(item[key]);
      if (Number.isInteger(n) && n >= 0 && n < optionsLen) return n;
    }
  }
  return null;
}

export interface ImportResult {
  unitsFound: number;
  topicsFound: number;
  questionsFound: number;
  errors: string[];
}

export async function runImport(): Promise<ImportResult> {
  const errors: string[] = [];
  let topicsFound = 0;
  let questionsFound = 0;

  if (!fs.existsSync(CONTENT_DIR)) {
    throw new Error(`Content directory not found: ${CONTENT_DIR}`);
  }

  const unitDirs = listUnitDirs(CONTENT_DIR);
  if (!unitDirs.length) {
    errors.push(`No unit folders (matching "N) Name") found under ${CONTENT_DIR}`);
  }

  for (const u of unitDirs) {
    const unit = await prisma.unit.upsert({
      where: { code: u.code },
      update: { name: u.name, orderIndex: Number(u.code) },
      create: {
        code: u.code,
        name: u.name,
        slug: `unit-${u.code}`,
        orderIndex: Number(u.code),
      },
    });

    const files = walkHtmlFiles(u.fullPath);

    for (const filePath of files) {
      const relPath = path.relative(CONTENT_DIR, filePath);
      try {
        const html = fs.readFileSync(filePath, 'utf-8');
        const raw = extractRawObject(html);
        if (!raw) {
          errors.push(`No RAW payload found: ${relPath}`);
          continue;
        }
        const mcqsRaw: any[] = Array.isArray(raw) ? raw : Array.isArray(raw.mcqs) ? raw.mcqs : [];
        if (!mcqsRaw.length) {
          errors.push(`No mcqs[] found: ${relPath}`);
          continue;
        }

        const title: string = raw.topic_title || path.basename(filePath, '.html');
        const topic = await prisma.topic.upsert({
          where: { sourceFile: relPath },
          update: {
            title,
            coverageNote: raw.coverage_note || null,
            vyakhya: raw.vyakhya || null,
            unitId: unit.id,
          },
          create: {
            unitId: unit.id,
            title,
            coverageNote: raw.coverage_note || null,
            vyakhya: raw.vyakhya || null,
            sourceFile: relPath,
          },
        });
        topicsFound++;

        let orderIndex = 0;
        for (const item of mcqsRaw) {
          const options: string[] = Array.isArray(item?.options) ? item.options.map((o: any) => String(o)) : [];
          const correctIndex = resolveCorrectIndex(item, options.length);

          if (!item?.question || options.length === 0 || correctIndex === null) {
            errors.push(`Skipped malformed question #${orderIndex} in: ${relPath}`);
            orderIndex++;
            continue;
          }

          await prisma.question.upsert({
            where: { topicId_orderIndex: { topicId: topic.id, orderIndex } },
            update: {
              questionText: String(item.question),
              options,
              correctIndex,
              explanation: item.explanation || item.vyakhya || null,
              priorityTag: item.priority_tag || item.priority || 'HIGH',
            },
            create: {
              topicId: topic.id,
              orderIndex,
              questionText: String(item.question),
              options,
              correctIndex,
              explanation: item.explanation || item.vyakhya || null,
              priorityTag: item.priority_tag || item.priority || 'HIGH',
            },
          });
          questionsFound++;
          orderIndex++;
        }

        // If the source file shrank (fewer questions than before), drop the extras
        // so stale questions don't linger after a re-import.
        await prisma.question.deleteMany({
          where: { topicId: topic.id, orderIndex: { gte: orderIndex } },
        });
      } catch (e: any) {
        errors.push(`Failed to import ${relPath}: ${e?.message || e}`);
      }
    }
  }

  return { unitsFound: unitDirs.length, topicsFound, questionsFound, errors };
}

/**
 * Runs the importer while recording an ImportLog row, so the Settings page /
 * admin API can show "last import" status and history.
 */
export async function runImportLogged(): Promise<{ logId: number } & ImportResult> {
  const log = await prisma.importLog.create({ data: { status: 'RUNNING' } });
  try {
    const result = await runImport();
    await prisma.importLog.update({
      where: { id: log.id },
      data: {
        status: 'SUCCESS',
        finishedAt: new Date(),
        unitsFound: result.unitsFound,
        topicsFound: result.topicsFound,
        questionsFound: result.questionsFound,
        message: result.errors.length ? `${result.errors.length} warning(s). ${result.errors.slice(0, 20).join(' | ')}` : null,
      },
    });
    return { logId: log.id, ...result };
  } catch (e: any) {
    await prisma.importLog.update({
      where: { id: log.id },
      data: { status: 'FAILED', finishedAt: new Date(), message: e?.message || String(e) },
    });
    throw e;
  }
}
