//#region Import
import * as z from "zod"
//#endregion

const newsletterSchema = z.object({
	email: z.string().trim().email(),
})

export default newsletterSchema

export type NewsletterSchemaType = z.infer<typeof newsletterSchema>
