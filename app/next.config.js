/** @type {import('next').NextConfig} */

const { withNextVideo } = require('next-video/process');
const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		})
		return config
	},
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '1337',
			},
		],
	},
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  	enabled: process.env.ANALYZE === 'true',
})

module.exports = withNextIntl(withBundleAnalyzer(withNextVideo(nextConfig, {
	provider: "vercel-blob"
})));
