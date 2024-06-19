//#region Import
import resend from "@/lib/resend"
import newsletterSchema, { type NewsletterSchemaType } from "@/schemas/newsletter-schema"

import NewsletterEmail from "../../../../emails/newsletter"
//#endregion

export async function POST(req: Request) {
	const data: NewsletterSchemaType = await req.json()

	const zodResponse = newsletterSchema.safeParse(data)

	if (!zodResponse.success) {
		return Response.json("Invalid email Passed", { status: 500 })
	}

	try {
		const { error } = await resend.emails.send({
			from: "Socialcube.Ai <noreply@socialcube.ai>",
			react: NewsletterEmail(),
			subject: "Thank you for subscribing to our Newsletter!",
			to: [zodResponse.data.email],
		})

		if (error) {
			return Response.json(error, { status: 500 })
		}

		return Response.json({ message: "Thank you for subscribing to our Newsletter. Stay tuned!" }, { status: 200 })
	} catch (error) {
		return Response.json(error, { status: 500 })
	}
}
