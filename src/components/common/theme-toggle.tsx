"use client"

import { useTheme } from "next-themes"
import { LuMoon, LuSun } from "react-icons/lu"

import Button from "../ui/button"
import DropdownMenu from "../ui/dropdown-menu"

const ThemeToggle = () => {
	const { setTheme } = useTheme()

	return (
		<DropdownMenu>
			<DropdownMenu.Trigger asChild>
				<Button size='icon' variant='outline'>
					<LuSun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
					<LuMoon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
					<span className='sr-only'>Toggle theme</span>
				</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content align='end'>
				<DropdownMenu.Item onClick={() => setTheme("light")}>Light</DropdownMenu.Item>
				<DropdownMenu.Item onClick={() => setTheme("dark")}>Dark</DropdownMenu.Item>
				<DropdownMenu.Item onClick={() => setTheme("system")}>System</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu>
	)
}

export default ThemeToggle
