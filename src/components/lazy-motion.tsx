"use client"

import { LazyMotion as DefaultLazyMotion } from "framer-motion"

const features = () => import("@/lib/framer-motion/features").then((res) => res.domAnimation)

const LazyMotion = ({ children }: { children: React.ReactNode }) => (
	<DefaultLazyMotion features={features} strict>
		{children}
	</DefaultLazyMotion>
)

export default LazyMotion
