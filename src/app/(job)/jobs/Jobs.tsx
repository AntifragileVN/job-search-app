'use client';
import React from 'react';
import JobsTable from './table/table';
import { jobs } from './table/jobs';
import { Job } from '@/types/job.type';
import Search from './search/Search';

const Jobs = ({ jobs }: { jobs: Job[] }) => {
	return (
		<>
			<Search placeholder="Example job ..." />
			<JobsTable jobs={jobs} />
		</>
	);
};

export default Jobs;
