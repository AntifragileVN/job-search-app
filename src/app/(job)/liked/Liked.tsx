'use client';
import React from 'react';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import useGetLikedJobs from './useGetLikedJobs';
import JobsTable from '../jobs/table/table';
import { Job } from '@/types/job.type';
type LikedJobs = string[];

const Liked = () => {
	const [liked, _, isLikedLoading] = useLocalStorage<LikedJobs>({
		key: 'liked',
		defaultValue: [],
	});

	// const likedJobs = jobs.filter((job) => liked.includes(job.job_id));

	const { data, isLoading } = useGetLikedJobs(!isLikedLoading, liked);

	if (isLoading && !data) {
		return null;
	}
	console.log(data);
	return <>{<JobsTable jobs={data as unknown as Job[]} />}</>;
};

export default Liked;
