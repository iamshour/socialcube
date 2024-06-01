//#region Import
import type { DefaultPageParams } from "@/types"
import type { Metadata } from "next"

import { getTranslations, unstable_setRequestLocale } from "next-intl/server"

import ContactForm from "./contact-form"
//#endregion

// eslint-disable-next-line react-refresh/only-export-components
export const generateMetadata = async ({ params: { locale } }: DefaultPageParams): Promise<Metadata> => {
	const t = await getTranslations({ locale })

	return {
		title: t("metadata.contact.label"),
	}
}

const ContactPage = ({ params: { locale } }: DefaultPageParams) => {
	unstable_setRequestLocale(locale)

	return (
		<main className='relative'>
			<div
				aria-hidden='true'
				className='pointer-events-none absolute inset-0 -z-10 h-[580px] transform-gpu blur-xl'
				style={{
					background:
						"linear-gradient(143.6deg, rgba(210, 242, 252, 0) 20.79%, rgba(43, 142, 193, 0.26) 40.92%, rgba(6, 74, 118, 0) 70.35%)",
				}}
			/>

			<ContactForm />
		</main>
	)
}

export default ContactPage
