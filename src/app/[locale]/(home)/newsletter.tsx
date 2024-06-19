"use client"

//#region Import
import newsletterSchema, { NewsletterSchemaType } from "@/schemas/newsletter-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations } from "next-intl"
import { useForm } from "react-hook-form"
//#endregion

const Newsletter = () => {
	const t = useTranslations("home.newsletter")

	const form = useForm<NewsletterSchemaType>({
		resolver: zodResolver(newsletterSchema),
	})

	// const onSubmit = (data: ContactFormSchemaType) => {
	// 	fetch("/api/contact-us", { ...apiOptions, body: JSON.stringify(data) })
	// 		.then((res) => res.json())
	// 		.then((message) => {
	// 			console.log({ message })

	// 			// setData(initialData)
	// 			form.reset()
	// 			// addNotification(successNotification)
	// 		})
	// 		.catch((err) => {
	// 			// setLoading(false)
	// 			console.log("Error:", err)
	// 			// addNotification(errorNotification(err?.response?.data))
	// 		})
	// }

	return (
		<section
			className='mx-auto max-w-screen-xl pb-16 pt-32'
			data-scroll
			data-scroll-direction='horizontal'
			data-scroll-speed='1'>
			<div className='relative mx-4 overflow-hidden rounded-2xl bg-shade-dark px-4 py-14 md:mx-8 md:px-8'>
				<div className='relative z-10 mx-auto max-w-xl sm:text-center'>
					<div className='space-y-3'>
						<h3 className='text-3xl font-bold text-white'>{t("heading")}</h3>
						<p className='leading-relaxed text-blue-100'>{t("subHeading")}</p>
					</div>
					<div className='mt-6'>
						<form
							className='flex items-center justify-center rounded-lg bg-white p-1 sm:mx-auto sm:max-w-md'
							// onSubmit={(e) => e.preventDefault()}
						>
							<input
								className='w-full border-none p-2 text-gray-500 outline-none focus:ring-0'
								placeholder={t("placeholder")}
								type='email'
							/>
							<button className='rounded-lg bg-blue-600 p-2 px-3 font-medium text-white shadow-md outline-none duration-150 hover:bg-blue-500 focus:shadow-none active:bg-blue-700 sm:px-4'>
								{t("action")}
							</button>
						</form>
						<p className='mt-3 max-w-lg text-[15px] text-blue-100 sm:mx-auto'>{t("message")}</p>
					</div>
				</div>
				<div
					className='absolute inset-0 h-full w-full'
					style={{
						background:
							"linear-gradient(268.24deg, rgba(59, 130, 246, 0.76) 50%, rgba(59, 130, 246, 0.545528) 80.61%, rgba(55, 48, 163, 0) 117.35%)",
					}}
				/>
			</div>
		</section>
	)
}

export default Newsletter
