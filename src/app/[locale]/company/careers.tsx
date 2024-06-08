//#region Import
import Button from "@/components/ui/button"
import PATHS from "@/constants/paths"
import { useTranslations } from "next-intl"
//#endregion

const Careers = () => {
	const t = useTranslations("company.careers")

	return (
		<section className='relative bg-shade-lighter py-28 dark:bg-shade-darker' id='careers'>
			<div className='relative z-10 mx-auto max-w-screen-xl space-y-8 px-4 md:px-8 md:text-center'>
				<div className='max-w-xl md:mx-auto'>
					<p className='text-3xl font-semibold text-shade-darker dark:text-white sm:text-4xl'>{t("heading")}</p>
					<p className='mt-3 text-shade-dark dark:text-gray-400'>{t("subHeading")}</p>
				</div>
				<Button as='link' className='mx-auto w-max' href={PATHS.CONTACT_US}>
					{t("action")}
				</Button>
			</div>
		</section>
	)
}

export default Careers
