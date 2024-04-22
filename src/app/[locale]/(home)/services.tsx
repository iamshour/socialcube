//#region Import
import Section from "@/components/layouts/section"
import PATHS from "@/constants/paths"
import { Link } from "@/next.navigation"
import { useTranslations } from "next-intl"

import servicesData from "../services/[slug]/data"
//#endregion

export default function Services() {
	const t = useTranslations("home.services")

	return (
		<Section heading={t("heading")} subHeading={t("subHeading")}>
			<div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
				{servicesData.map(({ icon: Icon, slug }) => (
					<Link
						className='block rounded-xl border border-shade-light/10 p-8 shadow-lg shadow-shade-light/10 transition hover:border-shade-light/20 hover:shadow-shade-light/30'
						href={PATHS.SERVICES[slug]}
						key={slug}>
						<Icon className='size-10 text-pink-500' />

						<h2 className='mt-4 text-xl font-bold text-gray-900 dark:text-white'>{t(`content.${slug}.title`)}</h2>
						<p className='mt-1 text-sm text-gray-500 dark:text-gray-50/70'>{t(`content.${slug}.description`)}</p>
					</Link>
				))}
			</div>
		</Section>
	)
}
