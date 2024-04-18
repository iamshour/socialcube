"use client"

import type { FC, PropsWithChildren } from "react"

import { THEME_STORAGE_KEY } from "@/next.constants"
import { ThemeProvider as NextThemeProvider } from "next-themes"

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => (
	<NextThemeProvider attribute='data-theme' defaultTheme='system' enableSystem storageKey={THEME_STORAGE_KEY}>
		{children}
	</NextThemeProvider>
)

export default ThemeProvider
