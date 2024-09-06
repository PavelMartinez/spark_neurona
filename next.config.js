/** @type {import('next').NextConfig} */

const { withNextVideo } = require('next-video/process');

const nextConfig = {
  	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		})
		return config
	}
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  	enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(withNextVideo(nextConfig, {
	provider: "vercel-blob"
}));
