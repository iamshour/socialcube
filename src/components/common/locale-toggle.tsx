"use client"

//#region Import
import { availableLocaleCodes } from "@/next.locales.mjs"
import { usePathname, useRouter } from "@/next.navigation"
import { useLocale } from "next-intl"
import { useTransition } from "react"

import Select from "../ui/select"
//#endregion

const LocaleToggle = () => {
	const router = useRouter()

	const locale = useLocale()

	const [isPending, startTransition] = useTransition()

	const pathname = usePathname()

	function onSelectChange(locale: string) {
		startTransition(() => router.replace(pathname, { locale }))
	}

	return (
		<Select defaultValue={locale} onValueChange={onSelectChange}>
			<Select.Trigger className='w-[180px]' disabled={isPending}>
				<Select.Value placeholder='Theme' />
			</Select.Trigger>
			<Select.Content>
				{availableLocaleCodes.map((code) => (
					// <option key={code} value={code}>
					// {t('locale', {locale: code})}
					// </option>
					<Select.Item key={code} value={code}>
						{code}
					</Select.Item>
				))}
			</Select.Content>
		</Select>
	)
}

export default LocaleToggle
