//#region Import
import { Company } from "@/app/[locale]/company/types"
import { Service } from "@/app/[locale]/services/types"
//#endregion

const PATHS = {
	COMPANY: {
		[Company.ABOUT_US]: `/company#${Company.ABOUT_US}`,
		[Company.CAREERS]: `/company#${Company.CAREERS}`,
		[Company.MISSION_VISION]: `/company#${Company.MISSION_VISION}`,
	},
	CONTACT_US: "/contact-us",
	HOME: "/",

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
