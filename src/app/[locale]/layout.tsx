//#region Import
import type { Metadata } from "next"
import type { FC, PropsWithChildren } from "react"

import Footer from "@/components/footer/footer"
import LazyMotion from "@/components/lazy-motion"
import Navbar from "@/components/navbar/navbar"
import { PLAYFAIR, ROBOTO } from "@/next.fonts"
import { availableLocaleCodes, availableLocalesMap, defaultLocale } from "@/next.locales.mjs"
import LocaleProvider from "@/providers/locale-provider"
import LocomotiveProvider from "@/providers/locomotive-provider"
import ThemeProvider from "@/providers/theme-provider"
import { Locale } from "@/types"
import clsx from "clsx"
import { unstable_setRequestLocale } from "next-intl/server"

import "./globals.css"
import NotFound from "./not-found"
//#endregion

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
	description: "",
	title: "Home | Socialcube.Ai",
}

const fontClasses = clsx(ROBOTO.variable, PLAYFAIR.variable)

const RootLayout: FC<PropsWithChildren & { params: { locale: Locale } }> = async ({ children, params: { locale } }) => {
	const { hrefLang, langDir } = availableLocalesMap[locale] || defaultLocale

	if (!availableLocaleCodes.includes(locale)) {
		// Forces the current locale to be the Default Locale
		unstable_setRequestLocale(defaultLocale.code)

		return (
			<html suppressHydrationWarning>
				<body suppressHydrationWarning>
					<NotFound />
				</body>
			</html>
		)
	}

	return (
		<html className={fontClasses} dir={langDir} lang={hrefLang} suppressHydrationWarning>
			<LocomotiveProvider>
				<body data-scroll-container id='scroll-container' suppressHydrationWarning>
					<LazyMotion>
						<LocaleProvider>
							<ThemeProvider>
								<main className='relative z-0 min-w-[100vw]' data-scroll-section>
									<Navbar />
									{children}
									<Footer />
								</main>
							</ThemeProvider>
						</LocaleProvider>
					</LazyMotion>
				</body>
			</LocomotiveProvider>
		</html>
	)
}

export default RootLayout
