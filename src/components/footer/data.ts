//#region Import
import type { IconType } from "react-icons/lib"

import { LuFacebook, LuInstagram } from "react-icons/lu"
//#endregion

type SocialItem = {
	alt: string
	icon: IconType
	link: string
}

export const footerSocials: SocialItem[] = [
	{
		alt: "Facebook",
		icon: LuFacebook,
		link: "https://www.facebook.com/socialcube.ai/",
	},
	{
		alt: "Instagram",
		icon: LuInstagram,
		link: "https://www.instagram.com/socialcube.ai/",
	},
]
