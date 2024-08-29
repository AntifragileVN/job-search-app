import React from 'react';
import { Metadata } from 'next';
import Jobs from './Jobs';

export const metadata: Metadata = {
	title: 'Jobs',
};

const Page = () => {
	return (
		<>
			<Jobs />
		</>
	);
};

export default Page;
