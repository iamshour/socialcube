"use client"

//#region Import
import Button from "@/components/ui/button"
import Form from "@/components/ui/form"
import Input from "@/components/ui/input"
import PhoneInput from "@/components/ui/phone-input"
import Textarea from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations } from "next-intl"
import { useForm } from "react-hook-form"

import contactFormSchema, { ContactFormSchemaType } from "./contact-form-schema"
//#endregion

const ContactForm = () => {
	const t = useTranslations("contactUs")

	const form = useForm<ContactFormSchemaType>({
		resolver: zodResolver(contactFormSchema),
	})

	const onSubmit = (data: ContactFormSchemaType) => {
		console.log(data)
	}

	return (
		<div className='space-y-12 px-4 py-16 sm:py-32 lg:px-8'>
			<div className='mx-auto max-w-2xl text-center'>
				<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>{t("heading")}</h2>
				<p className='mt-2 text-lg leading-8 text-gray-600'>{t("subHeading")}</p>
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
								<Form.Item aria-required label={t("fields.firstName.label")}>
									<Input placeholder={t("fields.firstName.placeholder")} {...field} />
								</Form.Item>
							)}
						/>
						<Form.Field
							control={form.control}
							name='lastName'
							render={({ field }) => (
								<Form.Item aria-required label={t("fields.lastName.label")}>
									<Input placeholder={t("fields.lastName.placeholder")} {...field} />
								</Form.Item>
							)}
						/>

						<Form.Field
							control={form.control}
							name='email'
							render={({ field }) => (
								<Form.Item aria-required label={t("fields.email.label")}>
									<Input placeholder={t("fields.email.placeholder")} {...field} />
								</Form.Item>
							)}
						/>

						<Form.Field
							control={form.control}
							name='phone'
							render={({ field }) => (
								<Form.Item aria-required label={t("fields.phone.label")}>
									<PhoneInput {...field} placeholder={t("fields.phone.placeholder")} />
								</Form.Item>
							)}
						/>
						<Form.Field
							control={form.control}
							name='company'
							render={({ field }) => (
								<Form.Item label={t("fields.company.label")}>
									<Input placeholder={t("fields.company.placeholder")} {...field} />
								</Form.Item>
							)}
						/>

						<Form.Field
							control={form.control}
							name='message'
							render={({ field }) => (
								<Form.Item aria-required className='md:col-span-2' label={t("fields.message.label")}>
									<Textarea maxLength={500} placeholder={t("fields.message.placeholder")} rows={3} {...field} />
								</Form.Item>
							)}
						/>
					</div>
					<div className='mt-10'>
						<Button type='submit'>{t("action")}</Button>
					</div>
				</form>
			</Form>
		</div>
	)
}

export default ContactForm
