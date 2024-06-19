"use client"

//#region Import
import type { Range } from "@/types"

import Section from "@/components/common/section"
import Accordion from "@/components/ui/accordion"
import { useTranslations } from "next-intl"
//#endregion

const Faqs = () => {
	const t = useTranslations("home.faqs")

	return (
		<Section data-scroll data-scroll-speed='2' heading={t("heading")} subHeading={t("subHeading")}>
			<div className='mx-auto mt-14 max-w-2xl'>
				<Accordion className='w-full' collapsible type='single'>
					{Array.from({ length: 5 }, (_, index) => (
						<Accordion.Item key={index} value={`item-${index}`}>
							<Accordion.Trigger className='text-start'>
								{t(`content.question-${(index + 1) as Range<1, 5>}.q`)}
							</Accordion.Trigger>
							<Accordion.Content>{t(`content.question-${(index + 1) as Range<1, 5>}.a`)}</Accordion.Content>
						</Accordion.Item>
					))}
				</Accordion>
			</div>
		</Section>
	)
}

export default Faqs
