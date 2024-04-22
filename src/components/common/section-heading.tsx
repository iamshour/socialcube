//#region Import
import { twMerge } from "tailwind-merge"
//#endregion

interface SectionHeadingProps extends Required<Record<"heading" | "subHeading", string>> {
	className?: string
}

export default function SectionHeading({ className, heading, subHeading }: SectionHeadingProps) {
	return (
		<div className={twMerge("mx-auto max-w-xl space-y-4 text-center", className)}>
			<h2 className='text-3xl font-normal sm:text-4xl'>{heading}</h2>
			<p className='text-gray-500 dark:text-gray-300'>{subHeading}</p>
		</div>
	)
}
