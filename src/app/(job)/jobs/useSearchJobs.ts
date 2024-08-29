import useSWR from 'swr';
import * as api from '@/services';
import { AxiosError, AxiosResponse } from 'axios';
import { GetJobsResponse } from '@/types/job.type';

export const useSearchJob = (shouldFetch: boolean, query: string, page = 1) => {
	const { data, isLoading, error } = useSWR<
		AxiosResponse<GetJobsResponse>,
		AxiosError<Error>
	>(shouldFetch ? `/search?query=${query}&page=${page}` : null, api.jobFetcher);

	return { data, isLoading, error };
};
