"use client"

//#region Import
import PATHS from "@/constants/paths"
import { Link } from "@/next.navigation"
import cn from "@/utils/cn"

import NavigationMenu, { navTriggerClassName } from "../ui/navigation-menu" // , { navTriggerClassName }
import servicesData, { Service } from "@/app/[locale]/services/[slug]/data"
//#endregion

const Menu = () => (
	<NavigationMenu className='hidden sm:flex'>
		<NavigationMenu.List>
			<NavigationMenu.Item>
				<NavigationMenu.Trigger>Services</NavigationMenu.Trigger>
				<NavigationMenu.Content>
					<div className='flex'>
						<ul className='grid  border-r p-2  hover:cursor-pointer md:w-[400px] lg:w-[250px]'>
							{servicesData?.slice(0, 3)?.map(({ icon: Icon, slug }) => (
								<Link
									className='flex items-center gap-1 rounded-sm p-1 hover:bg-gray-400/10'
									href={PATHS.SERVICES[slug]}
									key={slug}>
									<Icon className='mr-2 text-2xl text-red-600' />
									<div>
										<span>{servicesContentFromSlug[slug].title}</span>
										<p className='text-sm font-light text-gray-400'>{servicesContentFromSlug[slug].info}</p>
									</div>
								</Link>
							))}
						</ul>
						<ul className='grid  border-r p-2  hover:cursor-pointer md:w-[400px] lg:w-[250px]'>
							{servicesData?.slice(3, 6).map(({ icon: Icon, slug }) => (
								<Link
									className='flex items-center gap-1 rounded-sm p-1 hover:bg-gray-400/10'
									href={PATHS.SERVICES[slug]}
									key={slug}>
									<Icon className='mr-2 text-2xl text-red-600' />
									<div>
										<span>{servicesContentFromSlug[slug].title}</span>
										<p className='text-sm font-light text-gray-400'>{servicesContentFromSlug[slug].info}</p>
									</div>
								</Link>
							))}
						</ul>
					</div>
				</NavigationMenu.Content>
			</NavigationMenu.Item>

			<NavigationMenu.Item>
				<NavigationMenu.Trigger>Download</NavigationMenu.Trigger>
				<NavigationMenu.Content>
					<ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
						{aboutUs.map((component) => (
							<ListItem href={component.href} key={component.title} title={component.title} />
						))}
					</ul>
				</NavigationMenu.Content>
			</NavigationMenu.Item>

			<NavigationMenu.Item>
				<Link className={navTriggerClassName} href={PATHS.ABOUT_US}>
					About Us
				</Link>
			</NavigationMenu.Item>
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

const aboutUs: Record<"href" | "title", string>[] = [
	{
		href: "/docs/primitives/alert-dialog",
		title: "َIntro",
	},
	{
		href: "/docs/primitives/alert-dialog",
		title: "Mission & Vision",
	},
	{
		href: "/docs/primitives/hover-card",
		title: "Company Values",
	},
	{
		href: "/docs/primitives/progress",
		title: "Careers",
	},
]

const servicesContentFromSlug: Record<Service, Record<"info" | "title", string>> = {
	"accounting-software": {
		info: "Financial Mastery",
		title: "Accounting Software",
	},
	"app-development": {
		info: "App Innovators",
		title: "App development",
	},
	branding: {
		info: "Identity Masters",
		title: "Brand Strategy",
	},
	"ecommerce-solutions": {
		info: "Online Retail",
		title: "E-commerce Solutions",
	},
	"social-media": {
		info: "Engagement Experts",
		title: "Social Media",
	},
	"web-development": {
		info: "Digital Architects",
		title: "Web development",
	},
}
