//#region Import
import { Close, Content, Description, Overlay, Portal, Root, Title, Trigger } from "@radix-ui/react-dialog"
import LucideX from "~icons/lucide/x"
import { cva, type VariantProps } from "class-variance-authority"
import { forwardRef } from "react"
import { twMerge } from "tailwind-merge"
//#endregion

const Sheet = (props: React.ComponentPropsWithoutRef<typeof Root>) => <Root {...props} />

const SheetOverlay = forwardRef<React.ElementRef<typeof Overlay>, React.ComponentPropsWithoutRef<typeof Overlay>>(
	({ className, ...props }, ref) => (
		<Overlay
			className={twMerge(
				"fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
				className
			)}
			ref={ref}
			{...props}
		/>
	)
)

SheetOverlay.displayName = "SheetOverlay"

const sheetVariants = cva(
	"fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 dark:bg-slate-950",
	{
		defaultVariants: {
			side: "right",
		},
		variants: {
			side: {
				bottom:
					"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
				left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
				right:
					"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
				top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
			},
		},
	}
)

interface SheetContentProps extends React.ComponentPropsWithoutRef<typeof Content>, VariantProps<typeof sheetVariants> {
	overlayClassName?: string
}

const SheetContent = ({ children, className, overlayClassName, side = "right", ...props }: SheetContentProps) => (
	<Portal>
		<SheetOverlay className={overlayClassName} />
		<Content className={twMerge(sheetVariants({ side }), className)} {...props}>
			{children}
			<Close className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800'>
				<LucideX className='h-4 w-4' />
				<span className='sr-only'>Close</span>
			</Close>
		</Content>
	</Portal>
)

const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={twMerge("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
)

const SheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={twMerge("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
)

const SheetTitle = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof Title>) => (
	<Title className={twMerge("text-lg font-semibold text-slate-950 dark:text-slate-50", className)} {...props} />
)

const SheetDescription = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof Description>) => (
	<Description className={twMerge("text-sm text-slate-500 dark:text-slate-400", className)} {...props} />
)

Sheet.Trigger = Trigger
Sheet.Close = Close
Sheet.Portal = Portal
Sheet.Content = SheetContent
Sheet.Description = SheetDescription
Sheet.Footer = SheetFooter
Sheet.Header = SheetHeader
Sheet.Overlay = SheetOverlay
Sheet.Title = SheetTitle

export default Sheet
