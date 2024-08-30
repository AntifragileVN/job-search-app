'use client';

import { BriefcaseIcon } from '@heroicons/react/24/outline';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { useFormik } from 'formik';
import Link from 'next/link';
import React from 'react';
import toast from 'react-hot-toast';

import { Button } from '@/components/ui/button';

import { DASHBOARD_PAGES } from '@/config/pages-url.config';

import { useLocalStorage } from '@/hooks/useLocalStorage';

import { createProfileSchema } from './createProfileSchema';

type Profile = {
	name: string;
	about: string;
	preferred_job: string;
};

const CreateProfile = () => {
	const [profile, setProfile] = useLocalStorage<Profile>({
		key: 'profile',
		defaultValue: {
			name: '',
			preferred_job: '',
			about: ''
		}
	});
	const formik = useFormik({
		initialValues: {
			name: profile.name,
			preferred_job: profile.preferred_job,
			about: profile.about
		},
		validationSchema: createProfileSchema,
		enableReinitialize: true,

		onSubmit: values => {
			setProfile(values);
			toast.success(
				profile?.name ? 'Update user success' : 'Create user success'
			);
			console.log(values);
		}
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<div className='rounded-md bg-gray-50 p-4 md:p-6'>
				<div className='mb-4'>
					<label
						htmlFor='name'
						className='mb-2 block text-sm font-medium'
					>
						Name
					</label>
					<div className='relative mt-2 rounded-md'>
						<div className='relative'>
							<input
								id='name'
								name='name'
								step='0.01'
								aria-describedby='name-error'
								value={formik.values.name}
								onChange={formik.handleChange}
								placeholder='Bill Smith'
								className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
							/>
							<UserCircleIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
						</div>
					</div>
					<div
						id='name-error'
						aria-live='polite'
						aria-atomic='true'
					>
						{formik.errors?.name && formik.touched?.name ? (
							<p className='mt-2 text-sm text-red-500'>{formik.errors.name}</p>
						) : null}
					</div>
				</div>

				<div className='mb-4'>
					<label
						htmlFor='preferred_job'
						className='mb-2 block text-sm font-medium'
					>
						Desired Job
					</label>
					<div className='relative mt-2 rounded-md'>
						<div className='relative'>
							<input
								id='preferred_job'
								step='0.01'
								value={formik.values.preferred_job}
								onChange={formik.handleChange}
								placeholder='Web developer'
								className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
								aria-describedby='preferred_job-error'
							/>
							<BriefcaseIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
						</div>
					</div>
					<div
						id='preferred_job-error'
						aria-live='polite'
						aria-atomic='true'
					>
						{formik.errors?.preferred_job && formik.touched?.preferred_job ? (
							<p className='mt-2 text-sm text-red-500'>
								{formik.errors.preferred_job}
							</p>
						) : null}
					</div>
				</div>
				<div className='mb-4'>
					<label
						htmlFor='about'
						className='mb-2 block text-sm font-medium'
					>
						About me
					</label>
					<div className='relative mt-2 rounded-md'>
						<div className='relative'>
							<textarea
								id='about'
								value={formik.values.about}
								onChange={formik.handleChange}
								className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 pr-2 text-sm outline-2 placeholder:text-gray-500'
							/>
							<BriefcaseIcon className='pointer-events-none absolute left-3 top-5 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
						</div>
					</div>
					<div
						id='preferred_job-error'
						aria-live='polite'
						aria-atomic='true'
					>
						{formik.errors?.about && formik.touched?.about ? (
							<p className='mt-2 text-sm text-red-500'>{formik.errors.about}</p>
						) : null}
					</div>
				</div>
			</div>
			<div className='mt-6 flex justify-end gap-4'>
				<Link
					href={DASHBOARD_PAGES.JOBS}
					className='flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200'
				>
					Cancel
				</Link>
				<Button type='submit'>
					{profile?.name ? 'Update Profile' : 'Create Profile'}
				</Button>
			</div>
		</form>
	);
};

export default CreateProfile;
