//#region Import
import navLinks, { NestedNavLink } from "@/next.navlinks"
import { DefaultPageParams } from "@/types"
import { unstable_setRequestLocale } from "next-intl/server"
import Image from "next/image"
// import { notFound } from "next/navigation"

import { useTranslations } from "next-intl"
import { notFound } from "next/navigation"

import { Service } from "../types"
import "./mdx.css"
//#endregion

// eslint-disable-next-line react-refresh/only-export-components
export async function generateStaticParams() {
	return (navLinks.find(({ key }) => key === "services") as NestedNavLink)?.links.map(({ slug }) => slug)
}

const ServicesPage = ({ params: { locale, slug } }: { params: { slug: Service } & DefaultPageParams["params"] }) => {
	unstable_setRequestLocale(locale)

	const t = useTranslations("services")

	if (!Object.values(Service)?.includes(slug)) {
		notFound()
	}

	return (
		<div className='relative isolate overflow-hidden bg-white px-6 py-24 dark:bg-black sm:py-32 lg:overflow-visible lg:px-0'>
			<SvgBg />

			<article className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10'>
				<div className='lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
					<div className='lg:pe-4'>
						<div className='lg:max-w-lg'>
							<p className='text-base font-semibold leading-7 text-shade-dark dark:text-shade-light'>
								{t(`${slug}.headline` as any)}
							</p>
							<h1 className='mt-2 text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-[46px]'>
								{t(`${slug}.sub-headline` as any)}
							</h1>
							<p className='mt-6 text-xl leading-8 text-gray-700 dark:text-gray-300'>
								{t(`${slug}.content.header` as any)}
							</p>
						</div>
					</div>
				</div>
				<div className='-ms-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden'>
					<Image
						alt='aaa as'
						className='w-[36rem] max-w-full rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10'
						height={500}
						priority
						quality={100}
						src={`/images/services/${slug}.png`}
						width={500}
					/>
				</div>
				<div className='lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pe-4'>
					<div className='max-w-xl text-base leading-7 text-gray-700 dark:text-gray-300 lg:max-w-lg'>
						<p>
							{t.rich(`${slug}.content.body` as any, {
								strong: (chunks) => <strong className='mb-1.5 mt-8 block text-shade-light'>{chunks}</strong>,
							})}
						</p>

						{t.rich(`${slug}.content.footer` as any, {
							strong: (chunks) => (
								<h2 className='mb-4 mt-16 text-2xl font-bold tracking-tight text-shade-dark dark:text-shade-lighter'>
									{chunks}
								</h2>
							),
						})}
					</div>
				</div>
			</article>
		</div>
	)
}

export default ServicesPage

const SvgBg = () => (
	<div className='absolute inset-0 -z-10 overflow-hidden'>
		<svg
			aria-hidden='true'
			className='absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] dark:stroke-gray-800'>
			<defs>
				<pattern
					height={200}
					id='e813992c-7d03-4cc4-a2bd-151760b470a0'
					patternUnits='userSpaceOnUse'
					width={200}
					x='50%'
					y={-1}>
					<path d='M100 200V.5M.5 .5H200' fill='none' />
				</pattern>
			</defs>
			<svg className='overflow-visible fill-gray-50 dark:fill-gray-950' x='50%' y={-1}>
				<path
					d='M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z'
					strokeWidth={0}
				/>
			</svg>
			<rect fill='url(#e813992c-7d03-4cc4-a2bd-151760b470a0)' height='100%' strokeWidth={0} width='100%' />
		</svg>
	</div>
)
