import { availableLocaleCodes, defaultLocale } from "@/next.locales.mjs"
import { getRequestConfig, unstable_setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"

// Loads the Application Locales/Translations Dynamically
const loadLocaleDictionary = async (locale: string) => {
	const baseLocale = new Intl.Locale(locale).baseName

	if (baseLocale === "en") {
		// Enabling HMR on the English Locale (instant refresh while when adding/changing texts on the source locale)
		return import("./i18n/locales/en.json").then((f) => f.default)
	}

	if (availableLocaleCodes.includes(baseLocale)) {
		return import(`./i18n/locales/${baseLocale}.json`).then((f) => f.default)
	}

	unstable_setRequestLocale(defaultLocale.code)
	notFound()
}

// Provides `next-intl` configuration for RSC/SSR
export default getRequestConfig(async ({ locale }) => ({
	// Dictionary of messages to be loaded
	messages: await loadLocaleDictionary(locale),
	// Always defining App timezone as UTC
	timeZone: "Etc/UTC",
}))
