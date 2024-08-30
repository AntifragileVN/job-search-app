'use client';

import React from 'react';

import { Job } from '@/types/job.type';

import { useLocalStorage } from '@/hooks/useLocalStorage';

import JobsTable from '../jobs/table/table';

import useGetLikedJobs from './useGetLikedJobs';

type LikedJobs = string[];

const Liked = () => {
	const [liked, _, isLikedLoading] = useLocalStorage<LikedJobs>({
		key: 'liked',
		defaultValue: []
	});

	const { data, isLoading } = useGetLikedJobs(!isLikedLoading, liked);

	if (isLoading && !data) {
		return null;
	}
	console.log(data);
	return <>{<JobsTable jobs={data as unknown as Job[]} />}</>;
};

export default Liked;
