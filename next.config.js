/* eslint-disable @typescript-eslint/no-var-requires */
const createNextIntlPlugin = require("next-intl/plugin")

const Icons = require("unplugin-icons/webpack")

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config) {
		config.plugins.push(Icons.default({ compiler: "jsx", jsx: "react" }))

		return config
	},
}

module.exports = withNextIntl(nextConfig)
