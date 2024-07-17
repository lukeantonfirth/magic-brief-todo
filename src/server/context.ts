import * as trpc from '@trpc/server';
import { PrismaClient } from '@prisma/client';

export async function createContext() {
  const prisma = new PrismaClient();

  return { prisma };
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
