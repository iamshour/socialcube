//#region Import
import BackgroundGradientAnimation from "@/components/ui/background-gradient-animation"
//#endregion

export default function Home() {
	return (
		<>
			<BackgroundGradientAnimation className='fixed inset-0' />
			<div className='pointer-events-none relative z-10 min-h-screen w-full text-9xl text-white flex-center'>Hello</div>
		</>
	)
}
