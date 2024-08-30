import { Metadata } from 'next';
import React from 'react';

import { NO_INDEX_PAGE } from '@/constants/seo.constants';

import CreateProfile from './CreateProfile';

export const metadata: Metadata = {
	title: 'Profile',
	...NO_INDEX_PAGE
};

const Page = () => {
	return <CreateProfile />;
};

export default Page;
