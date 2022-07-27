/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const nextConfig = withPWA({
	images: {
		domains: ['st.kp.yandex.net']
	},
	reactStrictMode: true,
	swcMinify: true,
	pwa: {
		dest: 'public',
		runtimeCaching
	}
})

module.exports = nextConfig
