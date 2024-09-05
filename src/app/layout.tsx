import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import { SITE_NAME } from '@/constants/seo.constants';

import './global.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: {
		template: `%s | ${SITE_NAME}`,
		default: 'JOB Search'
	}
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<>
					<Toaster position='bottom-center' />
					{children}
				</>
			</body>
		</html>
	);
}
