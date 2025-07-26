// lib/prisma.js

import { PrismaClient } from "./generated/prisma";

const globalForPrisma = globalThis;

// Create a new PrismaClient if not already on globalThis
const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export const db = prisma;
