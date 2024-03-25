//#region Import
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BarChart, Code, DollarSign, Headphones, PaintBucket, Settings, UserPlus } from "lucide-react"
import Link from "next/link"

import Button from "../../ui/button"
//#endregion

interface DropDownMenuProps {
	onClose: () => void
}

const DropdownMenu = ({ onClose }: DropDownMenuProps) => (
	<div className='absolute right-0 h-screen  w-screen items-center justify-center bg-white  px-4 xl:hidden'>
		<Accordion className='pl-2' collapsible defaultValue='item-1' type='single'>
			<AccordionItem className='mt-6 border-b' value='item-1'>
				<AccordionTrigger className=''>Use Cases</AccordionTrigger>
				<AccordionContent className='space-y-2' defaultValue='item-1'>
					<Link className='flex' href={"/team-alignment"} onClick={onClose}>
						<div>
							<UserPlus className='mr-4 h-6 w-6 text-orange-400' />
						</div>
						<div>Team alignment</div>
					</Link>
					<Link className='flex' href={"/sales"} onClick={onClose}>
						<div>
							<DollarSign className='mr-4 h-6 w-6 text-green-400' />
						</div>

						<div>Sales</div>
					</Link>
					<Link className='flex' href={"/engineering"} onClick={onClose}>
						<div>
							<Code className='mr-4 h-6 w-6 text-indigo-400' />
						</div>

						<div>Engineering</div>
					</Link>
					<Link className='flex' href={"/design"} onClick={onClose}>
						<div>
							<PaintBucket className='mr-4 h-6 w-6 text-blue-400' />
						</div>

						<div>Design</div>
					</Link>
					<Link className='flex ' href={"/marketing"} onClick={onClose}>
						<div>
							<BarChart className='mr-4 h-6 w-6 text-rose-400' />
						</div>

						<div>Marketing</div>
					</Link>
					<Link className='flex' href={"/product-management"} onClick={onClose}>
						<div>
							<Settings className='text-grey-400 mr-4 h-6 w-6' />
						</div>

						<div>Product Management</div>
					</Link>
					<Link className='flex ' href={"/support"} onClick={onClose}>
						<div>
							<Headphones className='mr-4 h-6 w-6 text-amber-400' />
						</div>

						<div>Support</div>
					</Link>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem className=' border-b' value='item-2'>
				<AccordionTrigger>For Business</AccordionTrigger>
				<AccordionContent className='space-y-2'>
					<Link className='flex' href={"/team-alignment"} onClick={onClose}>
						<div>
							<UserPlus className='mr-4 h-6 w-6 text-orange-400' />
						</div>
						<div>Team alignment</div>
					</Link>
					<Link className='flex' href={"/sales"} onClick={onClose}>
						<div>
							<DollarSign className='mr-4 h-6 w-6 text-green-400' />
						</div>

						<div>Sales</div>
					</Link>
					<Link className='flex' href={"/engineering"} onClick={onClose}>
						<div>
							<Code className='mr-4 h-6 w-6 text-indigo-400' />
						</div>

						<div>Engineering</div>
					</Link>
					<Link className='flex' href={"/design"} onClick={onClose}>
						<div>
							<PaintBucket className='mr-4 h-6 w-6 text-blue-400' />
						</div>

						<div>Design</div>
					</Link>
					<Link className='flex ' href={"/marketing"} onClick={onClose}>
						<div>
							<BarChart className='mr-4 h-6 w-6 text-rose-400' />
						</div>

						<div>Marketing</div>
					</Link>
					<Link className='flex' href={"/product-management"} onClick={onClose}>
						<div>
							<Settings className='text-grey-400 mr-4 h-6 w-6' />
						</div>

						<div>Product Management</div>
					</Link>
					<Link className='flex ' href={"/support"} onClick={onClose}>
						<div>
							<Headphones className='mr-4 h-6 w-6 text-amber-400' />
						</div>

						<div>Support</div>
					</Link>
				</AccordionContent>
			</AccordionItem>

			<AccordionItem className=' border-b' value='item-3'>
				<AccordionTrigger>Resources</AccordionTrigger>
				<AccordionContent className='space-y-2'>
					<Link className='flex' href={"/team-alignment"} onClick={onClose}>
						<div>
							<UserPlus className='mr-4 h-6 w-6 text-orange-400' />
						</div>
						<div>Team alignment</div>
					</Link>
					<Link className='flex' href={"/sales"} onClick={onClose}>
						<div>
							<DollarSign className='mr-4 h-6 w-6 text-green-400' />
						</div>

						<div>Sales</div>
					</Link>
					<Link className='flex' href={"/engineering"} onClick={onClose}>
						<div>
							<Code className='mr-4 h-6 w-6 text-indigo-400' />
						</div>

						<div>Engineering</div>
					</Link>
					<Link className='flex' href={"/design"} onClick={onClose}>
						<div>
							<PaintBucket className='mr-4 h-6 w-6 text-blue-400' />
						</div>

						<div>Design</div>
					</Link>
					<Link className='flex ' href={"/marketing"} onClick={onClose}>
						<div>
							<BarChart className='mr-4 h-6 w-6 text-rose-400' />
						</div>

						<div>Marketing</div>
					</Link>
					<Link className='flex' href={"/product-management"} onClick={onClose}>
						<div>
							<Settings className='text-grey-400 mr-4 h-6 w-6' />
						</div>

						<div>Product Management</div>
					</Link>
					<Link className='flex ' href={"/support"} onClick={onClose}>
						<div>
							<Headphones className='mr-4 h-6 w-6 text-amber-400' />
						</div>

						<div>Support</div>
					</Link>
				</AccordionContent>
			</AccordionItem>

			<AccordionItem className=' border-b' value='item-4'>
				<AccordionTrigger>Company</AccordionTrigger>
				<AccordionContent className='space-y-2'>
					<Link className='flex' href={"/team-alignment"} onClick={onClose}>
						<div>
							<UserPlus className='mr-4 h-6 w-6 text-orange-400' />
						</div>
						<div>Team alignment</div>
					</Link>
					<Link className='flex' href={"/sales"} onClick={onClose}>
						<div>
							<DollarSign className='mr-4 h-6 w-6 text-green-400' />
						</div>

						<div>Sales</div>
					</Link>
					<Link className='flex' href={"/engineering"} onClick={onClose}>
						<div>
							<Code className='mr-4 h-6 w-6 text-indigo-400' />
						</div>

						<div>Engineering</div>
					</Link>
					<Link className='flex' href={"/design"} onClick={onClose}>
						<div>
							<PaintBucket className='mr-4 h-6 w-6 text-blue-400' />
						</div>

						<div>Design</div>
					</Link>
					<Link className='flex ' href={"/marketing"} onClick={onClose}>
						<div>
							<BarChart className='mr-4 h-6 w-6 text-rose-400' />
						</div>

						<div>Marketing</div>
					</Link>
					<Link className='flex' href={"/product-management"} onClick={onClose}>
						<div>
							<Settings className='text-grey-400 mr-4 h-6 w-6' />
						</div>

						<div>Product Management</div>
					</Link>
					<Link className='flex ' href={"/support"} onClick={onClose}>
						<div>
							<Headphones className='mr-4 h-6 w-6 text-amber-400' />
						</div>

						<div>Support</div>
					</Link>
				</AccordionContent>
			</AccordionItem>

			<Link className='flex flex-1 items-center justify-between border-b py-4' href={"/pricing"}>
				Pricing
			</Link>

			<Link className='flex flex-1 items-center justify-between border-b py-4' href={"/contact"}>
				Request a demo
			</Link>
		</Accordion>

		<div className='pt-12'>
			<div className='flex flex-col space-y-4 px-4'>
				<Link href={"/sign-in"}>
					<Button className='w-full'>Get bird free</Button>
				</Link>

				<Link href={"/sign-in"}>
					<Button className='w-full' variant={"outline"}>
						Log in
					</Button>
				</Link>
			</div>
		</div>
	</div>
)

export default DropdownMenu
