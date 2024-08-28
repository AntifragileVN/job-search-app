'use client';
import React from 'react';
import JobsTable from './table/table';
import { Job } from '@/types/job.type';
import { jobs } from './table/jobs';

const Page = () => {
	return (
		<>
			<JobsTable jobs={jobs as unknown as Job[]} />
		</>
	);
};

export default Page;
