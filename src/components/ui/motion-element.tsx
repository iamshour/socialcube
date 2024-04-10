import { m, type MotionProps } from "framer-motion"
import { forwardRef } from "react"

export type MotionElementProps<T extends keyof JSX.IntrinsicElements> = {
	as?: T
} & MotionProps &
	(T extends "svg" ? React.SVGProps<SVGSVGElement> : React.HTMLAttributes<JSX.IntrinsicElements[T]>)

// eslint-disable-next-line react/display-name
const MotionElement = forwardRef(
	<T extends keyof JSX.IntrinsicElements>(
		{ as = "div" as T, ...props }: MotionElementProps<T>,
		ref: React.Ref<React.ElementType>
	) => {
		const Element: React.ElementType = m(as)

		return <Element {...props} ref={ref} />
	}
)

export default MotionElement
