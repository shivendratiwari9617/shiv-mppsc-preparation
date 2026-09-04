import { prisma } from '../db';
import { runChecklistImport } from './importChecklist';
import { runImport } from './importContent';
import { runNotesImport } from './importNotes';

export interface FullImportResult {
  unitsFound: number;
  topicsFound: number;
  questionsFound: number;
  notesFound: number;
  checklistItemsFound: number;
  errors: string[];
}

/**
 * Runs all three content importers — MCQ practice content, MPSI study notes,
 * and the full MPPSC syllabus checklist — so a single "Import" action keeps
 * everything in the app in sync with the repo.
 */
export async function runFullImport(): Promise<FullImportResult> {
  const mcq = await runImport();
  const notes = await runNotesImport();
  const checklist = await runChecklistImport();

  return {
    unitsFound: mcq.unitsFound,
    topicsFound: mcq.topicsFound,
    questionsFound: mcq.questionsFound,
    notesFound: notes.notesFound,
    checklistItemsFound: checklist.itemsFound,
    errors: [...mcq.errors, ...notes.errors, ...checklist.errors],
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
