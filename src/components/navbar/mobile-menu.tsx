"use client"

//#region Import
import PATHS from "@/constants/paths"
import navLinks from "@/next.navlinks"
import { useTranslations } from "next-intl"
import { useState } from "react"
import { LuAlignJustify, LuX } from "react-icons/lu"
import { useLocomotiveScroll } from "react-locomotive-scroll"

import Accordion from "../ui/accordion"
import Button from "../ui/button"
import Sheet from "../ui/sheet"
//#endregion

const MobileMenu = () => {
	const t = useTranslations("navbar.navs")

	const { scroll } = useLocomotiveScroll()

	const [isMenuOpen, toggleMenu] = useState(false)

	const onClose = () => toggleMenu(false)

	return (
		<Sheet onOpenChange={toggleMenu} open={isMenuOpen}>
			<Sheet.Trigger asChild>
				<Button className='me-2 ms-auto md:!hidden' size='icon' variant='ghost'>
					{isMenuOpen ? <LuX className='size-5' /> : <LuAlignJustify className='size-5' />}
				</Button>
			</Sheet.Trigger>
			<Sheet.Content className='md:hidden' overlayClassName='md:hidden'>
				<Accordion className='ps-2 pt-4' collapsible defaultValue={navLinks[0].key} type='single'>
					{navLinks?.map((item) => {
						if (item.type === "section-link")
							return (
								<Button
									className='mt-2 h-max w-full !flex-1 !justify-start border-b py-4 ps-0 text-base hover:bg-transparent hover:text-shade-light'
									key={item.key}
									onClick={() => scroll.scrollTo(document.querySelector(item.sectionId))}
									variant='ghost'>
									{t(`${item.key}.label`)}
								</Button>
							)

						if (item.type === "link")
							return (
								<Button
									as='link'
									className='mt-2 h-max w-full !flex-1 !justify-start border-b py-4 ps-0 text-base hover:bg-transparent hover:text-shade-light'
									href={item.href}
									key={item.key}
									onClick={onClose}
									variant='ghost'>
									{t(`${item.key}.label`)}
								</Button>
							)

						return (
							<Accordion.Item className='mt-2 border-b' key={item.key} value={item.key}>
								<Accordion.Trigger>{t(`${item.key}.label`)}</Accordion.Trigger>
								<Accordion.Content className='space-y-2' defaultValue={navLinks[0].key}>
									{item.links.map(({ href, icon: Icon, slug }) => (
										<Button
											as='link'
											className='w-full !justify-start'
											href={href}
											key={slug}
											onClick={onClose}
											variant='secondary'>
											<Icon className='me-4 h-6 w-6 text-orange-400' />
											<span>{t(`${item.key}.nested-links.${slug}.label` as any)}</span>
										</Button>
									))}
								</Accordion.Content>
							</Accordion.Item>
						)
					})}
				</Accordion>

				<Sheet.Footer className='pt-12'>
					<Button as='link' className='w-full' href={PATHS.CONTACT_US}>
						Contact Sales
					</Button>
				</Sheet.Footer>
			</Sheet.Content>
		</Sheet>
	)
}

export default MobileMenu
