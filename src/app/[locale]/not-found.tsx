import Button from "@/components/ui/button"
import PATHS from "@/constants/paths"
import { useTranslations } from "next-intl"

const NotFound = () => {
	const t = useTranslations("notFound")

	return (
		<main className='grid min-h-[calc(100vh-56px)] place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8'>
			<div className='text-center'>
				<p className='text-base font-semibold text-indigo-600'>404</p>
				<h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>{t("heading")}</h1>
				<p className='mt-6 text-base leading-7 text-gray-600'>{t("subHeading")}</p>
				<div className='mt-10 flex items-center justify-center gap-x-6'>
					<Button as='link' href={PATHS.HOME} size='sm'>
						{t("actions.goHome")}
					</Button>
					<Button as='link' href={PATHS.CONTACT_US} size='sm' variant='outline'>
						{t("actions.contactUs")} <span aria-hidden='true'>&rarr;</span>
					</Button>
				</div>
			</div>
		</main>
	)
}

export default NotFound
