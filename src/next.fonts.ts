import { Poppins } from "next/font/google"

export const POPPINS = Poppins({
	display: "swap",
	subsets: ["latin"],
	variable: "--font-poppins",
	weight: ["400", "500", "600", "700", "800"],
})
