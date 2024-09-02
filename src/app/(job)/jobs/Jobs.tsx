'use client';

import React from 'react';

import Pagination from '@/components/ui/jobs/pagination';

import { useLocalStorage } from '@/hooks/useLocalStorage';

import Search from './search/Search';
import { JobsTableSkeleton } from './table/Skeleton';
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

	const { data, isLoading } = useSearchJob(shouldFetch, searchedJob);

	return (
		<>
			<Search placeholder='Example job ...' />
			{!isLoading && data?.data ? (
				<JobsTable jobs={data?.data} />
			) : (
				<JobsTableSkeleton />
			)}
			<div className='mt-5 flex w-full justify-center'>
				<Pagination totalPages={data?.parameters.num_pages || 1} />
			</div>
		</>
	);
};

export default Jobs;
