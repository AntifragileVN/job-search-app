'use client';
import React from 'react';
import JobsTable from './table/table';
import { jobs } from './table/jobs';
import { Job } from '@/types/job.type';
import Search from './search/Search';
import { useSearchJob } from './useSearchJobs';
import { useLocalStorage } from '@/hooks/useLocalStorage';

type Profile = {
	name: string;
	about: string;
	preferred_job: string;
};

const Jobs = ({ searchParams }: { searchParams?: { job?: string; page?: string } }) => {
	const [profile, _, profileLoading] = useLocalStorage<Profile>({
		key: 'profile',
		defaultValue: {
			name: '',
			preferred_job: '',
			about: '',
		},
	});

	const searchedJob = searchParams?.job || profile.preferred_job;

	const { data, isLoading, error } = useSearchJob(
		!profileLoading && profile.preferred_job !== '',
		searchedJob
	);

	if (isLoading && !data) {
		return null;
	}

	console.log(data);

	return (
		<>
			<Search placeholder="Example job ..." />
			<JobsTable jobs={data?.data ? (data?.data as unknown as Job[]) : []} />
		</>
	);
};

export default Jobs;
