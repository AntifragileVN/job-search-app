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

	return (
		<>
			<JobDetails jobId={id} />
		</>
	);
};

export default Page;
