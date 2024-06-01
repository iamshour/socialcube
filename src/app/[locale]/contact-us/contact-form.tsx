"use client"

//#region Import
import Button from "@/components/ui/button"
import Form from "@/components/ui/form"
import Input from "@/components/ui/input"
import PhoneInput from "@/components/ui/phone-input"
import Textarea from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import contactFormSchema, { ContactFormSchemaType } from "./contact-form-schema"
//#endregion

const ContactForm = () => {
	const form = useForm<ContactFormSchemaType>({
		resolver: zodResolver(contactFormSchema),
	})

	const onSubmit = (data: ContactFormSchemaType) => {
		console.log(data)
	}

	return (
		<div className='space-y-12 px-4 py-16 sm:py-32 lg:px-8'>
			<div className='mx-auto max-w-2xl text-center'>
				<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Contact sales</h2>
				<p className='mt-2 text-lg leading-8 text-gray-600'>Get in touch and let&apos;s grow your business together!</p>
			</div>

			<Form {...form}>
				<form
					className='mx-auto max-w-sm rounded-md bg-white/50 p-4 ring-1 ring-shade-lighter backdrop-blur-xl sm:mt-20 sm:p-6 md:max-w-2xl'
					onSubmit={form.handleSubmit(onSubmit)}>
					<div className='grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2'>
						<Form.Field
							control={form.control}
							name='firstName'
							render={({ field }) => (
								<Form.Item aria-required label='First name'>
									<Input placeholder='Type first name' {...field} />
								</Form.Item>
							)}
						/>
						<Form.Field
							control={form.control}
							name='lastName'
							render={({ field }) => (
								<Form.Item aria-required label='Last name'>
									<Input placeholder='Type last name' {...field} />
								</Form.Item>
							)}
						/>

						<Form.Field
							control={form.control}
							name='email'
							render={({ field }) => (
								<Form.Item aria-required label='Email'>
									<Input placeholder='Enter your email address' {...field} />
								</Form.Item>
							)}
						/>

						<Form.Field
							control={form.control}
							name='phone'
							render={({ field }) => (
								<Form.Item aria-required label='Phone'>
									<PhoneInput {...field} placeholder='Type phone number' />
								</Form.Item>
							)}
						/>
						<Form.Field
							control={form.control}
							name='company'
							render={({ field }) => (
								<Form.Item label='Company'>
									<Input placeholder='Enter your company (optional)' {...field} />
								</Form.Item>
							)}
						/>

						<Form.Field
							control={form.control}
							name='message'
							render={({ field }) => (
								<Form.Item aria-required className='md:col-span-2' label='Message'>
									<Textarea maxLength={500} placeholder='Type your message' rows={3} {...field} />
								</Form.Item>
							)}
						/>
					</div>
					<div className='mt-10'>
						<Button type='submit'>Let&apos;s talk</Button>
					</div>
				</form>
			</Form>
		</div>
	)
}

export default ContactForm
