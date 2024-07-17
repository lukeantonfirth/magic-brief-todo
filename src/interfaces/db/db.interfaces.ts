import { TRPCClientErrorLike } from '@trpc/client';

import { Task } from '@prisma/client';
import { ServerRouter } from '../../server/router';

export interface IUseTaskMutationParams {
  onError: (error: TRPCClientErrorLike<ServerRouter>) => void;
  onSuccess: (task?: Task | null) => void;
}
