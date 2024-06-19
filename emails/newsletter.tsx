//#region Import
import { Company } from "@/app/[locale]/company/types"
import { Service } from "@/app/[locale]/services/types"
import PATHS from "@/constants/paths"
import {
	Body,
	Column,
	Container,
	Head,
	Heading,
	Html,
	Img,
	Link,
	Preview,
	Row,
	Section,
	Tailwind,
	Text,
} from "@react-email/components"
//#endregion

const baseUrl = "https://www.socialcube.ai"

export const NewsletterEmail = () => (
	<Html>
		<Head />
		<Preview>Socialcube.Ai Welcome</Preview>
		<Tailwind config={tailwindConfig}>
			<Body className='bg-offwhite font-sans text-base'>
				<Img
					alt='SocialCube.ai'
					className='mx-auto my-20'
					height='75'
					src={`${baseUrl}/static/primary-logo.png`}
					width='184'
				/>
				<Container className='p-45 bg-white'>
					<Heading className='my-0 text-center leading-8'>Welcome to SocialCube.ai</Heading>

					<Section>
						<Row>
							<Text className='text-base'>
								Congratulations! You&apos;re joining countless businesses who trust us to deliver innovative solutions
								that drive success.
							</Text>

							<Text className='text-base'>Here&apos;s how to get started:</Text>
						</Row>
					</Section>

					<ul>{PropDefaults.steps?.map((li) => li)}</ul>

					<Section className='mt-45'>
						<Row>
							{PropDefaults.links?.map(({ label, slug }) => (
								<Column key={slug}>
									<Link className='font-bold text-black underline' href={`${baseUrl}/${slug}`}>
										{label}
									</Link>{" "}
									<span className='text-green-500'>→</span>
								</Column>
							))}
						</Row>
					</Section>
				</Container>

				<Container className='mt-20'>
					<Section>
						<Row>
							<Column className='px-20 text-right'>
								<Link>Unsubscribe</Link>
							</Column>
							<Column className='text-left'>
								<Link>Manage Preferences</Link>
							</Column>
						</Row>
					</Section>
					<Text className='mb-45 text-center text-gray-400'>SocialCube.Ai, Beirut, Lebanon</Text>
				</Container>
			</Body>
		</Tailwind>
	</Html>
)

export default NewsletterEmail

const PropDefaults = {
	links: [
		{
			label: "Go Home",
			slug: PATHS.HOME,
		},
		{
			label: "More about us",
			slug: Company.ABOUT_US,
		},
		{
			label: "Get in touch?",
			slug: PATHS.CONTACT_US,
		},
	],
	steps: [
		<li className='mb-20' key={1}>
			<strong>Get started with Social Media Management.</strong>{" "}
			<Link href={`${baseUrl}/${Service.SOCIAL_MEDIA}`}>Learn how we can boost your online presence</Link> by managing
			your social media accounts efficiently.
		</li>,

		<li className='mb-20' key={2}>
			<strong>Establish a strong brand identity.</strong>{" "}
			<Link href={`${baseUrl}/${Service.BRANDING}`}>Discover our branding solutions</Link> that help you stand out in
			the market.
		</li>,

		<li className='mb-20' key={3}>
			<strong>Build your website with our expertise.</strong>{" "}
			<Link href={`${baseUrl}/${Service.WEB_DEV}`}>Explore our web development services</Link> to create a compelling
			online presence.
		</li>,

		<li className='mb-20' key={4}>
			<strong>Develop innovative applications.</strong>{" "}
			<Link href={`${baseUrl}/${Service.APP_DEV}`}>See how we can bring your app ideas to life</Link> with our
			comprehensive development services.
		</li>,

		<li className='mb-20' key={5}>
			<strong>Enhance your ecommerce platform.</strong>{" "}
			<Link href={`${baseUrl}/${Service.ECOMMERCE}`}>Learn about our ecommerce solutions</Link> designed to grow your
			online store.
		</li>,

		<li className='mb-20' key={6}>
			<strong>Streamline your finances.</strong>{" "}
			<Link href={`${baseUrl}/${Service.ACCOUNTING_SOFTWARE}`}>Discover our accounting software</Link> to manage your
			financials with ease.
		</li>,
	],
}

const tailwindConfig = {
	theme: {
		extend: {
			colors: {
				brand: "#2250f4",
				offwhite: "#fafbfb",
			},
			spacing: {
				0: "0px",
				20: "20px",
				45: "45px",
			},
		},
	},
}
