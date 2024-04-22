"use client"

//#region Import
import type { Range } from "@/types"

import SectionHeading from "@/components/common/section-heading"
import Container from "@/components/layouts/container"
import Accordion from "@/components/ui/accordion"
import { useTranslations } from "next-intl"
//#endregion

export default function Faqs() {
	const t = useTranslations("home.faqs")

	return (
		<section className='mx-auto mt-12 max-w-screen-xl px-4 leading-relaxed md:px-8'>
			<Container>
				<SectionHeading heading={t("heading")} subHeading={t("subHeading")} />

				<div className='mx-auto mt-14 max-w-2xl'>
					<Accordion className='w-full' collapsible type='single'>
						{Array.from({ length: 5 }, (_, index) => (
							<Accordion.Item key={index} value={`item-${index}`}>
								<Accordion.Trigger>{t(`content.question-${(index + 1) as Range<1, 5>}.q`)}</Accordion.Trigger>
								<Accordion.Content>{t(`content.question-${(index + 1) as Range<1, 5>}.a`)}</Accordion.Content>
							</Accordion.Item>
						))}
					</Accordion>
				</div>
			</Container>
		</section>
	)
}
