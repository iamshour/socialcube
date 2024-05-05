"use client"

//#region Import
import type { Range } from "@/types"

import Section from "@/components/common/section"
import Button from "@/components/ui/button"
import LucideChevronLeft from "~icons/lucide/chevron-left"
import LucideChevronRight from "~icons/lucide/chevron-right"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import { useTranslations } from "next-intl"
//#endregion

const Testimonials = () => {
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
		<Section
			className='bg-shade-lighter/20 dark:bg-neutral-900'
			heading="Don't just take our word for it..."
			subHeading='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas veritatis illo placeat harum porro optio
			fugit a culpa sunt id!'>
			<div
				className='col-start-2 row-span-2 row-start-1 overflow-hidden py-1'
				ref={emblaRef}
				style={{ WebkitMaskBoxImage }}>
				<div className='ml-[calc(var(--slide-spacing)*-1)] flex touch-pan-y backface-hidden'>
					{Array.from({ length: 5 }, (_, index) => (
						<TestimonialCard
							content={t(`content.testimonial-${(index + 1) as Range<1, 5>}.info`)}
							key={index}
							title={t(`content.testimonial-${(index + 1) as Range<1, 5>}.name`)}
						/>
					))}
				</div>
			</div>
			<div className='mx-auto mt-8 flex w-max items-center gap-8'>
				<Button
					className='touch-manipulation rounded-full'
					onClick={onButtonClick("previous")}
					size='icon'
					variant='outline'>
					<LucideChevronLeft />
				</Button>
				<Button
					className='touch-manipulation rounded-full'
					onClick={onButtonClick("next")}
					size='icon'
					variant='outline'>
					<LucideChevronRight />
				</Button>
			</div>
		</Section>
	)
}

export default Testimonials

const WebkitMaskBoxImage =
	"linear-gradient(to right, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 5%, hsl(0 0% 0% / 1) 95%, hsl(0 0% 0% / 0))"

const TestimonialCard = ({ content, title }: Record<"content" | "title", string>) => (
	<div className='min-w-0 flex-[0_0_var(--slide-size)] pl-[var(--slide-spacing)]'>
		<div className='h-[var(--slide-height)] space-y-6 overflow-y-auto rounded-md bg-white p-6 shadow-[0_0_5px_0.1px_rgba(0,0,0,0.05)] dark:bg-neutral-950'>
			<p className='text-2xl font-bold text-shade-dark dark:text-white sm:text-3xl'>{title}</p>

			<p className='leading-relaxed text-gray-700 dark:text-gray-50/80'>{content}</p>
		</div>
	</div>
)
