//#region Import
import { PHONE_REGEX } from "@/constants/REGEX"
import { forwardRef } from "react"

import Input from "./input"
//#endregion

const PhoneInput = forwardRef<React.ElementRef<typeof Input>, React.ComponentPropsWithoutRef<typeof Input>>(
	({ onChange, ...props }, ref) => {
		const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
			const inputValue = e.target.value || ""

			// Check if the input value matches the regex pattern
			if (!!onChange && (PHONE_REGEX.test(inputValue) || inputValue === "")) {
				onChange(e)
			}
		}

		return <Input ref={ref} {...props} onChange={handleChange} placeholder='Enter Phone numer' type='text' />
	}
)

PhoneInput.displayName = "PhoneInput"

export default PhoneInput
