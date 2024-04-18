import { availableLocaleCodes } from "@/next.locales.mjs"
import { getRequestConfig } from "next-intl/server"

// Loads the Application Locales/Translations Dynamically
const loadLocaleDictionary = async (locale: string) => {
	if (locale === "en") {
		// Enabling HMR on the English Locale (instant refresh while when adding/changing texts on the source locale)
		return import("./i18n/locales/en.json").then((f) => f.default)
	}

	if (availableLocaleCodes.includes(locale)) {
		return import(`./i18n/locales/${locale}.json`).then((f) => f.default)
	}

	throw new Error(`Unsupported locale: ${locale}`)
}

// Provides `next-intl` configuration for RSC/SSR
export default getRequestConfig(async ({ locale }) => ({
	// Dictionary of messages to be loaded
	messages: await loadLocaleDictionary(locale),
	// Always defining App timezone as UTC
	timeZone: "Etc/UTC",
}))
