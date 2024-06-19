//#region Import
import type { ContactFormSchemaType } from "@/schemas/contact-form-schema"

import PATHS from "@/constants/paths"
import { Body, Button, Container, Head, Hr, Html, Img, Preview, Section, Text } from "@react-email/components"
//#endregion

const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ""

export const NotificationEmail = ({ company, email, firstName, lastName, message, phone }: ContactFormSchemaType) => (
	<Html>
		<Head />
		<Preview>Someone is reaching out SocialCube.Ai.</Preview>
		<Body style={main}>
			<Container style={container}>
				<Img alt='SocialCube.Ai' height='50' src={`${baseUrl}/static/primary-logo.png`} style={logo} width='170' />
				<Text style={paragraph}>
					We recieved a new notification from the contact us section of https://socialcube.ai
				</Text>
				<Text style={paragraph}>Here are the details we received:</Text>
				<Text style={paragraph}>
					<strong>Full Name:</strong> {firstName} {lastName}
					<br />
					<strong>Company:</strong> {company}
					<br />
					<strong>Email:</strong> {email}
					<br />
					<strong>Phone Number:</strong> {phone}
					<br />
					<strong>Message:</strong> {message}
				</Text>
				<Section style={btnContainer}>
					<Button href={`${baseUrl}/${PATHS.HOME}`} style={button}>
						Go Back Home
					</Button>
				</Section>
				<Hr style={hr} />
				<Text style={footer}>SocialCube.Ai, Beirut, Lebanon</Text>
			</Container>
		</Body>
	</Html>
)

NotificationEmail.PreviewProps = {
	company: "Doe Inc.",
	country: "USA",
	email: "john.doe@example.com",
	firstName: "John",
	lastName: "Doe",
	message: "Looking forward to your response.",
	phone: "123-456-7890",
} as ContactFormSchemaType

export default NotificationEmail

const main = {
	backgroundColor: "#ffffff",
	fontFamily:
		'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
}

const container = {
	margin: "0 auto",
	padding: "20px 0 48px",
}

const logo = {
	margin: "0 auto",
}

const paragraph = {
	fontSize: "16px",
	lineHeight: "26px",
}

const btnContainer = {
	textAlign: "center" as const,
}

const button = {
	backgroundColor: "#5F51E8",
	borderRadius: "3px",
	color: "#fff",
	display: "block",
	fontSize: "16px",
	padding: "12px",
	textAlign: "center" as const,
	textDecoration: "none",
}

const hr = {
	borderColor: "#cccccc",
	margin: "20px 0",
}

const footer = {
	color: "#8898aa",
	fontSize: "12px",
}
