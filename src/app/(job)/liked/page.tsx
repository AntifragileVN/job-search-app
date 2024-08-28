'use client';
import React from 'react';
import { jobs } from '../jobs/table/jobs';
import JobsTable from '../jobs/table/table';
import type { Job } from '@/types/job.type';

import { useLocalStorage } from '@/hooks/useLocalStorage';
type LikedJobs = string[];

const Page = () => {
	const [liked] = useLocalStorage<LikedJobs>({
		key: 'liked',
		defaultValue: [],
	});

	const likedJobs = jobs.filter((job) => liked.includes(job.job_id));
	return (
		<>
			<JobsTable jobs={likedJobs as unknown as Job[]} />
		</>
	);
};

export default Page;
