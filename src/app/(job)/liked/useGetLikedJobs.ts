import useSWR from 'swr';
import * as api from '@/services';

export default function useGetLikedJobs(shouldFetch: boolean, jobs: string[]) {
	const urls = jobs.map((id) => `job-details?job_id=${id}`);
	console.log(urls);
	const { data, error } = useSWR(shouldFetch ? urls : null, api.multipleFetcher);
	return {
		data: data?.flatMap((item) => item.data),
		isError: !!error,
		isLoading: !data && !error,
	};
}
