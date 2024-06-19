//#region Import
import PATHS from "@/constants/paths"
import { useTranslations } from "next-intl"

import LocaleToggle from "../common/locale-toggle"
import ThemeToggle from "../common/theme-toggle"
import Button from "../ui/button"
//#endregion

interface ActionButtonsProps {
	onClick?: () => void
}

const ActionButtons = ({ onClick }: ActionButtonsProps) => {
	const t = useTranslations("navbar")

	return (
		<div className='flex w-full flex-wrap items-center justify-evenly gap-4 gap-y-6 pe-2 md:w-max md:gap-4'>
			<LocaleToggle />

			<ThemeToggle />

			<Button as='link' className='w-full md:w-max' href={PATHS.CONTACT_US} onClick={onClick}>
				{t("actions.contact")}
			</Button>
		</div>
	)
}

export default ActionButtons
