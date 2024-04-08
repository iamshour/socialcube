//#region Import
import type { Locale } from "@/types"
import type { Metadata } from "next"

import Footer from "@/components/footer/footer"
import LocomotiveWrapper from "@/components/locomotive-wrapper"
import Navbar from "@/components/navbar/navbar"
import layoutDirectionMap from "@/constants/layout-direction-map"
import { Playfair_Display, Roboto } from "next/font/google"

import "./globals.css"
//#endregion

const roboto = Roboto({
	display: "swap",
	subsets: ["latin"],
	variable: "--font-roboto",
	weight: ["400"],
})

const playfairDisplay = Playfair_Display({
	display: "swap",
	subsets: ["latin"],
	variable: "--font-playfair",
	weight: ["400"],
})

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
	description: "",
	title: "Home | Socialcube.Ai",
}

interface RootLayoutProps {
	children: React.ReactNode
	params: { locale: Locale }
}

export default function RootLayout({ children, params: { locale } }: RootLayoutProps) {
	return (
		<html
			className={`${roboto.variable} ${playfairDisplay.variable}`}
			dir={layoutDirectionMap[locale] ?? "ltr"}
			lang={locale}
			suppressHydrationWarning>
			<LocomotiveWrapper>
				<body data-scroll-container suppressHydrationWarning>
					<Navbar />
					{children}
					<Footer />
				</body>
			</LocomotiveWrapper>
		</html>
	)
}
