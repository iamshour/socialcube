//#region Import
import BiPatchCheckFill from "~icons/bi/patch-check-fill"
import FluentPeopleTeam32Filled from "~icons/fluent/people-team-32-filled"
import MaterialSymbolsLightKidStar from "~icons/material-symbols-light/kid-star"
import { useTranslations } from "next-intl"
//#endregion

const Hero = () => {
	const t = useTranslations("company.hero")

	return (
		<section className='bg-gradient-to-b from-shade-lighter via-white to-shade-lighter/20' id='about-us'>
			<div className='mx-auto max-w-2xl space-y-5 px-4 py-28 text-center md:px-8 xl:text-left'>
				<div className='flex flex-wrap items-center justify-center gap-6 xl:justify-start'>
					{features.map(({ feature, icon: Icon }, idx) => (
						<div className='flex items-center gap-x-2 text-sm text-gray-500' key={idx}>
							<Icon className='size-5' />
							{t(feature as any)}
						</div>
					))}
				</div>
				<h1 className='mx-auto text-4xl font-extrabold text-gray-800 md:text-5xl'>{t("heading")}</h1>
				<p className='mx-auto max-w-xl text-gray-600 xl:mx-0'>{t("subHeading")}</p>
			</div>
		</section>
	)
}

export default Hero

const features = [
	{
		feature: "features.trusted",
		icon: BiPatchCheckFill,
	},
	{
		feature: "features.clients",
		icon: FluentPeopleTeam32Filled,
	},
	{
		feature: "features.ratings",
		icon: MaterialSymbolsLightKidStar,
	},
]
