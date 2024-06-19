//#region Import
import type { DefaultPageParams } from "@/types"

import { unstable_setRequestLocale } from "next-intl/server"

import Careers from "./careers"
import Hero from "./hero"
import MissionVision from "./mission-vision"
//#endregion

const CompanyPage = ({ params: { locale } }: DefaultPageParams) => {
	unstable_setRequestLocale(locale)

	return (
		<>
			<Hero />
			<MissionVision />
			<Careers />
		</>
	)
}

export default CompanyPage
