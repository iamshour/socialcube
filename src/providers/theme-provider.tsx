"use client"

import { THEME_STORAGE_KEY } from "@/next.constants"
import { ThemeProvider as NextThemeProvider } from "next-themes"

const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => (
	<NextThemeProvider attribute='data-theme' defaultTheme='system' enableSystem storageKey={THEME_STORAGE_KEY}>
		{children}
	</NextThemeProvider>
)

export default ThemeProvider
