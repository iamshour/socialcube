"use client"

//#region Import
import Spline from "@splinetool/react-spline"
//#endregion

export default function Robot(props: Omit<React.ComponentPropsWithoutRef<typeof Spline>, "scene">) {
	return <Spline scene='https://prod.spline.design/hPyo-NkVyWovKnOV/scene.splinecode' {...props} />
}
