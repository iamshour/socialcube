import { Service } from "@/app/[locale]/services/[slug]/data"

const PATHS = {
	ABOUT_US: "/about-us",
	CONTACT_US: "/contact-us",
	HOME: "/",
	PRICING: "/pricing",

	SERVICES: {
		[Service.ACCOUNTING_SOFTWARE]: `/services/${Service.ACCOUNTING_SOFTWARE}`,
		[Service.APP_DEV]: `/services/${Service.APP_DEV}`,
		[Service.BRANDING]: `/services/${Service.BRANDING}`,
		[Service.ECOMMERCE]: `/services/${Service.ECOMMERCE}`,
		[Service.SOCIAL_MEDIA]: `/services/${Service.SOCIAL_MEDIA}`,
		[Service.WEB_DEV]: `/services/${Service.WEB_DEV}`,
	},
}

export default PATHS
