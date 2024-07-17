import { IUseTaskMutationParams } from '@/interfaces';
import { trpc } from '@/utils';

export const useUpdateOrCreateTasksMutation = ({
  onSuccess,
  onError,
}: IUseTaskMutationParams) => {
  const { mutate, isLoading, data } = trpc.useMutation(
    ['updateOrCreateTasks'],
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
