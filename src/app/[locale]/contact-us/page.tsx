import ContactForm from "./contact-form"

export default function ContactPage() {
	return (
		<main className='relative'>
			<div
				className='pointer-events-none absolute inset-0 h-[580px] blur-xl'
				style={{
					background:
						"linear-gradient(143.6deg, rgba(210, 242, 252, 0) 20.79%, rgba(43, 142, 193, 0.26) 40.92%, rgba(6, 74, 118, 0) 70.35%)",
				}}
			/>

			<ContactForm />
		</main>
	)
}
