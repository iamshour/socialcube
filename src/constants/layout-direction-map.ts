import type { LayoutDirection, Locale } from "@/types"

const layoutDirectionMap: Record<Locale, LayoutDirection> = {
	ar: "rtl",
	en: "ltr",
}

export default layoutDirectionMap
