import { availableLocaleCodes, defaultLocale } from "@/next.locales.mjs"
import createMiddleware from "next-intl/middleware"

export default createMiddleware({
	// Used when no locale matches
	defaultLocale: defaultLocale.code,

	// Always use a Locale as a prefix for routing
	localePrefix: "always",

	// A list of all locales that are supported
	locales: availableLocaleCodes,
})

// export const config = { matcher: ["/"] }
export const config = { matcher: ["/", "/(ar|en)/:path*"] }
