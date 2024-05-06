"use client"

import { Content, Header, Item, Root, Trigger } from "@radix-ui/react-accordion"
import { LuChevronDown } from "react-icons/lu"
import { twMerge } from "tailwind-merge"

const Accordion = (props: React.ComponentPropsWithoutRef<typeof Root>) => <Root {...props} />

const AccordionItem = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof Item>) => (
	<Item className={twMerge("border-b", className)} {...props} />
)

const AccordionTrigger = ({ children, className, ...props }: React.ComponentPropsWithoutRef<typeof Trigger>) => (
	<Header className='flex'>
		<Trigger
			className={twMerge(
				"relative flex flex-1 items-center justify-between rounded-md py-4 font-medium transition-basic hover:text-shade-light focus:outline-none focus:ring-2 focus:ring-shade-light focus:ring-offset-2 [&[data-state=open]>svg]:rotate-180",
				className
			)}
			{...props}>
			{children}
			<LuChevronDown className='h-4 w-4 shrink-0 transition-transform duration-200' />
		</Trigger>
	</Header>
)

const AccordionContent = ({ children, className, ...props }: React.ComponentPropsWithoutRef<typeof Content>) => (
	<Content
		className='overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
		{...props}>
		<div className={twMerge("pb-4 pt-0", className)}>{children}</div>
	</Content>
)

Accordion.Item = AccordionItem
Accordion.Trigger = AccordionTrigger
Accordion.Content = AccordionContent

export default Accordion
