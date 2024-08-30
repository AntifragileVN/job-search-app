import { Metadata } from 'next';
import React from 'react';

import { NO_INDEX_PAGE } from '@/constants/seo.constants';

import Liked from './Liked';

export const metadata: Metadata = {
	title: 'Liked',
	...NO_INDEX_PAGE
};

const Page = () => {
	return (
		<>
			<Liked />
		</>
	);
};

export default Page;
