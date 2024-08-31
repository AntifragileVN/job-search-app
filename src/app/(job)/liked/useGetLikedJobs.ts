import useSWR from 'swr';

import { multipleFetcher } from '@/services';

export default function useGetLikedJobs(shouldFetch: boolean, jobs: string[]) {
	const urls = jobs.map(id => `/api/jobs/details?job_id=${id}`);
	const { data, error } = useSWR(shouldFetch ? urls : null, multipleFetcher);
	return {
		data: data?.flatMap(item => item.data),
		isError: !!error,
		isLoading: !data && !error
	};
}
