import { IUseTaskMutationParams } from '@/interfaces';
import { trpc } from '@/utils';

export const useDeleteAllTaskMutation = ({
  onSuccess,
  onError,
}: IUseTaskMutationParams) => {
  const { mutate, isLoading, data } = trpc.useMutation(
    ['deleteAllTasks'],
    {
      onError: (error) => {
        onError(error);
      },
      onSuccess: () => {
        onSuccess();
      },
    },
  );

  return {
    data,
    isLoading,
    mutationHandler: mutate,
  };
};
