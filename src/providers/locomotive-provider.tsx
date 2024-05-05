"use client"

import { usePathname } from "@/next.navigation"
import LocomotiveScroll from "locomotive-scroll"
import { createContext, useContext, useRef } from "react"
import { LocomotiveScrollProvider } from "react-locomotive-scroll"

type LocomtiveContextValue = { scroll: LocomotiveScroll | null }

const LocomotiveContext = createContext<LocomtiveContextValue>({ scroll: null })

// eslint-disable-next-line react-refresh/only-export-components
export const useLocomotiveContext = (): LocomtiveContextValue => useContext(LocomotiveContext)

const LocomotiveProvider = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname()

	const containerRef = useRef(null)

	// Issue: Locomotive initializes on page load, but with Next.js routing, subsequent component changes occur without full page reloads.
	// This causes bugs as the Scroll instance assumes constant page size.
	// Solution: Trigger a resize event when a page component switches.
	// This ensures Locomotive recalculates page size based on the new component size.
	// useEffect(() => {
	// 	window.dispatchEvent(new Event("resize"))
	// }, [pathname, scroll])

	return (
		<LocomotiveScrollProvider
			containerRef={containerRef}
			location={pathname}
			onLocationChange={(scroll: any) => scroll.scrollTo(0, { disableLerp: true, duration: 0 })}
			options={{
				firefoxMultiplier: 50,
				getDirection: true,
				getSpeed: true,
				lerp: 0.05,
				multiplier: 0.5,
				resetNativeScroll: true,
				smartphone: { smooth: false },
				smooth: true,
			}}
			watch={[pathname]}>
			<main className='relative z-0 min-w-[100vw]' data-scroll-container id='scroll-container' ref={containerRef}>
				{children}
			</main>
		</LocomotiveScrollProvider>
	)
}

export default LocomotiveProvider
