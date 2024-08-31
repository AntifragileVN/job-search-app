import { AxiosError } from 'axios';
import useSWR from 'swr';

import { GetJobsResponse } from '@/types/job.type';

import {fetcher} from '@/services';

export default function useGetJobDescription(shouldFetch: boolean, id: string) {
	const { data, error } = useSWR<GetJobsResponse, AxiosError<Error>>(
		shouldFetch ? `/api/jobs/details?job_id=${id}` : null,
		fetcher
	);
	return {
		data: data?.data,
		isError: !!error,
		isLoading: !data && !error
	};
}
