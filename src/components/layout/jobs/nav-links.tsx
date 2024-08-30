'use client';

import {
	HeartIcon,
	HomeIcon,
	UserCircleIcon
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { DASHBOARD_PAGES } from '@/config/pages-url.config';

const links = [
	{ name: 'Jobs', href: DASHBOARD_PAGES.JOBS, icon: HomeIcon },
	{
		name: 'Liked',
		href: DASHBOARD_PAGES.LIKED,
		icon: HeartIcon
	},
	{
		name: 'Profile',
		href: DASHBOARD_PAGES.PROFILE,
		icon: UserCircleIcon
	}
];

export default function NavLinks() {
	const pathname = usePathname();

	return (
		<>
			{links.map(link => {
				const LinkIcon = link.icon;
				return (
					<Link
						key={link.name}
						href={link.href}
						className={clsx(
							'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
							{
								'bg-sky-100 text-blue-600': pathname === link.href
							}
						)}
					>
						<LinkIcon className='w-6' />
						<p className='hidden md:block'>{link.name}</p>
					</Link>
				);
			})}
		</>
	);
}
