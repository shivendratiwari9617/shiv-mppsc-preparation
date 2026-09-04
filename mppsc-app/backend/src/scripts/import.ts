import { prisma } from '../db';
import { runFullImportLogged } from '../import/runAll';

async function main() {
  console.log('Starting MPPSC content import...');
  const result = await runFullImportLogged();
  console.log(`Units found:       ${result.unitsFound}`);
  console.log(`Topics imported:   ${result.topicsFound}`);
  console.log(`Questions saved:   ${result.questionsFound}`);
  console.log(`Notes imported:    ${result.notesFound}`);
  console.log(`Checklist items:   ${result.checklistItemsFound}`);
  if (result.errors.length) {
    console.log(`Warnings (${result.errors.length}):`);
    for (const e of result.errors.slice(0, 50)) console.log(' -', e);
    if (result.errors.length > 50) console.log(`   ...and ${result.errors.length - 50} more`);
  }
  console.log('Import complete.');
}

main()
  .catch((e) => {
    console.error('Import failed:', e);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
