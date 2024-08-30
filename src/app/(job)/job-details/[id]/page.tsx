import { Metadata } from 'next';
import React from 'react';

import JobDetails from './JobDetails';

export const metadata: Metadata = {
	title: 'Job details'
};

const Page = ({ params }: { params: { id: string } }) => {
	const encodedId = params.id;
	const id = decodeURIComponent(encodedId);

	return (
		<>
			<JobDetails jobId={id} />
		</>
	);
};

export default Page;
