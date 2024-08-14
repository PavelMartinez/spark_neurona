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

module.exports = withNextVideo(nextConfig, {
	provider: "vercel-blob"
});
