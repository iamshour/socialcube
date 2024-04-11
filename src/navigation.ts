import { createSharedPathnamesNavigation } from "next-intl/navigation"

// A list of all locales that are supported
export const locales = ["en", "ar"] as const

export const localePrefix = "always" // Default

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ localePrefix, locales })
