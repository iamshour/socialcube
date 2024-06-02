//#region Import
import resend from "@/lib/resend"
import WelcomeEmail from "../../../../emails/welcome-email"
//#endregion

export async function POST() {
	try {
		const { data, error } = await resend.emails.send({
			from: "Acme <onboarding@resend.dev>",
			react: WelcomeEmail({ userFirstname: "John" }) as any,
			subject: "Hello world",
			to: ["socialcube.ai@gmail.com"],
		})

		if (error) {
			return Response.json({ error }, { status: 500 })
		}

		return Response.json({ data })
	} catch (error) {
		return Response.json({ error }, { status: 500 })
	}
}


// import type { NextApiRequest, NextApiResponse } from "next";
// import { WaitlistEmail } from "../../../transactional/emails/waitlist";
// import { resend } from "../../lib/resend";

// const send = async (req: NextApiRequest, res: NextApiResponse) => {
//   const { method } = req;

//   switch (method) {
//     case "GET": {
//       const data = await resend.emails.send({
//         from: "bu@resend.dev",
//         to: "delivered@resend.dev",
//         subject: "Waitlist",
//         react: WaitlistEmail({ name: "Bu" }),
//       });

//       return res.status(200).send(data);
//     }
//     default:
//       res.setHeader("Allow", ["GET"]);
//       res.status(405).end(`Method ${method} Not Allowed`);
//   }
// };