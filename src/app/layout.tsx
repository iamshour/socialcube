import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
	weight: ["100", "200", "300", "600", "400", "700", "900"],
	subsets: ["latin"],
})

export const metadata = {
	title: "Social Cube - Coming soon!",
	description: "Social Cube is coming soon. Stay Tunded for more!",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
