//#region Import
import Section from "@/components/common/section"
import { useTranslations } from "next-intl"
//#endregion

const Stats = () => {
	const t = useTranslations("home.stats")

	return (
		<Section
			className='bg-gradient-to-b from-white to-shade-lighter/50 pt-0 dark:from-neutral-950 dark:to-shade-mute'
			containerClassName='!pt-0'
			data-scroll
			data-scroll-speed='2'
			heading={t("heading")}
			subHeading={t("subHeading")}>
			<div className='mt-12'>
				<ul className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
					{features.map((item, idx) => (
						<li
							className='w-full rounded-lg bg-shade-lighter px-12 py-4 text-center shadow-md shadow-shade-light/30 transition-basic hover:shadow-lg hover:shadow-shade-light/30 dark:bg-gray-800 sm:w-auto'
							key={idx}>
							<h4 className='text-4xl font-semibold text-shade-darker dark:text-white'>{item.data}</h4>
							<p className='mt-3 font-medium dark:text-gray-400'>{t(item.title as any)}</p>
						</li>
					))}
				</ul>
			</div>
		</Section>
	)
}

export default Stats

const features = [
	{
		data: "100+",
		title: "features.businesses",
	},
	{
		data: "20+",
		title: "features.countries",
	},
	{
		data: "100%",
		title: "features.successRate",
	},
]
