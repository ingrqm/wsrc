import { MutationFunction, useMutation, UseMutationOptions, UseMutationResult, useQueryClient } from 'react-query';
import { message } from 'antd';
import { AxiosError } from 'axios';
import { handleApiError } from 'utils/api';

type ApiError = AxiosError<Error, unknown>;

interface UseMutationOptionsEx {
  loadingMessage?: string;
  errorMessage?: string;
  successMessage?: string;
  invalidateQueryKey?: string | string[];
}

type MutationOptions<TData, TError, TVariables, TContext> = UseMutationOptionsEx &
  UseMutationOptions<TData, TError, TVariables, TContext>;

export default <TData = unknown, TError = unknown, TVariables = void, TContext = unknown>(
  func: MutationFunction<TData, TVariables>,
  options?: MutationOptions<TData, TError, TVariables, TContext>
): UseMutationResult<TData, TError, TVariables, TContext> => {
  const queryClient = useQueryClient();

  const wrapFunc: MutationFunction<TData, TVariables> = (props) => {
    if (options) {
      const { loadingMessage, mutationKey } = options;

      if (loadingMessage && mutationKey) {
        message.loading({ content: loadingMessage, key: mutationKey as string });
      }
    }

    return func(props);
  };

  return useMutation(wrapFunc, {
    ...options,
    onError: (error, variables, context) => {
      handleApiError(error as unknown as ApiError);

      if (options) {
        const { onError, errorMessage, mutationKey } = options;

        if (errorMessage) {
          message.error({ content: errorMessage, key: mutationKey as string });
        }

        if (onError) {
          onError(error, variables, context);
        }
      }
    },
    onSuccess: (data, variables, context) => {
      if (options) {
        const { onSuccess, successMessage, mutationKey, invalidateQueryKey } = options;

        if (successMessage) {
          message.success({ content: successMessage, key: mutationKey as string });
        }

        if (invalidateQueryKey) {
          if (Array.isArray(invalidateQueryKey)) {
            invalidateQueryKey.forEach((key) => {
              queryClient.invalidateQueries(key);
            });
          } else {
            queryClient.invalidateQueries(invalidateQueryKey);
          }
        }

        if (onSuccess) {
          onSuccess(data, variables, context);
        }
      }
    },
  });
};
