//#region Import
import Features from "./features"
import Hero from "./hero"
//#endregion

export default function Home() {
	return (
		<main className='relative z-0 min-h-screen min-w-[100vw]' data-scroll-section>
			<Hero />
			<Features />
		</main>
	)
}
