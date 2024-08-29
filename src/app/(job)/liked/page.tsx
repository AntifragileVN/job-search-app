import React from 'react';
import Liked from './Liked';
import { Metadata } from 'next';
import { NO_INDEX_PAGE } from '@/constants/seo.constants';

export const metadata: Metadata = {
	title: 'Liked',
	...NO_INDEX_PAGE,
};

const Page = () => {
	return (
		<>
			<Liked />
		</>
	);
};

export default Page;
