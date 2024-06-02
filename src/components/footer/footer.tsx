"use client"

//#region Import
import { servicesNestedLinks } from "@/app/[locale]/services/data"
import PATHS from "@/constants/paths"
import { Link } from "@/next.navigation"
import navLinks, { NestedNavLink } from "@/next.navlinks"
import { useTranslations } from "next-intl"
import { useLocomotiveScroll } from "react-locomotive-scroll"

import Logo from "../common/logo"
import { footerSocials } from "./data"
//#endregion

const Footer = () => {
	const { scroll } = useLocomotiveScroll()

	const t = useTranslations()

	return (
		<footer
			className='op-class bg-shade-lighter/20 dark:bg-slate-900'
			data-scroll
			data-scroll-class='fadeIn'
			data-scroll-repeat='true'
			data-scroll-speed='2'>
			<div className='mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8'>
				<div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
					<div>
						<Logo height={56} onClick={() => scroll?.scrollTo("top")} />

						<p className='mt-4 max-w-xs text-gray-500'>{t("footer.catch-phrase")}</p>

						<ul className='mt-8 flex gap-6'>
							{footerSocials.map(({ alt, icon: Icon, link }) => (
								<li key={alt}>
									<a
										className='text-gray-700 transition hover:text-shade-light'
										href={link}
										rel='noreferrer'
										target='_blank'>
										<span className='sr-only'>{alt}</span>

										<Icon className='size-6' />
									</a>
								</li>
							))}
						</ul>
					</div>

					<div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4'>
						<div>
							<p className='font-medium text-gray-900'>{t("footer.columns.services")}</p>
							<ul className='mt-6 space-y-4 text-sm'>
								{servicesNestedLinks?.map(({ href, slug }) => (
									<li key={slug}>
										<Link className='text-gray-700 transition hover:opacity-75' href={href}>
											{t(`navbar.navs.services.nested-links.${slug}.label` as any)}
										</Link>
									</li>
								))}
							</ul>
						</div>

						<div>
							<p className='font-medium text-gray-900'>{t("footer.columns.company")}</p>

							<ul className='mt-6 space-y-4 text-sm'>
								{(navLinks.find(({ key }) => key === "company") as NestedNavLink)?.links?.map(({ href, slug }) => (
									<li key={slug}>
										<Link className='text-gray-700 transition hover:opacity-75' href={href}>
											{t(`navbar.navs.company.nested-links.${slug}.label` as any)}
										</Link>
									</li>
								))}
							</ul>
						</div>

						<div>
							<p className='font-medium text-gray-900'>{t("footer.columns.helpfulLinks.label")}</p>

							<ul className='mt-6 space-y-4 text-sm'>
								<li>
									<Link className='text-gray-700 transition hover:opacity-75' href={PATHS.CONTACT_US}>
										{t("footer.columns.helpfulLinks.contact")}
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<p className='text-xs text-gray-500'>&copy; {new Date().getFullYear()}. SocialCube.AI. All rights reserved.</p>
			</div>
		</footer>
	)
}

export default Footer
