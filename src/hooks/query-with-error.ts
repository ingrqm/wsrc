import { QueryFunction, QueryKey, useQuery, UseQueryOptions, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';
import { handleApiError } from 'utils/api';

type ApiError = AxiosError<Error, unknown>;

interface UseQueryOptionsEx {
  errorMessage?: string;
  successMessage?: string;
  invalidateQueryKey?: string;
}

type QueryOptions<TData, TError> = UseQueryOptionsEx & UseQueryOptions<TData, TError>;

export default <TQueryFnData, Error>(
  queryKey: QueryKey,
  queryFn: QueryFunction<TQueryFnData, QueryKey>,
  options?: QueryOptions<TQueryFnData, Error>
): UseQueryResult<TQueryFnData, Error> =>
  useQuery<TQueryFnData, Error>(queryKey, queryFn, {
    ...options,
    onError: (error) => {
      handleApiError(error as unknown as ApiError);

      if (options) {
        const { onError } = options;
        if (onError) {
          onError(error);
        }
      }
    },
  });
