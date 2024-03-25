"use client"

//#region Import
import ActionButtons from "./action-buttons"
import Logo from "./logo"
import Menu from "./menu"
//#endregion

export default function Navbar() {
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
		<div className='sticky top-0 z-50 flex h-14 items-center justify-between space-x-10 border-b border-gray-200 bg-white'>
			<div className='flex items-center justify-center'>
				<Logo />
				<Menu />
			</div>

			<ActionButtons />
		</div>
	)
}
