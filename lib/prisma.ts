import { PrismaClient } from "@prisma/client";

// Prisma Client ko global me store karna
// Taaki hot reload me naya client na banaye aur memory leak na ho
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query"], // optional: console me queries dekhne ke liye
  });

// Development me global attach kar do
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
