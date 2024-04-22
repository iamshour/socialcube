//#region Import
import { useTranslations } from "next-intl"

import ActionButtons from "./action-buttons"
import Logo from "./logo"
import Menu from "./menu"
//#endregion

export default function Navbar() {
	const t = useTranslations("navbar")

	return (
		<nav
			className={`sticky inset-x-0 top-0 z-50 flex h-14 w-screen items-center justify-between space-x-10 border-b border-gray-200/20 bg-white/50 backdrop-blur-xl transition-opacity data-[direction=down]:-translate-y-14 data-[direction=down]:opacity-0
			 dark:border-gray-800/40 dark:bg-black/50`}
			data-scroll
			data-scroll-sticky
			data-scroll-target='#scroll-container'
			id='navbar'>
			<div className='hidden items-center justify-center sm:flex'>
				<Logo className='px-6' />
				<Menu />
			</div>

			<ActionButtons ctaLabel={t("actions.contact")} />
		</nav>
	)
}
