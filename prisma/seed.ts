import { PrismaClient } from "../generated/prisma/client";
import "dotenv/config";
// need to pass expilicitly the datasource url when creating the client 
const prisma = new PrismaClient();

await prisma.role.createMany({
  data: [
    { name: 'ADMIN' },
    { name: 'USER' },
  ],
});

await prisma.$disconnect();