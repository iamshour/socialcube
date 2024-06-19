export type Locale = "ar" | "en"

type Enumerate<N extends number, Acc extends number[] = []> = Acc["length"] extends N
	? Acc[number]
	: Enumerate<N, [...Acc, Acc["length"]]>

/**
 * Simple Utility type used to type a set of numbers between a specific range
 * @example { type MyNumbers = 1 | 2 | 3 } is Equivalent to { type MyNumbers = Range<1, 3> }
 */
export type Range<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

/**
 * Default Params passed to every page, Important for the locale passed from next-intl
 */
export type DefaultPageParams = {
	params: { locale: Locale }
}

export declare type IconType = (props: React.SVGProps<SVGSVGElement>) => React.ReactElement

export type LinkProps = {
	href: string
	label?: string
}

export type LinkWithIcon = { icon: IconType } & LinkProps

export type LinkWithIconAndSlug = { slug: string } & LinkWithIcon
