import createNextIntlPlugin from "next-intl/plugin"
import Icons from "unplugin-icons/webpack"

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config) {
		config.plugins.push(Icons({ compiler: "jsx", jsx: "react" }))

		return config
	},
}

export default withNextIntl(nextConfig)
