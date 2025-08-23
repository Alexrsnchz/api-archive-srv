import { readFileSync } from 'fs';
import { prisma } from '../src/lib/prisma.js';

async function main() {
  const categories = JSON.parse(readFileSync('./prisma/data/categoriesData.json', 'utf-8'));
  const apis = JSON.parse(readFileSync('./prisma/data/apisData.json', 'utf-8'));

  await prisma.category.deleteMany();

  await prisma.category.createMany({ data: categories });
  await prisma.api.createMany({ data: apis });
}

main()
  .catch(error => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
