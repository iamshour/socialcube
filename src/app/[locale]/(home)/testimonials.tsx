import { LuChevronLeft, LuChevronRight, LuStar } from "react-icons/lu"

export default function Testimonials() {
	return (
		<section className='bg-gray-50'>
			<div className='mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24'>
				<div className='grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16'>
					<div className='max-w-xl text-center ltr:sm:text-left rtl:sm:text-right'>
						<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
							Don&apos;t just take our word for it...
						</h2>

						<p className='mt-4 text-gray-700'>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas veritatis illo placeat harum porro
							optio fugit a culpa sunt id!
						</p>

						<div className='hidden lg:mt-8 lg:flex lg:gap-4'>
							<button
								aria-label='Previous slide'
								className='rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white'
								id='keen-slider-previous-desktop'>
								<LuChevronLeft />
							</button>

							<button
								aria-label='Next slide'
								className='rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white'
								id='keen-slider-next-desktop'>
								<LuChevronRight />
							</button>
						</div>
					</div>

					<div className='-mx-6 lg:col-span-2 lg:mx-0'>
						<div className='keen-slider' id='keen-slider'>
							<div className='keen-slider__slide'>
								<blockquote className='flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12'>
									<div>
										<div className='flex gap-0.5 text-green-500'>
											{Array.from({ length: 5 }, () => (
												<LuStar className='h-4 w-4' fill='#22C55E' />
											))}
										</div>

										<div className='mt-4'>
											<p className='text-2xl font-bold text-rose-600 sm:text-3xl'>Stayin&apos; Alive</p>

											<p className='mt-4 leading-relaxed text-gray-700'>
												No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what?
												If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what
												quality of life do we have there?
											</p>
										</div>
									</div>

									<footer className='mt-4 text-sm font-medium text-gray-700 sm:mt-6'>&mdash; Michael Scott</footer>
								</blockquote>
							</div>

							<div className='keen-slider__slide'>
								<blockquote className='flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12'>
									<div>
										<div className='flex gap-0.5 text-green-500'>
											{Array.from({ length: 5 }, () => (
												<LuStar className='h-4 w-4' fill='#22C55E' />
											))}
										</div>

										<div className='mt-4'>
											<p className='text-2xl font-bold text-rose-600 sm:text-3xl'>Stayin&apos; Alive</p>

											<p className='mt-4 leading-relaxed text-gray-700'>
												No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what?
												If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what
												quality of life do we have there?
											</p>
										</div>
									</div>

									<footer className='mt-4 text-sm font-medium text-gray-700 sm:mt-6'>&mdash; Michael Scott</footer>
								</blockquote>
							</div>

							<div className='keen-slider__slide'>
								<blockquote className='flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12'>
									<div>
										<div className='flex gap-0.5 text-green-500'>
											{Array.from({ length: 5 }, () => (
												<LuStar className='h-4 w-4' fill='#22C55E' />
											))}
										</div>

										<div className='mt-4'>
											<p className='text-2xl font-bold text-rose-600 sm:text-3xl'>Stayin&apos; Alive</p>

											<p className='mt-4 leading-relaxed text-gray-700'>
												No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what?
												If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what
												quality of life do we have there?
											</p>
										</div>
									</div>

									<footer className='mt-4 text-sm font-medium text-gray-700 sm:mt-6'>&mdash; Michael Scott</footer>
								</blockquote>
							</div>
						</div>
					</div>
				</div>

				<div className='mt-8 flex justify-center gap-4 lg:hidden'>
					<button
						aria-label='Previous slide'
						className='rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white'
						id='keen-slider-previous'>
						<LuChevronLeft />
					</button>

					<button
						aria-label='Next slide'
						className='rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white'
						id='keen-slider-next'>
						<LuChevronRight />
					</button>
				</div>
			</div>
		</section>
	)
}

{
	/* const keenSlider = new KeenSlider(
    '#keen-slider',
    {
      loop: true,
      slides: {
        origin: 'center',
        perView: 1.25,
        spacing: 16,
      },
      breakpoints: {
        '(min-width: 1024px)': {
          slides: {
            origin: 'auto',
            perView: 1.5,
            spacing: 32,
          },
        },
      },
    },
    []
  ) */
}
