import { IUseTaskMutationParams } from '@/interfaces';
import { trpc } from '@/utils';

export const useDeleteTaskMutation = ({
  onSuccess,
  onError,
}: IUseTaskMutationParams) => {
  const { mutate, isLoading, data } = trpc.useMutation(
    ['deleteTask'],
    {
      onError: (error) => {
        onError(error);
      },
      onSuccess: (task) => {
        onSuccess(task);
      },
    },
  );

  return {
    data,
    isLoading,
    mutationHandler: mutate,
  };
};
