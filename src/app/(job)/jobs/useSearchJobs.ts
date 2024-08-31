import { AxiosError } from 'axios';
import useSWR from 'swr';

import { GetJobsResponse } from '@/types/job.type';

import { fetcher } from '@/services';

export const useSearchJob = (shouldFetch: boolean, query: string, page = 1) => {
	const { data, isLoading, error } = useSWR<GetJobsResponse, AxiosError<Error>>(
		shouldFetch ? `/api/jobs/search?query=${query}&page=${page}` : null,
		fetcher
	);

	return { data, isLoading, error };
};
