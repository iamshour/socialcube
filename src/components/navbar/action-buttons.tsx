"use client"

//#region Import
import PATHS from "@/constants/paths"
import { AlignJustify, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import Button from "../ui/button"

// import DropdownMenu from "./drop-down-menu"
//#endregion

export default function ActionButtons() {
	const [isDropdownVisible, setDropdownVisible] = useState(false)

	const toggleDropdown = () => setDropdownVisible((prev) => !prev)

	// const closeDropdown = () => setDropdownVisible(false)

	return (
		<div className='pr-2'>
			<div className=' flex items-center justify-center '>
				<div className='flex xl:space-x-4'>
					<Link className='hidden items-center lg:flex' href={PATHS.CONTACT_US}>
						<div className=''>Request a demo</div>
					</Link>

					<div className='hidden items-center font-thin lg:flex'>|</div>
				</div>

				<div className='flex items-center pr-4 lg:space-x-4'>
					<Link href={"/free"}>
						<Button className='text-md hidden items-center border-none lg:flex' variant='outline'>
							Log in
						</Button>
					</Link>
					<Link href={PATHS.CONTACT_US}>
						<Button className='hidden lg:block'>Get Bird free</Button>
					</Link>
				</div>
			</div>

			{isDropdownVisible && (
				<div className='rounded-full xl:hidden' onClick={toggleDropdown}>
					<X className='h-5 w-5  items-center justify-center rounded-full' />
				</div>
			)}
			{!isDropdownVisible && (
				<div className='flex lg:hidden' onClick={toggleDropdown}>
					<AlignJustify className='mr-2 h-6 w-6 items-center justify-center' />
				</div>
			)}

			{/* {isDropdownVisible && <DropdownMenu onClose={closeDropdown} />} */}
		</div>
	)
}
