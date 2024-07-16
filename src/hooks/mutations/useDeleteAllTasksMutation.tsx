import { IUseTaskMutationParams } from '../../../interfaces/db/db.interfaces';

import { trpc } from '@/utils/trpc';

export const useDeleteAllTaskMutation = ({
  onSuccess,
  onError,
}: IUseTaskMutationParams) => {
  const { mutate, isLoading, data } = trpc.useMutation(['deleteAllTasks'], {
    onSuccess: () => {
      onSuccess();
    },
    onError: (error) => {
      onError(error);
    },
  });

  return {
    mutationHandler: mutate,
    isLoading,
    data,
  };
};
