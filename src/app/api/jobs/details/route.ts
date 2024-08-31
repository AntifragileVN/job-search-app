import { NextRequest, NextResponse } from 'next/server';

import { jobApi } from '@/services';

export async function GET(req: NextRequest) {
	const { searchParams } = new URL(req.url);
	const job_id = searchParams.get('job_id');

	try {
		const response = await jobApi.get('/job-details', {
			params: { job_id }
		});
		return NextResponse.json(response.data);
	} catch (error) {
		console.error('Failed to fetch jobs:', error);
		return NextResponse.json(
			{ error: 'Failed to fetch jobs' },
			{ status: 500 }
		);
	}
}
