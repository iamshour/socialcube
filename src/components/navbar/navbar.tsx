//#region Import
import Logo from "../common/logo"
import ActionButtons from "./action-buttons"
import Menu from "./menu"
import MobileMenu from "./mobile-menu"
//#endregion

const Navbar = () => (
	<header
		className='sticky inset-x-0 top-0 z-50 flex h-14 w-screen items-center gap-4 border-b border-gray-200/20 bg-white/50 backdrop-blur-xl transition-opacity data-[direction=down]:-translate-y-14 data-[direction=down]:opacity-0 dark:border-gray-800/40 dark:bg-black/50'
		data-scroll
		data-scroll-sticky
		data-scroll-target='#scroll-container'
		id='navbar'>
		<Logo className='px-6' />

		<div className='hidden w-full flex-1 items-center justify-between md:flex'>
			<Menu />

			<ActionButtons />
		</div>

		<MobileMenu />
	</header>
)

export default Navbar
