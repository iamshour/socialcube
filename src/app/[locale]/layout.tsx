/* eslint-disable react-refresh/only-export-components */
//#region Import
import type { DefaultPageParams } from "@/types"

import Footer from "@/components/footer/footer"
import Navbar from "@/components/navbar/navbar"
import { type Direction, DirectionProvider } from "@/lib/direction-provider"
import { POPPINS } from "@/next.fonts"
import { availableLocaleCodes, availableLocalesMap, defaultLocale } from "@/next.locales.mjs"
import { getDefaultMetadata, VIEWPORT } from "@/next.metadata"
import LocaleProvider from "@/providers/locale-provider"
import LocomotiveProvider from "@/providers/locomotive-provider"
import ThemeProvider from "@/providers/theme-provider"
import { getTranslations, unstable_setRequestLocale } from "next-intl/server"
import { Toaster } from "react-hot-toast"

import "./globals.css"
//#endregion

export const generateMetadata = async ({ params: { locale } }: DefaultPageParams) => {
	const t = await getTranslations({ locale })

	return getDefaultMetadata(t)
}

export const generateStaticParams = () => availableLocaleCodes.map((locale) => ({ locale }))

const RootLayout: React.FC<DefaultPageParams & React.PropsWithChildren> = async ({ children, params: { locale } }) => {
	unstable_setRequestLocale(locale)

	const { hrefLang, langDir } = availableLocalesMap[locale] || defaultLocale

	return (
		<html className={POPPINS.variable} dir={langDir} lang={hrefLang} suppressHydrationWarning>
			<body suppressHydrationWarning>
				<LocaleProvider>
					<ThemeProvider>
						<LocomotiveProvider>
							<DirectionProvider dir={langDir as Direction}>
								<Navbar />
								{children}
								<Footer />
							</DirectionProvider>
						</LocomotiveProvider>
					</ThemeProvider>

					<Toaster position={langDir === "ltr" ? "top-right" : "top-left"} toastOptions={{ duration: 4000 }} />
				</LocaleProvider>
			</body>
		</html>
	)
}

export default RootLayout

// eslint-disable-next-line react-refresh/only-export-components
export const viewport = VIEWPORT
