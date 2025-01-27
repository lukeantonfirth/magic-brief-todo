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
      completed: zod.boolean().default(false),
      dueDate: zod.string(),
      title: zod.string(),
    }),
    resolve: async ({ input, ctx }) => {
      const { title, dueDate, completed } = input;
      return await ctx.prisma.task.create({
        data: {
          completed,
          dueDate,
          title,
        },
      });
    },
  })
  .mutation('updateTask', {
    input: zod.object({
      completed: zod.boolean(),
      dueDate: zod.string().optional(),
      id: zod.number(),
      title: zod.string(),
    }),
    resolve: async ({ input, ctx }) => {
      const { id, ...rest } = input;

      return await ctx.prisma.task.update({
        data: { ...rest },
        where: { id },
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
  })
  .mutation('deleteTask', {
    input: zod.object({
      id: zod.number(),
    }),
    resolve: async ({ input, ctx }) => {
      const { id } = input;

      return await ctx.prisma.task.delete({
        where: {
          id: id,
        },
      });
    },
  })
  .mutation('updateOrCreateTasks', {
    input: zod.array(
      zod.object({
        completed: zod.boolean(),
        dueDate: zod.string().optional().default(''),
        id: zod.number().optional(),
        title: zod.string(),
      }),
    ),
    resolve: async ({ input, ctx }) => {
      const upsertTasks = await Promise.all(
        input.map((task) =>
          ctx.prisma.task.upsert({
            create: {
              completed: task.completed,
              dueDate: task.dueDate,
              title: task.title,
            },
            // Use -1 or another impossible ID if creating a new task
            update: {
              completed: task.completed,
              dueDate: task.dueDate,
              title: task.title,
            },
            where: { id: task.id ?? -1 },
          }),
        ),
      );

      return upsertTasks;
    },
  });

export type ServerRouter = typeof serverRouter;
