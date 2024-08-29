'use client';
import React from 'react';
import { Metadata } from 'next';
import Jobs from './Jobs';
import { jobs } from './table/jobs';
import { Job } from '@/types/job.type';

import { useLocalStorage } from '@/hooks/useLocalStorage';

const metadata: Metadata = {
	title: 'Jobs',
};

type Profile = {
	name: string;
	about: string;
	preferred_job: string;
};

const Page = ({ searchParams }: { searchParams?: { job?: string; page?: string } }) => {
	const [profile] = useLocalStorage<Profile>({
		key: 'profile',
		defaultValue: {
			name: '',
			preferred_job: '',
			about: '',
		},
	});

	const searchedJob = searchParams?.job || profile.preferred_job;
	const filteredJobs = jobs.filter((arrayJob) =>
		arrayJob.job_title.toLocaleLowerCase().includes(searchedJob.toLocaleLowerCase())
	);
	return (
		<>
			<Jobs />
		</>
	);
};

export default Page;
