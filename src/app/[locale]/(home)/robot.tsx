"use client"

//#region Import
import Spline from "@splinetool/react-spline"
//#endregion

export default function Robot() {
	return (
		<Spline
			className='pointer-events-none z-10 hidden !h-[0px] items-center justify-end md:flex [&_canvas]:!h-[650px] [&_canvas]:!w-[400px]'
			scene='https://prod.spline.design/hPyo-NkVyWovKnOV/scene.splinecode'
		/>
	)
}
