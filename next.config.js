/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['comicvine.gamespot.com'],
	},
	env: {
		API_URL: 'https://comicvine.gamespot.com'
	}
}

module.exports = nextConfig
