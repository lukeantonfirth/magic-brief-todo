import { IUseTaskMutationParams } from '@/interfaces';
import { trpc } from '@/utils';

export const useCreateTaskMutation = ({
  onSuccess,
  onError,
}: IUseTaskMutationParams) => {
  const { mutate, isLoading, data } = trpc.useMutation(
    ['createTask'],
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
