'use client';

import Image from 'next/image';
import React from 'react';

import defaultCompanyLogo from '@/assets/default-company-logo.png';

import useGetJobDetails from './useGetJobDetails';
import * as utils from '@/utils';

const JobDetails = ({ jobId }: { jobId: string }) => {
	const { data } = useGetJobDetails(!!jobId, jobId || '');

	if (!data) {
		return null;
	}

	const { job_title, job_description, employer_logo, employer_name } = data[0];
	return (
		<div>
			<h1>{job_title}</h1>
			<div className='flex'>
				<Image
					src={employer_logo ? employer_logo : defaultCompanyLogo}
					alt={`${employer_name} company logo`}
					width={40}
					height={40}
					loader={utils.myLoader}
				/>
				<span>{employer_name}</span>
			</div>
			{job_description
				? job_description.split('\n\n').map((paragraf, index) => (
						<p
							className='mb-2'
							key={index}
						>
							{paragraf}
						</p>
					))
				: null}
		</div>
	);
};

export default JobDetails;
