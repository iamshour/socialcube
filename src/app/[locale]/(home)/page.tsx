//#region Import
import Faq from "./faq"
import Hero from "./hero"
import Newsletter from "./newsletter"
import Pricing from "./pricing"
import Services from "./services"
import Services2 from "./services-2"
import Testimonials from "./testimonials"
//#endregion

export default function Home() {
	return (
		<>
			<Hero />
			<Services />
			<Services2 />
			<Pricing />
			<Testimonials />
			<Faq />
			<Newsletter />
		</>
	)
}
