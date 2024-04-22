//#region Import
import { useTranslations } from "next-intl"
//#endregion

import Logo from "../navbar/logo"
import { footerSocials } from "./data"

/* eslint-disable max-len */
export default function Footer() {
	const t = useTranslations("footer")

	return (
		<footer className='bg-white'>
			<div className='mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8'>
				<div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
					<div>
						<Logo height={56} />

						<p className='mt-4 max-w-xs text-gray-500'>{t("catch-phrase")}</p>

						<ul className='mt-8 flex gap-6'>
							{footerSocials.map(({ alt, icon: Icon, link }) => (
								<li>
									<a className='text-gray-700 transition hover:opacity-75' href={link} rel='noreferrer' target='_blank'>
										<span className='sr-only'>{alt}</span>

										<Icon className='size-6' />
									</a>
								</li>
							))}
						</ul>
					</div>

					<div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4'>
						<div>
							<p className='font-medium text-gray-900'>Services</p>

							<ul className='mt-6 space-y-4 text-sm'>
								<li>
									<a className='text-gray-700 transition hover:opacity-75' href='#'>
										{" "}
										1on1 Coaching{" "}
									</a>
								</li>

								<li>
									<a className='text-gray-700 transition hover:opacity-75' href='#'>
										{" "}
										Company Review{" "}
									</a>
								</li>

								<li>
									<a className='text-gray-700 transition hover:opacity-75' href='#'>
										{" "}
										Accounts Review{" "}
									</a>
								</li>

								<li>
									<a className='text-gray-700 transition hover:opacity-75' href='#'>
										{" "}
										HR Consulting{" "}
									</a>
								</li>

								<li>
									<a className='text-gray-700 transition hover:opacity-75' href='#'>
										{" "}
										SEO Optimisation{" "}
									</a>
								</li>
							</ul>
						</div>

						<div>
							<p className='font-medium text-gray-900'>Company</p>

							<ul className='mt-6 space-y-4 text-sm'>
								<li>
									<a className='text-gray-700 transition hover:opacity-75' href='#'>
										{" "}
										About{" "}
									</a>
								</li>

								<li>
									<a className='text-gray-700 transition hover:opacity-75' href='#'>
										{" "}
										Meet the Team{" "}
									</a>
								</li>

								<li>
									<a className='text-gray-700 transition hover:opacity-75' href='#'>
										{" "}
										Accounts Review{" "}
									</a>
								</li>
							</ul>
						</div>

						<div>
							<p className='font-medium text-gray-900'>Helpful Links</p>

							<ul className='mt-6 space-y-4 text-sm'>
								<li>
									<a className='text-gray-700 transition hover:opacity-75' href='#'>
										{" "}
										Contact{" "}
									</a>
								</li>

								<li>
									<a className='text-gray-700 transition hover:opacity-75' href='#'>
										{" "}
										FAQs{" "}
									</a>
								</li>

								<li>
									<a className='text-gray-700 transition hover:opacity-75' href='#'>
										{" "}
										Live Chat{" "}
									</a>
								</li>
							</ul>
						</div>

						<div>
							<p className='font-medium text-gray-900'>Legal</p>

							<ul className='mt-6 space-y-4 text-sm'>
								<li>
									<a className='text-gray-700 transition hover:opacity-75' href='#'>
										{" "}
										Accessibility{" "}
									</a>
								</li>

								<li>
									<a className='text-gray-700 transition hover:opacity-75' href='#'>
										{" "}
										Returns Policy{" "}
									</a>
								</li>

								<li>
									<a className='text-gray-700 transition hover:opacity-75' href='#'>
										{" "}
										Refund Policy{" "}
									</a>
								</li>

								<li>
									<a className='text-gray-700 transition hover:opacity-75' href='#'>
										{" "}
										Hiring Statistics{" "}
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<p className='text-xs text-gray-500'>&copy; 2022. Company Name. All rights reserved.</p>
			</div>
		</footer>
	)
}
