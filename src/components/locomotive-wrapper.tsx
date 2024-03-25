"use client"

//#region Import
import { useEffect } from "react"
//#endregion

export default function LocomotiveWrapper({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		let scroll: any

		import("locomotive-scroll").then((locomotiveModule) => {
			scroll = new locomotiveModule.default({
				el: document.querySelector("[data-scroll-container]") as any,
				resetNativeScroll: true,
				smartphone: { smooth: false },
				smooth: true,
			})
		})

		return () => {
			if (scroll) scroll.destroy()
		}
	})

	return children
}
