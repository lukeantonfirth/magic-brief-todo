import { ListTypes } from '@/types';
import { IReactChildren } from '@/interfaces';

export interface ListProps extends IReactChildren {
  listType?: ListTypes;
}
