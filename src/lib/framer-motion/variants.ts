import type { AnimationProps, Transition, VariantLabels } from "framer-motion"

interface ViewportOptions {
	amount?: "all" | "some" | number
	margin?: string
	once?: boolean
	root?: React.RefObject<Element>
}

export const ease = [0.6, 0.01, 0.01, 0.95]

export const variantPresets: Record<string, VariantLabels> = {
	exit: "exit",
	initial: "initial",
	whileInView: "animate",
}

export const transition: Transition = { duration: 1, ease }

export const viewport: ViewportOptions = { margin: "-100px", once: true }

export const basicStagger = (t?: Transition): { viewport: ViewportOptions } & AnimationProps => ({
	...variantPresets,
	variants: {
		animate: { transition: { delay: 0.01, staggerChildren: 0.015, ...transition, ...t } },
	},
	viewport,
})

export const slideBtm = (t?: Transition): AnimationProps => ({
	transition: { ...transition, ...t },
	variants: {
		animate: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: -13 },
		initial: { opacity: 0, y: -13 },
	},
})

export const slideLeftUp: AnimationProps = {
	transition,
	variants: {
		animate: { opacity: 1, x: 0, y: 0 },
		exit: { opacity: 0, x: 13, y: 13 },
		initial: { opacity: 0, x: 13, y: 13 },
	},
}

export const slideRightUp: AnimationProps = {
	transition,
	variants: {
		animate: { opacity: 1, x: 0, y: 0 },
		exit: { opacity: 0, x: -13, y: 13 },
		initial: { opacity: 0, x: -13, y: 13 },
	},
}

export const slideRightBtm: AnimationProps = {
	transition,
	variants: {
		animate: { opacity: 1, x: 0, y: 0 },
		exit: { opacity: 0, x: -13, y: -13 },
		initial: { opacity: 0, x: -13, y: -13 },
	},
}

export const slideUp: AnimationProps = {
	transition,
	variants: { animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 13 }, initial: { opacity: 0, y: 13 } },
}

export const scaleUp: AnimationProps = {
	transition,
	variants: { animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0 }, initial: { opacity: 0, scale: 0 } },
}

export const fade: AnimationProps = {
	transition: { duration: 0.5, ease: [0.455, 0.03, 0.515, 0.955] },
	variants: { animate: { opacity: 1 }, exit: { opacity: 0 }, initial: { opacity: 0 } },
}
