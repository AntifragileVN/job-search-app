'use client';
import Image from 'next/image';
import { Job } from '@/types/job.type';

import { HeartIcon, DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import clsx from 'clsx';
import { formatDateToLocal } from '@/utils/formatDateToLocal';
import Link from 'next/link';
import { DASHBOARD_PAGES } from '@/config/pages-url.config';
import defaultCompanyLogo from '@/assets/default-company-logo.png';
import { myLoader } from '@/utils/myLoader.util';

type LikedJobs = string[];

export default function JobsTable({ jobs }: { jobs: Job[] }) {
	const [liked, setLiked] = useLocalStorage<LikedJobs>({
		key: 'liked',
		defaultValue: [],
	});

	const onLikeBtnClick = (id: string) => {
		setLiked((prev) => {
			if (prev.includes(id)) {
				return prev.filter((existingId) => existingId !== id);
			} else {
				return [...prev, id];
			}
		});
	};

	return (
		<div className="mt-6 flow-root">
			<div className="inline-block min-w-full align-middle">
				<div className="rounded-lg bg-gray-50 p-2 md:pt-0">
					<div className="md:hidden">
						{jobs &&
							jobs?.map((job) => (
								<div
									key={job.job_id}
									className="mb-2 w-full rounded-md bg-white p-4"
								>
									<div className="flex items-center justify-between border-b pb-4">
										<div>
											<div className="mb-2 flex items-center">
												<Image
													src={
														job.employer_logo
															? job.employer_logo
															: defaultCompanyLogo
													}
													className="mr-2 rounded-full"
													width={28}
													height={28}
													alt={`${job.employer_name}'s profile picture`}
													loader={myLoader}
												/>
												<p>{job.job_title}</p>
											</div>
											<p className="text-sm text-gray-500 line-clamp-4">
												{job.job_description}
											</p>
										</div>
										{/* <InvoiceStatus status={job.job_is_remote} /> */}
									</div>
									<div className="flex w-full items-center justify-between pt-4">
										<div>
											<p className="text-xl font-medium">
												{job.job_apply_quality_score}
											</p>

											<p>{`${formatDateToLocal(job.job_posted_at_timestamp)}`}</p>
										</div>
										<div className="flex justify-end gap-2">
											<button
												className={clsx(
													'rounded-md border p-2 hover:bg-gray-100',
													{
														'bg-gray-200': liked.includes(
															job.job_id
														),
													}
												)}
												onClick={() => onLikeBtnClick(job.job_id)}
											>
												<span className="sr-only">Delete</span>
												<HeartIcon className="w-5" />
											</button>
											<Link
												href={`${DASHBOARD_PAGES.JOBS_DESCRIPTION}/${job.job_id}`}
												className={clsx(
													'rounded-md border p-2 hover:bg-gray-100'
												)}
											>
												<span className="sr-only">Delete</span>
												<DocumentMagnifyingGlassIcon className="w-5" />
											</Link>
										</div>
									</div>
								</div>
							))}
					</div>
					{/* <table className="hidden min-w-full text-gray-900 md:table">
						<thead className="rounded-lg text-left text-sm font-normal">
							<tr>
								<th scope="col" className="px-4 py-5 font-medium sm:pl-6">
									Customer
								</th>
								<th scope="col" className="px-3 py-5 font-medium">
									Email
								</th>
								<th scope="col" className="px-3 py-5 font-medium">
									Amount
								</th>
								<th scope="col" className="px-3 py-5 font-medium">
									Date
								</th>
								<th scope="col" className="px-3 py-5 font-medium">
									Status
								</th>
								<th scope="col" className="relative py-3 pl-6 pr-3">
									<span className="sr-only">Edit</span>
								</th>
							</tr>
						</thead>
						<tbody className="bg-white">
							{invoices?.map((invoice) => (
								<tr
									key={invoice.id}
									className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
								>
									<td className="whitespace-nowrap py-3 pl-6 pr-3">
										<div className="flex items-center gap-3">
											<Image
												src={invoice.image_url}
												className="rounded-full"
												width={28}
												height={28}
												alt={`${invoice.name}'s profile picture`}
											/>
											<p>{invoice.name}</p>
										</div>
									</td>
									<td className="whitespace-nowrap px-3 py-3">
										{invoice.email}
									</td>
									<td className="whitespace-nowrap px-3 py-3">
										{formatCurrency(invoice.amount)}
									</td>
									<td className="whitespace-nowrap px-3 py-3">
										{formatDateToLocal(invoice.date)}
									</td>
									<td className="whitespace-nowrap px-3 py-3">
										<InvoiceStatus status={invoice.status} />
									</td>
									<td className="whitespace-nowrap py-3 pl-6 pr-3">
										<div className="flex justify-end gap-3">
											<UpdateInvoice id={invoice.id} />
											<DeleteInvoice id={invoice.id} />
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table> */}
				</div>
			</div>
		</div>
	);
}
