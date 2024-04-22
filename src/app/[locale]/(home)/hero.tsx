//#region Import
import { useTranslations } from "next-intl"
import Link from "next/link"

import Robot from "./robot"
//#endregion

export default function Hero() {
	const t = useTranslations("home.hero")

	return (
		<section className='relative isolate min-h-[calc(100vh-56px)] px-6 pt-14 flex-center lg:px-8'>
			<TopBlurredItem />

			<div className='mx-auto max-w-4xl py-20 sm:py-28 lg:py-44'>
				<div className='text-center'>
					<h1 className='text-4xl font-medium text-shade-darker dark:text-shade-lighter sm:text-6xl'>
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
					<p className='mt-6 text-lg leading-8 text-gray-600 dark:text-gray-50/80 sm:mx-auto sm:max-w-[80%]'>
						{t("sub-headline")}
					</p>
					<div className='mt-10 flex flex-col items-center justify-center gap-3 gap-x-6 sm:flex-row '>
						<Link
							className={`group relative inline-flex w-full max-w-[80%] items-center justify-center overflow-hidden rounded-md py-2 font-medium text-white shadow-xl transition duration-300 ease-out
							 hover:ring-1 hover:ring-shade-light sm:w-[125px]`}
							href='#_'>
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
				</div>
			</div>

			<BottomBlurredItem />

			<Robot />
		</section>
	)
}

const TopBlurredItem = () => (
	<div
		aria-hidden='true'
		className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
		<div
			className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-shade-light to-shade-lighter opacity-30 dark:opacity-5 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
			style={{
				clipPath:
					"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
			}}
		/>
	</div>
)

const BottomBlurredItem = () => (
	<div
		aria-hidden='true'
		className='pointer-events-none absolute inset-x-0 top-[calc(100%-13rem)] z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'>
		<div
			className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-shade-light to-shade-lighter opacity-30 dark:opacity-10 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
			style={{
				clipPath:
					"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
			}}
		/>
	</div>
)
