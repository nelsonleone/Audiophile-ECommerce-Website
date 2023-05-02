/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
	images: {
		domains: ['cdn.sanity.io']
	}
}

module.exports = nextConfig
