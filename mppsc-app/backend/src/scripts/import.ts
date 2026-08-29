import { runImportLogged } from '../import/importContent';
import { prisma } from '../db';

async function main() {
  console.log('Starting MPPSC content import...');
  const result = await runImportLogged();
  console.log(`Units found:     ${result.unitsFound}`);
  console.log(`Topics imported: ${result.topicsFound}`);
  console.log(`Questions saved: ${result.questionsFound}`);
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
