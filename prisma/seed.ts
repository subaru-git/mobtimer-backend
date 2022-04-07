import { prisma } from '../lib/prisma';

const main = async () => {
  await prisma.room.deleteMany();
  await prisma.room.createMany({
    data: [{ name: 'room01' }, { name: 'room02' }, { name: 'room03' }],
  });
};

main()
  .catch((e) => {
    console.log(e);
    process.exit();
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
