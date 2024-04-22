//#region Import
import type { DefaultPageParams } from "@/types"

import { unstable_setRequestLocale } from "next-intl/server"

import Faq from "./faq"
// import Hero from "./hero"
import NewHero from "./new-hero"
import Newsletter from "./newsletter"
import Services from "./services"
import Stats from "./stats"
import Testimonials from "./testimonials"
//#endregion

export default function Home({ params: { locale } }: DefaultPageParams) {
	unstable_setRequestLocale(locale)

	return (
		<>
			{/* <Hero /> */}
			<NewHero />
			<Stats />
			<Services />
			<Testimonials />
			<Faq />
			<Newsletter />
		</>
	)
}
