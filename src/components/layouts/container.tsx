import { twMerge } from "tailwind-merge"

const Container: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
	<div
		className={twMerge("mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16", className)}
		{...props}
	/>
)

export default Container
