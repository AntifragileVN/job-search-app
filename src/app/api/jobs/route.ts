import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
	const { searchParams } = new URL(req.url);
	const query = searchParams.get('query');
	const page = searchParams.get('page') || '1';

	try {
		const response = await axios.get('https://jsearch.p.rapidapi.com/search', {
			params: { query, page },
			headers: {
				'x-rapidapi-key': process.env.RAPIDAPI_KEY, // Keep it secure, no "NEXT_PUBLIC_" prefix
				'x-rapidapi-host': 'jsearch.p.rapidapi.com'
			}
		});
		return NextResponse.json(response.data.data);
	} catch (error) {
		console.error('Failed to fetch jobs:', error);
		return NextResponse.json(
			{ error: 'Failed to fetch jobs' },
			{ status: 500 }
		);
	}
}
