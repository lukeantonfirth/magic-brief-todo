import { TRPCClientErrorLike } from '@trpc/client';

import { ServerRouter } from '../../src/server/router';

export interface IUseTaskMutationParams {
  onError: (error: TRPCClientErrorLike<ServerRouter>) => void;
  onSuccess: () => void;
}
