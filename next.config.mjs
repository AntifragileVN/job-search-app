/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'encrypted-tbn0.gstatic.com',
				// pathname: '/account123/**',
				// port: '',
			},
		],
	},
	async redirects() {
		return [
			{
				source: '/',
				destination: '/jobs',
				permanent: true,
			},
		];
	},
};

export default nextConfig;
