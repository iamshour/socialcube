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

export const config = {
	// match only internationalized pathnames
	matcher: [
		// Match all pathnames except for
		// - … if they start with `/api`, `/_next` or `/_vercel`
		// - … the ones containing a dot (e.g. `favicon.ico`)
		"/((?!api|_next|_vercel|.*\\..*).*)",
	],
}
