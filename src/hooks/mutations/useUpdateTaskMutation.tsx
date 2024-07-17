import { IUseTaskMutationParams } from '@/interfaces';
import { trpc } from '@/utils';

export const useUpdateTaskMutation = ({
  onSuccess,
  onError,
}: IUseTaskMutationParams) => {
  const { mutate, isLoading, data } = trpc.useMutation(
    ['updateTask'],
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
