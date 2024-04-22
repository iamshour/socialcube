//#region Import
import type { DefaultPageParams } from "@/types"
import type { Metadata } from "next"
import type { FC, PropsWithChildren } from "react"

import Footer from "@/components/footer/footer"
import LazyMotion from "@/components/lazy-motion"
import Navbar from "@/components/navbar/navbar"
import { POPPINS } from "@/next.fonts"
import { availableLocaleCodes, availableLocalesMap, defaultLocale } from "@/next.locales.mjs"
import LocaleProvider from "@/providers/locale-provider"
import LocomotiveProvider from "@/providers/locomotive-provider"
import ThemeProvider from "@/providers/theme-provider"
import { unstable_setRequestLocale } from "next-intl/server"

import "./globals.css"
//#endregion

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
	description: "",
	title: "Home | Socialcube.Ai",
}

// eslint-disable-next-line react-refresh/only-export-components
export function generateStaticParams() {
	return availableLocaleCodes.map((locale) => ({ locale }))
}

const RootLayout: FC<DefaultPageParams & PropsWithChildren> = async ({ children, params: { locale } }) => {
	unstable_setRequestLocale(locale)

	const { hrefLang, langDir } = availableLocalesMap[locale] || defaultLocale

	return (
		<html className={POPPINS.variable} dir={langDir} lang={hrefLang} suppressHydrationWarning>
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
