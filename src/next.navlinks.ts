//#region Import
import type { LinkProps } from "next/link"

import { type IconType } from "@/types"
import FlatColorIconsAbout from "~icons/flat-color-icons/about"
import FlatColorIconsAndroidOs from "~icons/flat-color-icons/android-os"
import FlatColorIconsIdea from "~icons/flat-color-icons/idea"
import FlatColorIconsMultipleDevices from "~icons/flat-color-icons/multiple-devices"
import FlatColorIconsRatings from "~icons/flat-color-icons/ratings"
import FlatColorIconsReading from "~icons/flat-color-icons/reading"
import FlatColorIconsShop from "~icons/flat-color-icons/shop"
import FlatColorIconsSlrBackSide from "~icons/flat-color-icons/slr-back-side"
import FlatColorIconsSpeaker from "~icons/flat-color-icons/speaker"

import { Company } from "./app/[locale]/company/types"
import { Service } from "./app/[locale]/services/types"
import PATHS from "./constants/paths"
//#endregion

type NavLink = { href: LinkProps["href"]; type: "link" }
export type NestedNavLink = { links: { href: string; icon: IconType; slug: string }[]; type: "nested-links" }

type NavLinkItem = {
	key: "company" | "services" | "testimonials"
} & (NavLink | NestedNavLink)

const navLinks: NavLinkItem[] = [
	{
		key: "services",
		links: [
			{
				href: PATHS.SERVICES[Service.SOCIAL_MEDIA],
				icon: FlatColorIconsSlrBackSide,
				slug: Service.SOCIAL_MEDIA,
			},
			{
				href: PATHS.SERVICES[Service.WEB_DEV],
				icon: FlatColorIconsMultipleDevices,
				slug: Service.WEB_DEV,
			},
			{
				href: PATHS.SERVICES[Service.APP_DEV],
				icon: FlatColorIconsAndroidOs,
				slug: Service.APP_DEV,
			},
			{
				href: PATHS.SERVICES[Service.ECOMMERCE],
				icon: FlatColorIconsShop,
				slug: Service.ECOMMERCE,
			},
			{
				href: PATHS.SERVICES[Service.BRANDING],
				icon: FlatColorIconsSpeaker,
				slug: Service.BRANDING,
			},
			{
				href: PATHS.SERVICES[Service.ACCOUNTING_SOFTWARE],
				icon: FlatColorIconsRatings,
				slug: Service.ACCOUNTING_SOFTWARE,
			},
		],
		type: "nested-links",
	},
	{
		key: "company",
		links: [
			{
				href: PATHS.COMPANY["about-us"],
				icon: FlatColorIconsAbout,
				slug: Company.ABOUT_US,
			},
			{
				href: PATHS.COMPANY["mission-vision"],
				icon: FlatColorIconsIdea,
				slug: Company.MISSION_VISION,
			},
			{
				href: PATHS.COMPANY.careers,
				icon: FlatColorIconsReading,
				slug: Company.CAREERS,
			},
		],
		type: "nested-links",
	},
	{
		href: PATHS.TESTIMONIALS,
		key: "testimonials",
		type: "link",
	},
]

export default navLinks
