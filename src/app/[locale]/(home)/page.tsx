//#region Import
import type { DefaultPageParams } from "@/types"

import { unstable_setRequestLocale } from "next-intl/server"

import Faq from "./faq"
import Hero from "./hero"
import Newsletter from "./newsletter"
import Services from "./services"
import Stats from "./stats"
import Testimonials from "./testimonials"
//#endregion

const HomePage = ({ params: { locale } }: DefaultPageParams) => {
	unstable_setRequestLocale(locale)

	return (
		<>
			<Hero />
			<Stats />
			<Services />
			<Testimonials />
			<Faq />
			<Newsletter />
		</>
	)
}

export default HomePage
