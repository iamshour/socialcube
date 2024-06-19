//#region Import
import resend from "@/lib/resend"
import newsletterSchema, { type NewsletterSchemaType } from "@/schemas/newsletter-schema"

import NewsletterEmail from "../../../../emails/newsletter"
//#endregion

export async function POST(req: Request) {
	const data: NewsletterSchemaType = await req.json()

	const zodResponse = newsletterSchema.safeParse(data)

	if (!zodResponse.success) {
		return Response.json("Invalid Data Passed", { status: 500 })
	}

	try {
		const { data, error } = await resend.emails.send({
			from: "Socialcube <noreply@socialcube.ai>",
			react: NewsletterEmail(),
			subject: "Thank you for subscribing to our Newsletter!",
			to: [zodResponse.data.email],
		})

		if (error) {
			return Response.json({ error }, { status: 500 })
		}

		return Response.json({ data }, { status: 200 })
	} catch (error) {
		return Response.json({ error }, { status: 500 })
	}
}
