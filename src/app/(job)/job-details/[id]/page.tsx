import React from 'react';
import JobDetails from './JobDetails';
import { Metadata } from 'next';
import { Job } from '@/types/job.type';
import { jobs } from '../../jobs/table/jobs';

export const metadata: Metadata = {
	title: 'Job details',
};

const Page = ({ params }: { params: { id: string } }) => {
	const encodedId = params.id;
	const id = decodeURIComponent(encodedId);

	if (!id) {
		return null;
	}
	const job = jobs.find((job) => job.job_id === id);

	return (
		<>
			<JobDetails job={job as unknown as Job} />
		</>
	);
};

export default Page;
