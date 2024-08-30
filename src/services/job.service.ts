import axios, { AxiosResponse } from 'axios';

import { GetJobsResponse, Job } from '@/types/job.type';

export const jobApi = axios.create({
	baseURL: 'https://jsearch.p.rapidapi.com',
	headers: {
		'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
		'x-rapidapi-host': 'jsearch.p.rapidapi.com'
	}
});

export const jobFetcher = async (url: string) => {
	const { data } = await jobApi.get(url);

	return data;
};
export const multipleFetcher = (urls: string[]) => {
	return Promise.all(urls.map(url => jobFetcher(url)));
};

export const getJobs = async (query: string, page = 1) => {
	try {
		const response: AxiosResponse<GetJobsResponse> = await jobApi.get(
			'search',
			{
				params: { query }
			}
		);
		return response.data.data;
	} catch (error) {
		console.error(error);
		return [] as Job[];
	}
};

export const fetchJobDetails = async (jobId: string) => {
	try {
		const response = await jobApi.get('job-details', {
			params: {
				job_id: jobId,
				extended_publisher_details: 'false'
			}
		});
		return response.data;
	} catch (error) {
		console.error(`Failed to fetch details for job ID: ${jobId}`, error);
		return null;
	}
};
