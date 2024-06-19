//#region Import
import { PHONE_REGEX } from "@/constants/REGEX"
import * as z from "zod"
//#endregion

const contactFormSchema = z.object({
	company: z.string().trim().max(200, { message: "Maximum 200 characters allowed" }).optional(),
	email: z.string().trim().email(),
	firstName: z.string().trim().max(50, { message: "Maximum 50 characters allowed" }),
	lastName: z.string().max(50, { message: "Maximum 50 characters allowed" }),
	message: z.string().trim().max(500, { message: "Maximum 500 characters allowed" }),
	phone: z.string().refine((val) => !val?.length || PHONE_REGEX.test(val), {
		message: "Invalid Phone Number",
	}),
})

export default contactFormSchema

export type ContactFormSchemaType = z.infer<typeof contactFormSchema>
