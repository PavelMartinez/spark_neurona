/** @type {import('next').NextConfig} */

export function webpack(config, options) {
    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })
    return config
}
