"use client"

//#region Import
import { Link } from "@/next.navigation"
import navLinks from "@/next.navlinks"
import { useTranslations } from "next-intl"
import { useLocomotiveScroll } from "react-locomotive-scroll"

import Button from "../ui/button"
import NavigationMenu, { navTriggerClassName } from "../ui/navigation-menu"
//#endregion

const Menu = () => {
	const t = useTranslations("navbar.navs")

	const { scroll } = useLocomotiveScroll()

	return (
		<NavigationMenu className='hidden sm:flex sm:w-full'>
			<NavigationMenu.List>
				{navLinks.map((item) => {
					if (item.type === "section-link")
						return (
							<Button
								className={navTriggerClassName}
								key={item.key}
								onClick={() => scroll.scrollTo(document.querySelector(item.sectionId))}
								variant='ghost'>
								{t(`${item.key}.label`)}
							</Button>
						)

					if (item.type === "link")
						return (
							<NavigationMenu.Item key={item.key}>
								<Link className={navTriggerClassName} href={item.href}>
									{t(`${item.key}.label`)}
								</Link>
							</NavigationMenu.Item>
						)

					return (
						<NavigationMenu.Item key={item.key}>
							<NavigationMenu.Trigger>{t(`${item.key}.label`)}</NavigationMenu.Trigger>
							<NavigationMenu.Content>
								<div className='grid w-max grid-cols-2 gap-2 border-r p-3 hover:cursor-pointer'>
									{item.links?.map(({ href, icon: Icon, slug }) => (
										<Link
											className='flex items-center gap-1 rounded-md p-2 transition-basic hover:bg-gray-400/10'
											href={href}
											key={slug}>
											<Icon className='me-2 shrink-0 text-xl text-red-600' />
											<div>
												<span className='text-base'>{t(`${item.key}.nested-links.${slug}.label` as any)}</span>
												<p className='text-xs font-light text-gray-400'>
													{t(`${item.key}.nested-links.${slug}.info` as any)}
												</p>
											</div>
										</Link>
									))}
								</div>
							</NavigationMenu.Content>
						</NavigationMenu.Item>
					)
				})}
			</NavigationMenu.List>
		</NavigationMenu>
	)
}

export default Menu
