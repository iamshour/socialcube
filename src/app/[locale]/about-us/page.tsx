//#region Import
import type { DefaultPageParams } from "@/types"

import { unstable_setRequestLocale } from "next-intl/server"
//#endregion

export default function AboutUsPage({ params: { locale } }: DefaultPageParams) {
	unstable_setRequestLocale(locale)

	return (
		<div>
			<div className='h-[500px] bg-red-400'>About Page</div>
		</div>
	)
}
