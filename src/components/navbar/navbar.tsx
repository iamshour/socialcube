//#region Import
import { useTranslations } from "next-intl"

import ActionButtons from "./action-buttons"
import Logo from "./logo"
import Menu from "./menu"
//#endregion

export default function Navbar() {
	const t = useTranslations("navbar")
	// const [hasScrolled, setHasScrolled] = useState(false)

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		if (window.scrollY > 0) {
	// 			setHasScrolled(true)
	// 		} else {
	// 			setHasScrolled(false)
	// 		}
	// 	}

	// 	window.addEventListener("scroll", handleScroll)

	// 	return () => {
	// 		window.removeEventListener("scroll", handleScroll)
	// 	}
	// }, [])

	return (
		<div className='fixed left-0 right-0 top-0 z-50 flex h-14 items-center justify-between space-x-10 border-b border-gray-200/20 bg-white/50 backdrop-blur-xl'>
			<div className='hidden items-center justify-center sm:flex'>
				<Logo className='px-6' />
				<Menu />
			</div>

			<ActionButtons ctaLabel={t("actions.contact")} />
		</div>
	)
}
