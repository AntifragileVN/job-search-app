'use client';
import React from 'react';
import JobsTable from './table/table';
import { jobs } from './table/jobs';
import { Job } from '@/types/job.type';

const Jobs = ({ jobs }: { jobs: Job[] }) => {
	return (
		<>
			<JobsTable jobs={jobs} />
		</>
	);
};

export default Jobs;
