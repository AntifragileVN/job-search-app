'use client';

import {
	DocumentMagnifyingGlassIcon,
	HeartIcon
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import { Job } from '@/types/job.type';

import defaultCompanyLogo from '@/assets/default-company-logo.png';

import { DASHBOARD_PAGES } from '@/config/pages-url.config';

import { useLocalStorage } from '@/hooks/useLocalStorage';

import { formatDateToLocal } from '@/utils/formatDateToLocal';

import * as utils from '@/utils';

type LikedJobs = string[];

export default function JobsTable({ jobs }: { jobs: Job[] }) {
	const [liked, setLiked] = useLocalStorage<LikedJobs>({
		key: 'liked',
		defaultValue: []
	});

	const onLikeBtnClick = (id: string) => {
		setLiked(prev => {
			if (prev.includes(id)) {
				return prev.filter(existingId => existingId !== id);
			} else {
				return [...prev, id];
			}
		});
	};

	return (
		<div className='mt-6 flow-root'>
			<div className='min-w-full align-middle'>
				<div className='rounded-lg bg-gray-50 p-2 md:pt-0'>
					<ul>
						{jobs &&
							jobs?.map(job => (
								<li
									key={job.job_id}
									className='mb-2 w-full rounded-md bg-white p-4'
								>
									<div className='flex items-center justify-between border-b pb-4'>
										<div>
											<div className='mb-2 flex items-center'>
												<Image
													src={
														job.employer_logo
															? job.employer_logo
															: defaultCompanyLogo
													}
													className='mr-2 rounded-full'
													width={28}
													height={28}
													alt={`${job.employer_name}'s profile picture`}
													loader={utils.myLoader}
												/>
												<p>{job.job_title}</p>
											</div>
											<p className='text-sm text-gray-500 line-clamp-4'>
												{job.job_description}
											</p>
										</div>
									</div>
									<div className='flex w-full items-center justify-between pt-4'>
										<div>
											<p className='text-xl font-medium'>
												{job.job_apply_quality_score}
											</p>

											<p>{`${formatDateToLocal(job.job_posted_at_timestamp)}`}</p>
										</div>
										<div className='flex justify-end gap-2'>
											<button
												className={clsx(
													'rounded-md border p-2 hover:bg-gray-100',
													{
														'bg-gray-200': liked.includes(job.job_id)
													}
												)}
												onClick={() => onLikeBtnClick(job.job_id)}
											>
												<span className='sr-only'>Delete</span>
												<HeartIcon className='w-5' />
											</button>
											<Link
												href={`${DASHBOARD_PAGES.JOBS_DESCRIPTION}/${job.job_id}`}
												className={clsx(
													'rounded-md border p-2 hover:bg-gray-100'
												)}
											>
												<span className='sr-only'>Delete</span>
												<DocumentMagnifyingGlassIcon className='w-5' />
											</Link>
										</div>
									</div>
								</li>
							))}
					</ul>
				</div>
			</div>
		</div>
	);
}
