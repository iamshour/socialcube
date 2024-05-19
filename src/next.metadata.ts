//#region Import
import type { Metadata, Viewport } from "next"

import appleFavIcon from "../public/metadata/apple-touch-icon.png"
import favIcon16 from "../public/metadata/favicon-16x16.png"
import favIcon32 from "../public/metadata/favicon-32x32.png"
import favIcon from "../public/metadata/favicon.ico"
import socialCubeOg from "../public/metadata/socialcube-og.png"
//#endregion

export const getDefaultMetadata = (t: any): Metadata => ({
	applicationName: "socialcube.ai",
	authors: [{ name: "Ali Shour", url: "https://alishour.dev" }],
	creator: "Ali Shour",
	description: t("metadata.default.description"),
	generator: "Next.js",
	icons: [
		{ rel: "icon", url: favIcon.src },
		{
			rel: "icon",
			sizes: "16x16",
			type: "image/png",
			url: favIcon16.src,
		},
		{
			rel: "icon",
			sizes: "32x32",
			type: "image/png",
			url: favIcon32.src,
		},
		{
			rel: "apple-touch-icon",
			sizes: "180x180",
			url: appleFavIcon.src,
		},
		{
			color: "#5bbad5",
			rel: "mask-icon",
			url: "./metadata/safari-pinned-tab.svg",
		},
	],
	keywords: t("metadata.default.keywords"),
	manifest: "/metadata/site.webmanifest",
	metadataBase: new URL("https://socialcube.ai"),
	openGraph: {
		description: t("metadata.default.description"),
		images: [
			{
				alt: t("metadata.default.ogTitle"),
				height: 630,
				url: socialCubeOg.src,
				width: 1200,
			},
		],
		siteName: "socialcube.ai",
		title: t("metadata.default.ogTitle"),
		type: "website",
		url: "https://www.socialcube.ai",
	},
	other: {
		"msapplication-TileColor": "#da532c",
	},
	publisher: "socialcube.ai",
	referrer: "origin-when-cross-origin",
	title: {
		default: t("metadata.default.title"),
		template: "%s | Socialcube.Ai",
	},
	twitter: {
		// card: "summary_large_image",
		// TODO: Update with your Twitter handle
		creator: "@socialcube",
		description: t("metadata.default.description"),
		images: [
			{
				alt: t("metadata.default.ogTitle"),
				url: socialCubeOg.src,
			},
		],
		site: "@socialcubeai",
		title: t("metadata.default.ogTitle"),
	},
	verification: {
		// TODO: Add other verification codes as needed
		google: "your-google-verification-code",
	},
})

export const VIEWPORT: Viewport = {
	colorScheme: "light",
	initialScale: 1,
	themeColor: [
		{ color: "white", media: "(prefers-color-scheme: light)" },
		{ color: "black", media: "(prefers-color-scheme: dark)" },
	],
	width: "device-width",
}
