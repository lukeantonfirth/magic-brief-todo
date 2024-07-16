import { Task } from '@prisma/client';

export type TaskDBTypeFunction = (input: Task) => void;
