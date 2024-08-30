import React from 'react';
import { Metadata } from 'next';
import Jobs from './Jobs';

export const metadata: Metadata = {
	title: 'Jobs',
};

const Page = ({ searchParams }: { searchParams?: { job?: string; page?: string } }) => {
	return (
		<>
			<Jobs searchParams={searchParams} />
		</>
	);
};

export default Page;
