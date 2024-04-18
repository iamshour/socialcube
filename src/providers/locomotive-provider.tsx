"use client"

import LocomotiveScroll from "locomotive-scroll"
import React, { createContext, useContext, useEffect, useState } from "react"

type LocomtiveContextValue = { scroll: LocomotiveScroll | null }

const LocomotiveContext = createContext<LocomtiveContextValue>({ scroll: null })

// eslint-disable-next-line react-refresh/only-export-components
export const useLocomotiveContext = (): LocomtiveContextValue => useContext(LocomotiveContext)

const LocomotiveProvider = ({ children }: { children: React.ReactNode }) => {
	const [scroll, setScroll] = useState<LocomotiveScroll | null>(null)

	useEffect(() => {
		if (!scroll) {
			try {
				import("locomotive-scroll").then((locomotiveModule) => {
					const locomotiveScroll = new locomotiveModule.default({
						el: document.querySelector("[data-scroll-container]") as any,
						firefoxMultiplier: 50,
						getDirection: true,
						getSpeed: true,
						lerp: 0.05,
						multiplier: 0.5,
						resetNativeScroll: true,
						smartphone: { smooth: false },
						smooth: true,
					})

					locomotiveScroll.on("scroll", (instance: LocomotiveScroll.OnScrollEvent & { direction?: "down" | "up" }) => {
						const prevDirection = document.getElementById("navbar")?.getAttribute("data-direction")

						const currentDirection = instance?.direction

						if (!!currentDirection && (!prevDirection || prevDirection !== currentDirection)) {
							document.getElementById("navbar")?.setAttribute("data-direction", currentDirection)
						}
					})

					setScroll(locomotiveScroll)
				})
			} catch (error) {
				throw Error(`[SmoothScrollProvider]: ${error}`)
			}
		}

		return () => {
			if (scroll) scroll.destroy()
		}
	}, [scroll]) // eslint-disable-line react-hooks/exhaustive-deps

	return <LocomotiveContext.Provider value={{ scroll }}>{children}</LocomotiveContext.Provider>
}

export default LocomotiveProvider
