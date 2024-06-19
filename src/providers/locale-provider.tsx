import type { FC, PropsWithChildren } from "react"

import { NextIntlClientProvider, useMessages, useTimeZone } from "next-intl"

const LocaleProvider: FC<PropsWithChildren> = ({ children }) => {
	const messages = useMessages()

	const timezone = useTimeZone()

	return (
		<NextIntlClientProvider messages={messages} timeZone={timezone}>
			{children}
		</NextIntlClientProvider>
	)
}

export default LocaleProvider
