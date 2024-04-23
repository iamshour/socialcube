import PATHS from "@/constants/paths"
import { Link } from "@/next.navigation"
import { useTranslations } from "next-intl"

import Robot from "./robot"
import SvgBg from "./svg-bg"

export default function Hero() {
	const t = useTranslations("home.hero")

	return (
		<section className='relative h-[calc(100vh-56px)] w-screen'>
			<SvgBg />

			<div className='pointer-events-none relative z-10 mx-auto mt-24 flex max-w-7xl select-none flex-col gap-10 px-6 sm:mt-32 md:mt-56 lg:px-8'>
				<div className='max-w-4xl'>
					<h1 className='text-5xl font-medium leading-tight text-neutral-950 [text-wrap:balance] sm:text-7xl'>
						{t.rich("headline", {
							span: (chunks) => (
								<>
									<span className='bg-gradient-to-r from-shade-darker via-shade-dark to-shade-light bg-clip-text text-transparent dark:from-shade-lighter dark:via-shade-light  dark:to-shade-dark'>
										{chunks}
									</span>
									<br />
								</>
							),
						})}
					</h1>
					<p className='mt-6 max-w-[80%] text-neutral-600'>{t("sub-headline")}</p>
				</div>

				<div className='pointer-events-auto flex flex-col items-center justify-center gap-3 gap-x-6 sm:flex-row sm:justify-start'>
					<Link
						className={`group relative inline-flex w-full max-w-[80%] items-center justify-center overflow-hidden rounded-md py-2 font-medium text-white shadow-xl transition duration-300 ease-out
                            hover:ring-1 hover:ring-shade-light sm:w-[125px]`}
						href={PATHS.CONTACT_US}>
						<span className='absolute inset-0 h-full w-full bg-gradient-to-br from-shade-darker via-shade-dark to-shade-light' />
						<span className='ease absolute bottom-0 right-0 mb-32 mr-4 block h-64 w-64 origin-bottom-left translate-x-24 rotate-45 transform rounded-full bg-shade-light opacity-30 transition duration-500 group-hover:rotate-90' />
						<span className='relative text-white'>{t("actions.contact")}</span>
					</Link>

					<Link
						className='group relative w-full max-w-[80%] overflow-hidden rounded-md py-2 font-medium text-shade-light shadow-md ring-1 ring-inset ring-shade-light transition duration-300 ease-out inline-flex-center sm:w-[125px]'
						href='#_'>
						<span className='ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-shade-light text-white duration-300 group-hover:translate-x-0'>
							<svg
								className='h-6 w-6'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'>
								<path d='M14 5l7 7m0 0l-7 7m7-7H3' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' />
							</svg>
						</span>
						<span className='ease absolute flex h-full w-full transform items-center justify-center text-shade-light transition-all duration-300 group-hover:translate-x-full'>
							{t("actions.learn-more")}
						</span>
						<span className='invisible relative'>{t("actions.learn-more")}</span>
					</Link>
				</div>

				<Robot />
			</div>
		</section>
	)
}
