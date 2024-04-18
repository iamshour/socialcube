import { Playfair_Display, Roboto } from "next/font/google"

export const ROBOTO = Roboto({
	display: "swap",
	subsets: ["latin"],
	variable: "--font-roboto",
	weight: ["300", "400", "700"],
})

export const PLAYFAIR = Playfair_Display({
	display: "swap",
	subsets: ["latin"],
	variable: "--font-playfair",
	weight: ["400"],
})
