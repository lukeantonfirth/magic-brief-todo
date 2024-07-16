import { Task } from '@prisma/client';

export interface ListItemProps {
  isList?: boolean;
  item: Task;
  onUpdate: (item: Task) => void;
}
