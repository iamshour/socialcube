//#region Import
import cn from "@/utils/cn"
import { cva, type VariantProps } from "class-variance-authority"
import Link from "next/link"
import { forwardRef } from "react"
//#endregion

const buttonVariants = cva(
	`!inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2
   disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300`,
	{
		defaultVariants: {
			size: "default",
			variant: "default",
		},
		variants: {
			size: {
				default: "h-10 px-4 py-2",
				icon: "h-10 w-10",
				lg: "h-11 rounded-md px-8",
				sm: "h-9 rounded-md px-3",
			},
			variant: {
				default:
					"bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
				destructive:
					"bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",
				ghost: "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
				link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50",
				outline:
					"border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",
				secondary:
					"bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
			},
		},
	}
)

type CommonButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>

type ChildAsButtonProps = { as?: "button" } & React.ButtonHTMLAttributes<HTMLButtonElement>
type ChildAsLinkProps = { as?: "link" } & React.ComponentPropsWithoutRef<typeof Link>

export type ButtonProps = CommonButtonProps & (ChildAsButtonProps | ChildAsLinkProps)

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ as = "button", className, size, variant, ...props }, ref) => {
		const Comp = as === "link" ? Link : "button"

		return (
			<Comp
				className={cn(buttonVariants({ className, size, variant }))}
				// eslint-disable-next-line
				// @ts-ignore
				ref={ref}
				{...props}
			/>
		)
	}
)

Button.displayName = "Button"

export default Button
