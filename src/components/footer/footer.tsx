"use client"

//#region Import
import { servicesNestedLinks } from "@/app/[locale]/services/data"
import PATHS from "@/constants/paths"
import navLinks, { type NestedNavLink } from "@/next.navlinks"
import { useTranslations } from "next-intl"
import { useLocomotiveScroll } from "react-locomotive-scroll"

import Logo from "../common/logo"
import { footerSocials } from "./data"
import LinksColumn from "./links-column"
//#endregion

const Footer = () => {
	const { scroll } = useLocomotiveScroll()

	const t = useTranslations()

	return (
		<footer
			className='op-class bg-shade-lighter/20 dark:bg-shade-mute'
			data-scroll
			data-scroll-class='fadeIn'
			data-scroll-repeat='true'
			data-scroll-speed='2'>
			<div className='mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8'>
				<div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
					<div>
						<Logo height={56} onClick={() => scroll?.scrollTo("top")} />

						<p className='mt-4 max-w-xs text-gray-500 dark:text-gray-200'>{t("footer.catch-phrase")}</p>

						<ul className='mt-8 flex gap-6'>
							{footerSocials.map(({ href, icon: Icon, label }) => (
								<li key={label}>
									<a
										className='text-gray-700 transition hover:text-shade-light dark:text-gray-400 dark:hover:text-shade-dark'
										href={href}
										rel='noreferrer'
										target='_blank'>
										<span className='sr-only'>{label}</span>

										<Icon className='size-6' />
									</a>
								</li>
							))}
						</ul>
					</div>

					<div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4'>
						<LinksColumn
							heading={t("footer.columns.services")}
							links={servicesNestedLinks.map(({ slug, ...rest }) => ({
								...rest,
								label: t(`navbar.navs.services.nested-links.${slug}.label` as any),
							}))}
						/>

						<LinksColumn
							heading={t("footer.columns.company")}
							links={(navLinks.find(({ key }) => key === "company") as NestedNavLink)?.links.map(
								({ slug, ...rest }) => ({ ...rest, label: t(`navbar.navs.company.nested-links.${slug}.label` as any) })
							)}
						/>

						<LinksColumn
							heading={t("footer.columns.helpfulLinks.label")}
							links={[{ href: PATHS.CONTACT_US, label: t("footer.columns.helpfulLinks.contact") }]}
						/>
					</div>
				</div>

				<p className='text-xs text-gray-500 dark:text-gray-400'>
					&copy; {new Date().getFullYear()}. SocialCube.AI. All rights reserved.
				</p>
			</div>
		</footer>
	)
}

export default Footer
