import PATHS from "@/constants/paths"

const extractSlugFromPath = (service: keyof (typeof PATHS)["SERVICES"]) => PATHS.SERVICES[service].split("/")[1]

const servicesData = [
	{
		content: "Accounting Software data",
		slug: extractSlugFromPath("ACCOUNTING_SOFTWARE"),
	},
	{
		content: "Application development software",
		slug: extractSlugFromPath("APP_DEV"),
	},
	{
		content: "social Media Content",
		slug: extractSlugFromPath("SOCIAL_MEDIA"),
	},
	{
		content: "Web development Content",
		slug: extractSlugFromPath("WEB_DEV"),
	},
]

export default servicesData
