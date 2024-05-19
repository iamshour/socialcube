//#region Import
import cn from "@/utils/cn"
import { Content, Indicator, Item, Link, List, Root, Trigger, Viewport } from "@radix-ui/react-navigation-menu"
import { LuChevronDown } from "react-icons/lu"
//#endregion

const NavigationMenu = ({ children, className, ...props }: React.ComponentPropsWithoutRef<typeof Root>) => (
	<Root className={cn("relative z-10 max-w-max flex-1 flex-center", className)} {...props}>
		{children}
		<NavigationMenuViewport />
	</Root>
)

const NavigationMenuList = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof List>) => (
	<List className={cn("group flex-1 list-none space-x-1 flex-center", className)} {...props} />
)

export const navTriggerClassName = `group inline-flex-center h-10 w-max rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 bg-[transparent] hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 
focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-slate-100/50 data-[state=open]:bg-slate-100/50 dark:hover:bg-slate-800/50 dark:hover:text-slate-50 dark:focus:bg-slate-800/50 dark:focus:text-slate-50
 dark:data-[active]:bg-slate-800/50 dark:data-[state=open]:bg-slate-800/50`

const NavigationMenuTrigger = ({ children, className, ...props }: React.ComponentPropsWithoutRef<typeof Trigger>) => (
	<Trigger className={cn(navTriggerClassName, className)} {...props}>
		{children}
		{""}
		<LuChevronDown
			aria-hidden='true'
			className='relative top-[1px] ms-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180'
		/>
	</Trigger>
)

const NavigationMenuContent = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof Content>) => (
	<Content
		className={cn(
			`left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 
      data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto`,
			className
		)}
		{...props}
	/>
)

const NavigationMenuViewport = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof Viewport>) => (
	<div className={cn("absolute left-0 top-full flex justify-center")}>
		<Viewport
			className={cn(
				`origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border border-slate-200 bg-white text-slate-950 shadow-lg data-[state=open]:animate-in
         data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 md:w-[var(--radix-navigation-menu-viewport-width)]`,
				className
			)}
			{...props}
		/>
	</div>
)

const NavigationMenuIndicator = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof Indicator>) => (
	<Indicator
		className={cn(
			"top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
			className
		)}
		{...props}>
		<div className='relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-slate-200 shadow-md dark:bg-slate-800' />
	</Indicator>
)

NavigationMenu.Link = Link
NavigationMenu.Item = Item
NavigationMenu.Menu = NavigationMenu
NavigationMenu.List = NavigationMenuList
NavigationMenu.Trigger = NavigationMenuTrigger
NavigationMenu.Content = NavigationMenuContent
NavigationMenu.Viewport = NavigationMenuViewport
NavigationMenu.Indicator = NavigationMenuIndicator

export default NavigationMenu
