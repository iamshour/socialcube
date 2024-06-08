//#region Import
import type { LinkWithIcon } from "@/types"

import IcOutlineWhatsapp from "~icons/ic/outline-whatsapp"
import LucideFacebook from "~icons/lucide/facebook"
import LucideInstagram from "~icons/lucide/instagram"
import PhXLogoBold from "~icons/ph/x-logo-bold"
//#endregion

export const footerSocials: LinkWithIcon[] = [
	{
		href: "https://www.facebook.com/socialcube.ai/",
		icon: LucideFacebook,
		label: "Facebook",
	},
	{
		href: "https://www.instagram.com/socialcube.ai/",
		icon: LucideInstagram,
		label: "Instagram",
	},
	{
		href: "https://wa.me/96179162734",
		icon: IcOutlineWhatsapp,
		label: "Whatsapp",
	},
	{
		href: "https://www.x.com/socialcube.ai/",
		icon: PhXLogoBold,
		label: "X",
	},
]
