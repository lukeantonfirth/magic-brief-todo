import { Task } from '@prisma/client';

export interface ListItemProps {
  isList?: boolean;
  item: Task;
  onDelete: (id: Task['id']) => void;
  onUpdate: (item: Task) => void;
}
