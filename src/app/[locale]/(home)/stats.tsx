import Section from "@/components/layouts/section"
import { useTranslations } from "next-intl"

export default function Stats() {
	const t = useTranslations("home.stats")

	return (
		<Section
			className='bg-gradient-to-b from-white to-shade-lighter/50 pt-0 dark:bg-gray-900'
			containerClassName='!pt-0'
			data-scroll
			data-scroll-speed='2'
			heading={t("heading")}
			subHeading={t("subHeading")}>
			<div className='mt-12'>
				<ul className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
					{stats.map((item, idx) => (
						<li
							className='w-full rounded-lg bg-shade-lighter px-12 py-4 text-center shadow-md shadow-shade-light/30 transition-basic hover:shadow-lg hover:shadow-shade-light/30 dark:bg-gray-800 sm:w-auto'
							key={idx}>
							<h4 className='text-4xl font-semibold text-shade-darker dark:text-white'>{item.data}</h4>
							<p className='mt-3 font-medium dark:text-gray-400'>{item.title}</p>
						</li>
					))}
				</ul>
			</div>
		</Section>
	)
}

const stats = [
	{
		data: "100+",
		title: "Businesses",
	},
	{
		data: "20+",
		title: "Countries",
	},
	{
		data: "100%",
		title: "Success Rate",
	},
]
