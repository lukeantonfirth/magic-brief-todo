import { TRPCClientErrorLike } from '@trpc/client';

import { Task } from '@prisma/client';
import { ServerRouter } from '../../server/router';

/**
 * Interface representing the parameters for task mutation hooks.
 *
 * @interface IUseTaskMutationParams
 * @property onError - Callback function to handle errors during the mutation.
 *   The function receives an error object of type `TRPCClientErrorLike<ServerRouter>`.
 * @property onSuccess - Callback function to handle successful mutations.
 *   The function optionally receives a task object of type `Task` or `null`.
 */
export interface IUseTaskMutationParams {
  onError: (error: TRPCClientErrorLike<ServerRouter>) => void;
  onSuccess: (task?: Task | null) => void;
}
