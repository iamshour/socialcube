//#region Import
import { twMerge } from "tailwind-merge"
//#endregion

interface SectionProps extends React.PropsWithChildren, Required<Record<"heading" | "subHeading", string>> {
	classNames?: Partial<Record<"container" | "heading" | "section", string>>
}

const Section: React.FC<SectionProps> = ({ children, classNames, heading, subHeading }) => (
	<section className={twMerge("py-10", classNames?.section)}>
		<div
			className={twMerge("mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16", classNames?.container)}>
			<div className={twMerge("mx-auto mb-16 max-w-xl space-y-4 text-center", classNames?.heading)}>
				<h2 className='text-3xl font-normal sm:text-4xl'>{heading}</h2>
				<p className='text-gray-500 dark:text-gray-300'>{subHeading}</p>
			</div>
			{children}
		</div>
	</section>
)

export default Section
