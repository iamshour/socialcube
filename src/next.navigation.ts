//#region Import
import { createSharedPathnamesNavigation } from "next-intl/navigation"

import { availableLocaleCodes } from "./next.locales.mjs"
//#endregion

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
	localePrefix: "always",
	locales: availableLocaleCodes,
})
