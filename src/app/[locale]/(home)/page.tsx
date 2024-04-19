//#region Import
import Faq from "./faq"
import Hero from "./hero"
import Newsletter from "./newsletter"
import Pricing from "./pricing"
import Services from "./services"
import Testimonials from "./testimonials"
//#endregion

export default function Home() {
	return (
		<>
			<Hero />
			<Services />
			<Pricing />
			<Testimonials />
			<Faq />
			<Newsletter />
		</>
	)
}
