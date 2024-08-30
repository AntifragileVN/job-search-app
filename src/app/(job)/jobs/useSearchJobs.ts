import { AxiosError, AxiosResponse } from 'axios';
import useSWR from 'swr';

import { GetJobsResponse } from '@/types/job.type';

import * as api from '@/services';

export const useSearchJob = (shouldFetch: boolean, query: string, page = 1) => {
	const { data, isLoading, error } = useSWR<
		AxiosResponse<GetJobsResponse>,
		AxiosError<Error>
	>(shouldFetch ? `/search?query=${query}&page=${page}` : null, api.jobFetcher);

	return { data, isLoading, error };
};
