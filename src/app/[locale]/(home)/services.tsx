//#region Import
import Section from "@/components/common/section"
import { Link } from "@/next.navigation"
import { useTranslations } from "next-intl"

import { servicesNestedLinks } from "../services/data"
//#endregion

const Services = () => {
	const t = useTranslations("home.services")

	return (
		<Section heading={t("heading")} subHeading={t("subHeading")}>
			<div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
				{servicesNestedLinks?.map(({ href, icon: Icon, slug }, index) => (
					<Link
						className='block rounded-xl border border-shade-light/10 p-8 shadow-lg shadow-shade-light/10 transition prevent-selection hover:border-shade-light/20 hover:shadow-shade-light/30 focus:outline-none focus:ring-4 focus:ring-shade-light focus:ring-offset-2'
						data-scroll
						data-scroll-speed={speeds[index]}
						href={href}
						key={slug}>
						<Icon className='size-10 text-pink-500' />

						<h2 className='mt-4 text-xl font-bold text-gray-900 dark:text-white'>
							{t(`content.${slug}.label` as any)}
						</h2>
						<p className='mt-1 text-sm text-gray-500 dark:text-gray-50/70'>{t(`content.${slug}.description` as any)}</p>
					</Link>
				))}
			</div>
		</Section>
	)
}

export default Services

const speeds = ["2", "0", "2", "2", "0", "2"]
