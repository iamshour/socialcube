//#region Import
import { forwardRef } from "react"
import { twMerge } from "tailwind-merge"
//#endregion

const Input = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
	({ className, value, ...props }, ref) => (
		<input
			className={twMerge(
				"flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm transition-basic placeholder:!text-slate-400 autofill:shadow-[0_0_0_30px_white_inset] invalid:ring-1 invalid:ring-red-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:!ring-1 aria-[invalid=true]:!ring-red-500 dark:border-slate-800 dark:bg-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
				className
			)}
			ref={ref}
			value={value || ""}
			{...props}
		/>
	)
)

Input.displayName = "Input"

export default Input
