"use client"

//#region Import
import type { Range } from "@/types"

import Container from "@/components/layouts/container"
import Button from "@/components/ui/button"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import { useTranslations } from "next-intl"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"
//#endregion

export default function Testimonials() {
	const t = useTranslations("home.testimonials")

	const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true, loop: true }, [
		Autoplay({
			delay: 6000,
			playOnInit: true,
			stopOnInteraction: false,
			stopOnMouseEnter: true,
		}),
	])

	const onButtonClick = (direction: "next" | "previous") => {
		return () => {
			if (!emblaApi || !direction) return

			if (direction === "next") return emblaApi.scrollNext()

			emblaApi.scrollPrev()
		}
	}

	return (
		<div className='w-screen bg-shade-lighter/20 py-40 dark:bg-neutral-900'>
			<Container className='grid grid-cols-[350px_minmax(0,1fr)] grid-rows-2 gap-x-16'>
				<div className='max-w-xl text-center sm:text-start'>
					<h2 className='font-playfair text-3xl font-normal tracking-tight text-shade-darker dark:text-white sm:text-4xl'>
						Don&apos;t just take our word for it...
					</h2>

					<p className='mt-4 text-gray-700 dark:text-green-50/70'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas veritatis illo placeat harum porro optio
						fugit a culpa sunt id!
					</p>
				</div>

				<div className='col-start-1 row-start-2 flex items-center gap-2'>
					<Button
						className='touch-manipulation rounded-full'
						onClick={onButtonClick("previous")}
						size='icon'
						variant='outline'>
						<LuChevronLeft />
					</Button>
					<Button
						className='touch-manipulation rounded-full'
						onClick={onButtonClick("next")}
						size='icon'
						variant='outline'>
						<LuChevronRight />
					</Button>
				</div>

				<div
					className='col-start-2 row-span-2 row-start-1 overflow-hidden py-1'
					ref={emblaRef}
					style={{ WebkitMaskBoxImage }}>
					<div className='ml-[calc(var(--slide-spacing)*-1)] flex touch-pan-y backface-hidden'>
						{Array.from({ length: 5 }, (_, index) => (
							<div className='min-w-0 flex-[0_0_var(--slide-size)] pl-[var(--slide-spacing)]' key={index}>
								<div className='h-[var(--slide-height)] space-y-6 overflow-y-auto rounded-md bg-white p-6 shadow-[0_0_5px_0.1px_rgba(0,0,0,0.05)] dark:bg-neutral-950'>
									<p className='text-2xl font-bold text-shade-dark dark:text-white sm:text-3xl'>
										{t(`content.testimonial-${(index + 1) as Range<1, 5>}.name`)}
									</p>

									<p className='leading-relaxed text-gray-700 dark:text-gray-50/80'>
										{t(`content.testimonial-${(index + 1) as Range<1, 5>}.info`)}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</Container>
		</div>
	)
}

const WebkitMaskBoxImage =
	"linear-gradient(to right, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 5%, hsl(0 0% 0% / 1) 95%, hsl(0 0% 0% / 0))"
