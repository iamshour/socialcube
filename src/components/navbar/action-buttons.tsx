"use client"

//#region Import
import PATHS from "@/constants/paths"
import { AlignJustify, X } from "lucide-react"
import { useState } from "react"

import Button from "../ui/button"

// import DropdownMenu from "./drop-down-menu"
//#endregion

export default function ActionButtons({ ctaLabel }: { ctaLabel: string }) {
	const [isDropdownVisible, setDropdownVisible] = useState(false)

	const toggleDropdown = () => setDropdownVisible((prev) => !prev)

	// const closeDropdown = () => setDropdownVisible(false)

	return (
		<div className='pr-2'>
			<Button as='link' className='!hidden sm:!block' href={PATHS.CONTACT_US}>
				{ctaLabel}
			</Button>

			{isDropdownVisible && (
				<div className='rounded-full sm:hidden' onClick={toggleDropdown}>
					<X className='h-5 w-5  items-center justify-center rounded-full' />
				</div>
			)}
			{!isDropdownVisible && (
				<div className='flex sm:hidden' onClick={toggleDropdown}>
					<AlignJustify className='mr-2 h-6 w-6 items-center justify-center' />
				</div>
			)}

			{/* {isDropdownVisible && <DropdownMenu onClose={closeDropdown} />} */}
		</div>
	)
}
