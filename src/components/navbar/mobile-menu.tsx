"use client"

import PATHS from "@/constants/paths"
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
				<Button className='me-2 ms-auto md:hidden' onClick={onClose} size='icon' variant='ghost'>
					<LuX className='size-5' />
				</Button>
			) : (
				<Button className='me-2 ms-auto md:hidden' onClick={() => setMobileMenuOpen(true)} size='icon' variant='ghost'>
					<LuAlignJustify className='size-5' />
				</Button>
			)}

			{/* Going to use Shadcn's Sheet Componen here...  */}

			{mobileMenuOpen && (
				<div className='absolute inset-0 top-14 h-[calc(100vh-56px)] w-screen items-center justify-center bg-white px-4 dark:bg-neutral-900 md:hidden'>
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
						<Button as='link' className='w-full' href={PATHS.CONTACT_US}>
							Contact Sales
						</Button>
					</div>
				</div>
			)}
		</>
	)
}

export default MobileMenu
