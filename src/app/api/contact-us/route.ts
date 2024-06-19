//#region Import
import resend from "@/lib/resend"
import contactFormSchema, { type ContactFormSchemaType } from "@/schemas/contact-form-schema"

import WelcomeEmail from "../../../../emails/welcome-email"
//#endregion

export async function POST(req: Request) {
	const data: ContactFormSchemaType = await req.json()

	const zodResponse = contactFormSchema.safeParse(data)

	if (!zodResponse.success) {
		return Response.json({ message: "Invalid Data Passed" }, { status: 500 })
	}

	try {
		const { error } = await resend.emails.send({
			from: "Socialcube.Ai <noreply@socialcube.ai>",
			react: WelcomeEmail(zodResponse.data),
			subject: "Thank you for contacting us",
			to: [zodResponse.data.email],
		})

		if (error) {
			return Response.json(error, { status: 500 })
		}

		return Response.json(
			{ message: "Thanks for your message. We will make sure to get in touch with you very soon!" },
			{ status: 200 }
		)
	} catch (error) {
		return Response.json(error, { status: 500 })
	}
}
