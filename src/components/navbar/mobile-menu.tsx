"use client"

//#region Import
import FlatColorIconsSpeaker from "~icons/flat-color-icons/speaker"
import Link from "next/link"
import { useState } from "react"
import { LuAlignJustify, LuX } from "react-icons/lu"

import Accordion from "../ui/accordion"
import Button from "../ui/button"
//#endregion

const MobileMenu = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	const onClose = () => setMobileMenuOpen(false)

	return (
		<>
			{mobileMenuOpen ? (
				<div className='rounded-full sm:hidden' onClick={() => setMobileMenuOpen(true)}>
					<LuX className='h-5 w-5  items-center justify-center rounded-full' />
				</div>
			) : (
				<div className='flex sm:hidden' onClick={onClose}>
					<LuAlignJustify className='mr-2 h-6 w-6 items-center justify-center' />
				</div>
			)}

			{/* Going to use Shadcn's Sheet Componen here...  */}

			<div className='absolute right-0 h-screen  w-screen items-center justify-center bg-white  px-4 xl:hidden'>
				<Accordion className='pl-2' collapsible defaultValue='item-1' type='single'>
					<Accordion.Item className='mt-6 border-b' value='item-1'>
						<Accordion.Trigger className=''>Use Cases</Accordion.Trigger>
						<Accordion.Content className='space-y-2' defaultValue='item-1'>
							<Link className='flex' href={"/team-alignment"} onClick={onClose}>
								<div>
									<FlatColorIconsSpeaker className='mr-4 h-6 w-6 text-orange-400' />
								</div>
								<div>Team alignment</div>
							</Link>
							<Link className='flex' href={"/sales"} onClick={onClose}>
								<div>
									<FlatColorIconsSpeaker className='mr-4 h-6 w-6 text-green-400' />
								</div>

								<div>Sales</div>
							</Link>
							<Link className='flex' href={"/engineering"} onClick={onClose}>
								<div>
									<FlatColorIconsSpeaker className='mr-4 h-6 w-6 text-indigo-400' />
								</div>

								<div>Engineering</div>
							</Link>
							<Link className='flex' href={"/design"} onClick={onClose}>
								<div>
									<FlatColorIconsSpeaker className='mr-4 h-6 w-6 text-blue-400' />
								</div>

								<div>Design</div>
							</Link>
							<Link className='flex ' href={"/marketing"} onClick={onClose}>
								<div>
									<FlatColorIconsSpeaker className='mr-4 h-6 w-6 text-rose-400' />
								</div>

								<div>Marketing</div>
							</Link>
							<Link className='flex' href={"/product-management"} onClick={onClose}>
								<div>
									<FlatColorIconsSpeaker className='text-grey-400 mr-4 h-6 w-6' />
								</div>

								<div>Product Management</div>
							</Link>
							<Link className='flex ' href={"/support"} onClick={onClose}>
								<div>
									<FlatColorIconsSpeaker className='mr-4 h-6 w-6 text-amber-400' />
								</div>

								<div>Support</div>
							</Link>
						</Accordion.Content>
					</Accordion.Item>
					<Accordion.Item className=' border-b' value='item-2'>
						<Accordion.Trigger>For Business</Accordion.Trigger>
						<Accordion.Content className='space-y-2'>
							<Link className='flex' href={"/team-alignment"} onClick={onClose}>
								<div>
									<FlatColorIconsSpeaker className='mr-4 h-6 w-6 text-orange-400' />
								</div>
								<div>Team alignment</div>
							</Link>
							<Link className='flex' href={"/sales"} onClick={onClose}>
								<div>
									<FlatColorIconsSpeaker className='mr-4 h-6 w-6 text-green-400' />
								</div>

								<div>Sales</div>
							</Link>
							<Link className='flex' href={"/engineering"} onClick={onClose}>
								<div>
									<FlatColorIconsSpeaker className='mr-4 h-6 w-6 text-indigo-400' />
								</div>

								<div>Engineering</div>
							</Link>
							<Link className='flex' href={"/design"} onClick={onClose}>
								<div>
									<FlatColorIconsSpeaker className='mr-4 h-6 w-6 text-blue-400' />
								</div>

								<div>Design</div>
							</Link>
							<Link className='flex ' href={"/marketing"} onClick={onClose}>
								<div>
									<FlatColorIconsSpeaker className='mr-4 h-6 w-6 text-rose-400' />
								</div>

								<div>Marketing</div>
							</Link>
							<Link className='flex' href={"/product-management"} onClick={onClose}>
								<div>
									<FlatColorIconsSpeaker className='text-grey-400 mr-4 h-6 w-6' />
								</div>

								<div>Product Management</div>
							</Link>
							<Link className='flex ' href={"/support"} onClick={onClose}>
								<div>
									<FlatColorIconsSpeaker className='mr-4 h-6 w-6 text-amber-400' />
								</div>

								<div>Support</div>
							</Link>
						</Accordion.Content>
					</Accordion.Item>

					<Accordion.Item className=' border-b' value='item-3'>
						<Accordion.Trigger>Resources</Accordion.Trigger>
						<Accordion.Content className='space-y-2'>
							<Link className='flex' href={"/team-alignment"} onClick={onClose}>
								<div>
									<FlatColorIconsSpeaker className='mr-4 h-6 w-6 text-orange-400' />
								</div>
								<div>Team alignment</div>
							</Link>
							<Link className='flex' href={"/sales"} onClick={onClose}>
								<div>
									<FlatColorIconsSpeaker className='mr-4 h-6 w-6 text-green-400' />
								</div>

								<div>Sales</div>
							</Link>
							<Link className='flex' href={"/engineering"} onClick={onClose}>
								<div>
									<FlatColorIconsSpeaker className='mr-4 h-6 w-6 text-indigo-400' />
								</div>

								<div>Engineering</div>
							</Link>
							<Link className='flex' href={"/design"} onClick={onClose}>
								<div>
									<FlatColorIconsSpeaker className='mr-4 h-6 w-6 text-blue-400' />
								</div>

								<div>Design</div>
							</Link>
							<Link className='flex ' href={"/marketing"} onClick={onClose}>
								<div>
									<FlatColorIconsSpeaker className='mr-4 h-6 w-6 text-rose-400' />
								</div>

								<div>Marketing</div>
							</Link>
							<Link className='flex' href={"/product-management"} onClick={onClose}>
								<div>
									<FlatColorIconsSpeaker className='text-grey-400 mr-4 h-6 w-6' />
								</div>

								<div>Product Management</div>
							</Link>
							<Link className='flex ' href={"/support"} onClick={onClose}>
								<div>
									<FlatColorIconsSpeaker className='mr-4 h-6 w-6 text-amber-400' />
								</div>

								<div>Support</div>
							</Link>
						</Accordion.Content>
					</Accordion.Item>

					<Accordion.Item className=' border-b' value='item-4'>
						<Accordion.Trigger>Company</Accordion.Trigger>
						<Accordion.Content className='space-y-2'>
							<Link className='flex' href={"/team-alignment"} onClick={onClose}>
								<div>
									<FlatColorIconsSpeaker className='mr-4 h-6 w-6 text-orange-400' />
								</div>
								<div>Team alignment</div>
							</Link>
							<Link className='flex' href={"/sales"} onClick={onClose}>
								<div>
									<FlatColorIconsSpeaker className='mr-4 h-6 w-6 text-green-400' />
								</div>

								<div>Sales</div>
							</Link>
							<Link className='flex' href={"/engineering"} onClick={onClose}>
								<div>
									<FlatColorIconsSpeaker className='mr-4 h-6 w-6 text-indigo-400' />
								</div>

								<div>Engineering</div>
							</Link>
							<Link className='flex' href={"/design"} onClick={onClose}>
								<div>
									<FlatColorIconsSpeaker className='mr-4 h-6 w-6 text-blue-400' />
								</div>

								<div>Design</div>
							</Link>
							<Link className='flex ' href={"/marketing"} onClick={onClose}>
								<div>
									<FlatColorIconsSpeaker className='mr-4 h-6 w-6 text-rose-400' />
								</div>

								<div>Marketing</div>
							</Link>
							<Link className='flex' href={"/product-management"} onClick={onClose}>
								<div>
									<FlatColorIconsSpeaker className='text-grey-400 mr-4 h-6 w-6' />
								</div>

								<div>Product Management</div>
							</Link>
							<Link className='flex ' href={"/support"} onClick={onClose}>
								<div>
									<FlatColorIconsSpeaker className='mr-4 h-6 w-6 text-amber-400' />
								</div>

								<div>Support</div>
							</Link>
						</Accordion.Content>
					</Accordion.Item>

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
		</>
	)
}

export default MobileMenu
