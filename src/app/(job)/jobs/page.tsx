import React from 'react';
import { Metadata } from 'next';
import Jobs from './Jobs';
import { jobs } from './table/jobs';
import { Job } from '@/types/job.type';

export const metadata: Metadata = {
	title: 'Jobs',
};

const Page = ({ searchParams }: { searchParams?: { job?: string; page?: string } }) => {
	const searchedJob = searchParams?.job || '';
	console.log(searchParams);
	const filteredJobs = jobs.filter((arrayJob) =>
		arrayJob.job_title.includes(searchedJob)
	);
	return (
		<>
			<Jobs jobs={filteredJobs as unknown as Job[]} />
		</>
	);
};

export default Page;
