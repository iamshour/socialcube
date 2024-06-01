//#region Import
import type { IconType } from "react-icons/lib"

import IcOutlineWhatsapp from "~icons/ic/outline-whatsapp"
import LucideFacebook from "~icons/lucide/facebook"
import LucideInstagram from "~icons/lucide/instagram"
import PhXLogoBold from "~icons/ph/x-logo-bold"
//#endregion

type SocialItem = {
	alt: string
	icon: IconType
	link: string
}

export const footerSocials: SocialItem[] = [
	{
		alt: "Facebook",
		icon: LucideFacebook,
		link: "https://www.facebook.com/socialcube.ai/",
	},
	{
		alt: "Instagram",
		icon: LucideInstagram,
		link: "https://www.instagram.com/socialcube.ai/",
	},
	{
		alt: "Whatsapp",
		icon: IcOutlineWhatsapp,
		link: "https://wa.me/96179162734",
	},
	{
		alt: "X",
		icon: PhXLogoBold,
		link: "https://www.x.com/socialcube.ai/",
	},
]
