//#region Import
import type { Metadata } from "next"
import type { FC, PropsWithChildren } from "react"

import Footer from "@/components/footer/footer"
import LazyMotion from "@/components/lazy-motion"
import Navbar from "@/components/navbar/navbar"
import { PLAYFAIR, ROBOTO } from "@/next.fonts"
import { availableLocalesMap, defaultLocale } from "@/next.locales.mjs"
import LocaleProvider from "@/providers/locale-provider"
import LocomotiveProvider from "@/providers/locomotive-provider"
import ThemeProvider from "@/providers/theme-provider"
import { Locale } from "@/types"
import clsx from "clsx"

import "./globals.css"
//#endregion

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
	description: "",
	title: "Home | Socialcube.Ai",
}

const fontClasses = clsx(ROBOTO.variable, PLAYFAIR.variable)

interface RootLayoutProps extends PropsWithChildren {
	params: { locale: Locale }
}

const RootLayout: FC<RootLayoutProps> = async ({ children, params: { locale } }) => {
	const { hrefLang, langDir } = availableLocalesMap[locale] || defaultLocale

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
