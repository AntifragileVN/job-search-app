import { NextRequest, NextResponse } from 'next/server';

import { jobApi } from '@/services';

export async function GET(req: NextRequest) {
	const { searchParams } = new URL(req.url);
	const query = searchParams.get('query');
	const page = searchParams.get('page') || '1';

	try {
		const response = await jobApi.get('/search', {
			params: { query, page }
		});

		console.log(response);
		return NextResponse.json(response.data);
	} catch (error) {
		console.error('Failed to fetch jobs:', error);
		return NextResponse.json(
			{ error: 'Failed to fetch jobs' },
			{ status: 500 }
		);
	}
}
