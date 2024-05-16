"use client"

//#region Import
import PATHS from "@/constants/paths"
import navLinks from "@/next.navlinks"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { useState } from "react"
import { LuAlignJustify, LuX } from "react-icons/lu"

import Accordion from "../ui/accordion"
import Button from "../ui/button"
import Sheet from "../ui/sheet"
//#endregion

const MobileMenu = () => {
	const t = useTranslations("navbar.navs")

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
				<Accordion className='pl-2' collapsible defaultValue={navLinks[0].key} type='single'>
					{navLinks?.map((item) => {
						if (item.type === "nested-links")
							return (
								<Accordion.Item className='mt-6 border-b' key={item.key} value={item.key}>
									<Accordion.Trigger>{t(`${item.key}.label`)}</Accordion.Trigger>
									<Accordion.Content className='space-y-2' defaultValue={navLinks[0].key}>
										{item.links.map(({ href, icon: Icon, slug }) => (
											<Link className='flex' href={href} key={slug} onClick={onClose}>
												<Icon className='mr-4 h-6 w-6 text-orange-400' />
												<div>{t(`${item.key}.nested-links.${slug}.label` as any)}</div>
											</Link>
										))}
									</Accordion.Content>
								</Accordion.Item>
							)

						return (
							<Link
								className='flex flex-1 items-center justify-between border-b py-4'
								href={item.href}
								key={item.key}
								onClick={onClose}>
								{t(`${item.key}.label`)}
							</Link>
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
