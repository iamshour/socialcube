"use client"

//#region Import
import PATHS from "@/constants/paths"
import { useState } from "react"
import { LuAlignJustify, LuX } from "react-icons/lu"

import LocaleToggle from "../common/locale-toggle"
import ThemeToggle from "../common/theme-toggle"
import Button from "../ui/button"

// import DropdownMenu from "./drop-down-menu"
//#endregion

export default function ActionButtons({ ctaLabel }: { ctaLabel: string }) {
	const [isDropdownVisible, setDropdownVisible] = useState(false)

	const toggleDropdown = () => setDropdownVisible((prev) => !prev)

	// const closeDropdown = () => setDropdownVisible(false)

	return (
		<div className='flex items-center gap-4 pe-2'>
			<LocaleToggle />

			<ThemeToggle />

			<Button as='link' className='!hidden sm:!inline-flex' href={PATHS.CONTACT_US}>
				{ctaLabel}
			</Button>

			{isDropdownVisible ? (
				<div className='rounded-full sm:hidden' onClick={toggleDropdown}>
					<LuX className='h-5 w-5  items-center justify-center rounded-full' />
				</div>
			) : (
				<div className='flex sm:hidden' onClick={toggleDropdown}>
					<LuAlignJustify className='mr-2 h-6 w-6 items-center justify-center' />
				</div>
			)}

			{/* {isDropdownVisible && <DropdownMenu onClose={closeDropdown} />} */}
		</div>
	)
}
