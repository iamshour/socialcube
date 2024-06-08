//#region Import
import type { Config } from "tailwindcss"

import FormPlugin from "@tailwindcss/forms"
import TypographyPlugin from "@tailwindcss/typography"
import AnimatePlugin from "tailwindcss-animate"
import TwPresetsPlugin from "tw-presets"
//#endregion

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		// './src/**/*.{ts,tsx}',
	],
	darkMode: ["class", '[data-theme="dark"]'],
	plugins: [FormPlugin, AnimatePlugin, TypographyPlugin, TwPresetsPlugin],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: { "2xl": "1400px" },
		},
		extend: {
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"border-gradient": "border-gradient 50ms ease infinite",
			},
			colors: {
				"shade-dark": "#064A76",
				"shade-darker": "#023549",
				"shade-light": "#2B8EC1",
				"shade-lighter": "#D2F2FC",
				"shade-mute": "#012533",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"border-gradient": {
					"0%, 100%": { backgroundPosition: "0% 50%" },
					"50%": { backgroundPosition: "100% 50%" },
				},
				moveHorizontal: {
					"0%": { transform: "translateX(-50%) translateY(-10%)" },
					"100%": { transform: "translateX(-50%) translateY(-10%)" },
					"50%": { transform: "translateX(50%) translateY(10%)" },
				},
				moveInCircle: {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
					"50%": { transform: "rotate(180deg)" },
				},
				moveVertical: {
					"0%": { transform: "translateY(-50%)" },
					"100%": { transform: "translateY(-50%)" },
					"50%": { transform: "translateY(50%)" },
				},
			},
			screens: { xs: { max: "670px", min: "0px" } },
		},
		fontFamily: {
			poppins: ["var(--font-poppins)"],
		},
	},
}

export default config
