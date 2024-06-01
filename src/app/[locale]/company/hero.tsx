//#region Import
import BiPatchCheckFill from "~icons/bi/patch-check-fill"
import FluentPeopleTeam32Filled from "~icons/fluent/people-team-32-filled"
import MaterialSymbolsLightKidStar from "~icons/material-symbols-light/kid-star"
//#endregion

const Hero = () => {
	return (
		<section className='bg-gradient-to-b from-shade-lighter via-white to-shade-lighter/20' id='about-us'>
			<div className='mx-auto max-w-2xl space-y-5 px-4 py-28 text-center md:px-8 xl:text-left'>
				<div className='flex flex-wrap items-center justify-center gap-6 xl:justify-start'>
					{features.map(({ icon: Icon, name }, idx) => (
						<div className='flex items-center gap-x-2 text-sm text-gray-500' key={idx}>
							<Icon className='size-5' />
							{name}
						</div>
					))}
				</div>
				<h1 className='mx-auto text-4xl font-extrabold text-gray-800 md:text-5xl'>
					Empowering Businesses Through Innovative Digital Solutions
				</h1>
				<p className='mx-auto max-w-xl text-gray-600 xl:mx-0'>
					At socialcub.ai, we transform ideas into successful ventures with our expert services in digital marketing,
					branding, and technology.
				</p>
			</div>
		</section>
	)
}

export default Hero

const features = [
	{
		icon: BiPatchCheckFill,
		name: "Trusted",
	},
	{
		icon: FluentPeopleTeam32Filled,
		name: "Over 50+ Clients",
	},
	{
		icon: MaterialSymbolsLightKidStar,
		name: "400 ratings",
	},
]
