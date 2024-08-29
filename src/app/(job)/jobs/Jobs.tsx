'use client';
import React from 'react';
import JobsTable from './table/table';
import { jobs } from './table/jobs';
import { Job } from '@/types/job.type';

const Jobs = () => {
	return (
		<>
			<JobsTable jobs={jobs as unknown as Job[]} />
		</>
	);
};

export default Jobs;
