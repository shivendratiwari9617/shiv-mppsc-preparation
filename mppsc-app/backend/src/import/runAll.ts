import { prisma } from '../db';
import { runChecklistImport } from './importChecklist';
import { runImport } from './importContent';
import { runNotesImport } from './importNotes';
import { runPrelimsNotesImport } from './importPrelimsNotes';

export interface FullImportResult {
  unitsFound: number;
  topicsFound: number;
  questionsFound: number;
  notesFound: number;
  checklistItemsFound: number;
  prelimsNotesFound: number;
  errors: string[];
}

/**
 * Runs all four content importers — MCQ practice content, MPSI study notes,
 * the full MPPSC syllabus checklist, and the fact-based Prelims content
 * notes — so a single "Import" action keeps everything in the app in sync
 * with the repo.
 */
export async function runFullImport(): Promise<FullImportResult> {
  const mcq = await runImport();
  const notes = await runNotesImport();
  const checklist = await runChecklistImport();
  const prelimsNotes = await runPrelimsNotesImport();

  return {
    unitsFound: mcq.unitsFound,
    topicsFound: mcq.topicsFound,
    questionsFound: mcq.questionsFound,
    notesFound: notes.notesFound,
    checklistItemsFound: checklist.itemsFound,
    prelimsNotesFound: prelimsNotes.notesFound,
    errors: [...mcq.errors, ...notes.errors, ...checklist.errors, ...prelimsNotes.errors],
  };
}

export async function runFullImportLogged(): Promise<{ logId: number } & FullImportResult> {
  const log = await prisma.importLog.create({ data: { status: 'RUNNING' } });
  try {
    const result = await runFullImport();
    await prisma.importLog.update({
      where: { id: log.id },
      data: {
        status: 'SUCCESS',
        finishedAt: new Date(),
        unitsFound: result.unitsFound,
        topicsFound: result.topicsFound,
        questionsFound: result.questionsFound,
        notesFound: result.notesFound,
        checklistItemsFound: result.checklistItemsFound,
        prelimsNotesFound: result.prelimsNotesFound,
        message: result.errors.length
          ? `${result.errors.length} warning(s). ${result.errors.slice(0, 20).join(' | ')}`
          : null,
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
