import { AxiosError } from 'axios';
import useSWR from 'swr';

import { GetJobsResponse } from '@/types/job.type';

import * as api from '@/services';

export default function useGetJobDescription(shouldFetch: boolean, id: string) {
	const { data, error } = useSWR<GetJobsResponse, AxiosError<Error>>(
		shouldFetch ? `job-details?job_id=${id}` : null,
		api.jobFetcher
	);
	return {
		data: data?.data,
		isError: !!error,
		isLoading: !data && !error
	};
}
