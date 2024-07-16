import { IUseTaskMutationParams } from '../../../interfaces/db/db.interfaces';

import { trpc } from '@/utils/trpc';

export const useUpdateTaskMutation = ({
  onSuccess,
  onError,
}: IUseTaskMutationParams) => {
  const { mutate, isLoading, data } = trpc.useMutation(['updateTask'], {
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
