"use client"

import PATHS from "@/constants/paths"
import { Link } from "@/next.navigation"
//#region Import
import cn from "@/utils/cn"
import { LuTarget } from "react-icons/lu"

import NavigationMenu from "../ui/navigation-menu" // , { navTriggerClassName }
//#endregion

const Menu = () => (
	<NavigationMenu className='hidden sm:flex'>
		<NavigationMenu.List>
			<NavigationMenu.Item>
				<NavigationMenu.Trigger>Services</NavigationMenu.Trigger>
				<NavigationMenu.Content>
					<div className='flex'>
						<ul className='grid  border-r p-2  hover:cursor-pointer md:w-[400px] lg:w-[250px]'>
							<Link
								className='flex items-center gap-1 rounded-sm p-1 hover:bg-gray-400/10'
								href={PATHS.SERVICES["social-media"]}>
								<LuTarget className='mr-2 text-2xl text-red-600' />
								<div className=''>
									<span>Social Media</span>
									<p className='text-sm font-light text-gray-400'>Engagement Experts</p>
								</div>
							</Link>

							<Link
								className='flex items-center gap-1 rounded-sm p-1 hover:bg-gray-400/10'
								href={PATHS.SERVICES["web-development"]}>
								<LuTarget className='mr-2 text-2xl text-blue-600' />
								<div className=''>
									<span>Web development</span>
									<p className='text-sm font-light text-gray-400'>For every team or size</p>
								</div>
							</Link>

							<Link
								className='flex items-center gap-1 rounded-sm p-1 hover:bg-gray-400/10'
								href={PATHS.SERVICES["app-development"]}>
								<LuTarget className='mr-2 text-2xl text-yellow-600' />
								<div className=''>
									<span>App development</span>
									<p className='text-sm font-light text-gray-400'>Simple & Powerful</p>
								</div>
							</Link>

							<Link
								className='flex items-center gap-1 rounded-sm p-1 hover:bg-gray-400/10'
								href={PATHS.SERVICES["accounting-software"]}>
								<LuTarget className='mr-2 text-2xl text-purple-600' />
								<div className=''>
									<span>Accounting platform</span>
									<p className='text-sm font-light text-gray-400'>Integrated AI Assistant</p>
								</div>
							</Link>
						</ul>
						<div>
							<ul className='grid  border-r p-2  hover:cursor-pointer md:w-[400px] lg:w-[250px]'>
								<div className='flex items-center gap-1 rounded-sm p-1 hover:bg-gray-400/10'>
									<div>
										<a className=''>Template gallery</a>
										<p className='text-sm font-light text-gray-400'>Setups to get you started</p>
									</div>
								</div>

								<div className='flex items-center gap-1 rounded-sm p-1 hover:bg-gray-400/10'>
									<div>
										<a>Customer Stories</a>
										<p className='text-sm font-light text-gray-400'>See how teams use bird</p>
									</div>
								</div>

								<div className='flex items-center gap-1 rounded-sm p-1 hover:bg-gray-400/10'>
									<div>
										<a>Connections</a>
										<p className='text-sm font-light text-gray-400'>Connect your tools to bird</p>
									</div>
								</div>
							</ul>
						</div>
					</div>
				</NavigationMenu.Content>
			</NavigationMenu.Item>

			<NavigationMenu.Item>
				<NavigationMenu.Trigger>Download</NavigationMenu.Trigger>
				<NavigationMenu.Content>
					<ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
						{components.map((component) => (
							<ListItem href={component.href} key={component.title} title={component.title}>
								{component.description}
							</ListItem>
						))}
					</ul>
				</NavigationMenu.Content>
			</NavigationMenu.Item>

			<NavigationMenu.Item>
				<NavigationMenu.Trigger>Solutions</NavigationMenu.Trigger>
				<NavigationMenu.Content>
					<ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
						{components.map((component) => (
							<ListItem href={component.href} key={component.title} title={component.title}>
								{component.description}
							</ListItem>
						))}
					</ul>
				</NavigationMenu.Content>
			</NavigationMenu.Item>

			<NavigationMenu.Item>
				<NavigationMenu.Trigger>Resources</NavigationMenu.Trigger>
				<NavigationMenu.Content>
					<ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
						{components.map((component) => (
							<ListItem href={component.href} key={component.title} title={component.title}>
								{component.description}
							</ListItem>
						))}
					</ul>
				</NavigationMenu.Content>
			</NavigationMenu.Item>
			{/* <NavigationMenu.Item>
					<Link href='/pricing' legacyBehavior passHref>
						<NavigationMenu.Link className={navTriggerClassName}>Pricing</NavigationMenu.Link>
					</Link>
				</NavigationMenu.Item> */}
		</NavigationMenu.List>
	</NavigationMenu>
)

export default Menu

const ListItem = ({ children, className, title, ...props }: React.ComponentPropsWithoutRef<"a">) => (
	<li>
		<NavigationMenu.Link asChild>
			<a
				className={cn(
					"hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
					className
				)}
				{...props}>
				<div className='text-sm font-medium leading-none'>{title}</div>
				<p className='text-muted-foreground line-clamp-2 text-sm leading-snug'>{children}</p>
			</a>
		</NavigationMenu.Link>
	</li>
)

const components: { description: string; href: string; title: string }[] = [
	{
		description: "A modal dialog that interrupts the user with important content and expects a response.",
		href: "/docs/primitives/alert-dialog",
		title: "Alert Dialog",
	},
	{
		description: "For sighted users to preview content available behind a link.",
		href: "/docs/primitives/hover-card",
		title: "Hover Card",
	},
	{
		description:
			"Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
		href: "/docs/primitives/progress",
		title: "Progress",
	},
	{
		description: "Visually or semantically separates content.",
		href: "/docs/primitives/scroll-area",
		title: "Scroll-area",
	},
	{
		description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
		href: "/docs/primitives/tabs",
		title: "Tabs",
	},
	{
		description:
			"A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
		href: "/docs/primitives/tooltip",
		title: "Tooltip",
	},
]
