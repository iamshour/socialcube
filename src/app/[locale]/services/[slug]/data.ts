import type { IconType } from "react-icons/lib"

import { FcAndroidOs, FcMultipleDevices, FcRatings, FcShop, FcSlrBackSide, FcSpeaker } from "react-icons/fc"

export enum Service {
	ACCOUNTING_SOFTWARE = "accounting-software",
	APP_DEV = "app-development",
	BRANDING = "branding",
	ECOMMERCE = "ecommerce-solutions",
	SOCIAL_MEDIA = "social-media",
	WEB_DEV = "web-development",
}

type ServiceData = {
	icon: IconType
	slug: Service
}

/* eslint-disable perfectionist/sort-objects*/
const servicesData: ServiceData[] = [
	{
		icon: FcSlrBackSide,
		slug: Service.SOCIAL_MEDIA,
	},
	{
		icon: FcMultipleDevices,
		slug: Service.WEB_DEV,
	},
	{
		icon: FcAndroidOs,
		slug: Service.APP_DEV,
	},
	{
		icon: FcShop,
		slug: Service.ECOMMERCE,
	},
	{
		icon: FcSpeaker,
		slug: Service.BRANDING,
	},
	{
		icon: FcRatings,
		slug: Service.ACCOUNTING_SOFTWARE,
	},
]

export default servicesData
