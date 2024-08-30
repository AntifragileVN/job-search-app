'use client';

import React from 'react';

import type { Job } from '@/types/job.type';

import { useLocalStorage } from '@/hooks/useLocalStorage';

import Search from './search/Search';
import JobsTable from './table/table';
import { useSearchJob } from './useSearchJobs';

type Profile = {
	name: string;
	about: string;
	preferred_job: string;
};

const Jobs = ({
	searchParams
}: {
	searchParams?: { job?: string; page?: string };
}) => {
	const [profile, _, profileLoading] = useLocalStorage<Profile>({
		key: 'profile',
		defaultValue: {
			name: '',
			preferred_job: '',
			about: ''
		}
	});

	const searchedJob =
		searchParams?.job ||
		(profileLoading ? 'Frontend' : profile.preferred_job) ||
		'Frontend';

	const shouldFetch = !!searchedJob && !profileLoading;

	const { data, isLoading, error } = useSearchJob(shouldFetch, searchedJob);

	if (isLoading && !data) {
		return null;
	}

	return (
		<>
			<Search placeholder='Example job ...' />
			<JobsTable jobs={data?.data ? (data?.data as unknown as Job[]) : []} />
		</>
	);
};

export default Jobs;
