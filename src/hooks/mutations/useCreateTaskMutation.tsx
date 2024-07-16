import { IUseTaskMutationParams } from '../../../interfaces/db/db.interfaces';

import { trpc } from '@/utils/trpc';

export const useCreateTaskMutation = ({
  onSuccess,
  onError,
}: IUseTaskMutationParams) => {
  const { mutate, isLoading, data } = trpc.useMutation(['createTask'], {
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
