"use client"

//#region Import
import Spline from "@splinetool/react-spline"
//#endregion

export default function Robot() {
	return (
		<Spline
			className='pointer-events-none absolute top-[150px] z-10 hidden items-center justify-end md:flex [&_canvas]:!h-[650px] [&_canvas]:!w-[400px]'
			scene='https://prod.spline.design/hPyo-NkVyWovKnOV/scene.splinecode'
		/>
	)
}
