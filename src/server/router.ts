import * as trpc from '@trpc/server';
import { z as zod } from 'zod';

import { Context } from './context';

export const serverRouter = trpc
  .router<Context>()
  .query('findAll', {
    resolve: async ({ ctx }) => {
      return await ctx.prisma.task.findMany();
    },
  })
  .mutation('createTask', {
    input: zod.object({
      title: zod.string(),
      dueDate: zod.string().refine((date) => !isNaN(Date.parse(date)), {
        message: 'Invalid date format',
      }),
      completed: zod.boolean().default(false),
    }),
    resolve: async ({ input, ctx }) => {
      const { title, dueDate, completed } = input;
      return await ctx.prisma.task.create({
        data: {
          title,
          dueDate: new Date(dueDate),
          completed,
        },
      });
    },
  })
  .mutation('updateTask', {
    input: zod.object({
      id: zod.number(),
      title: zod.string(),
      dueDate: zod.string().refine((date) => !isNaN(Date.parse(date)), {
        message: 'Invalid date format',
      }),
      completed: zod.boolean(),
    }),
    resolve: async ({ input, ctx }) => {
      const { id, ...rest } = input;

      return await ctx.prisma.task.update({
        where: { id },
        data: { ...rest },
      });
    },
  })
  .mutation('deleteAllTasks', {
    input: zod.object({
      ids: zod.number().array(),
    }),
    resolve: async ({ input, ctx }) => {
      const { ids } = input;

      return await ctx.prisma.task.deleteMany({
        where: {
          id: { in: ids },
        },
      });
    },
  });

export type ServerRouter = typeof serverRouter;
