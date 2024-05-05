//#region Import
import type { DefaultPageParams } from "@/types"

import { unstable_setRequestLocale } from "next-intl/server"
//#endregion

const CompanyPage = ({ params: { locale } }: DefaultPageParams) => {
	unstable_setRequestLocale(locale)

	return (
		<div>
			<div className='h-[500px] bg-red-400'>Company Page</div>
		</div>
	)
}

export default CompanyPage
