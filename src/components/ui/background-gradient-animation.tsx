"use client"

//#region Import
import cn from "@/utils/cn"
import { useEffect, useRef, useState } from "react"
//#endregion

interface BackgroundGradientAnimationProps {
	blendingValue?: string
	className?: string
	fifthColor?: string
	firstColor?: string
	fourthColor?: string
	gradientBackgroundEnd?: string
	gradientBackgroundStart?: string
	interactive?: boolean
	pointerColor?: string
	secondColor?: string
	size?: string
	thirdColor?: string
}

export default function BackgroundGradientAnimation({
	blendingValue = "hard-light",
	className,
	fifthColor = "180, 180, 50",
	firstColor = "18, 113, 255",
	fourthColor = "200, 50, 50",
	gradientBackgroundEnd = "rgb(0, 17, 82)",
	gradientBackgroundStart = "rgb(108, 0, 162)",
	interactive = true,
	pointerColor = "140, 100, 255",
	secondColor = "221, 74, 255",
	size = "80%",
	thirdColor = "100, 220, 255",
}: BackgroundGradientAnimationProps) {
	const interactiveRef = useRef<HTMLDivElement>(null)

	const [curX, setCurX] = useState(0)

	const [curY, setCurY] = useState(0)

	const [tgX, setTgX] = useState(0)

	const [tgY, setTgY] = useState(0)

	useEffect(() => {
		document.body.style.setProperty("--gradient-background-start", gradientBackgroundStart)
		document.body.style.setProperty("--gradient-background-end", gradientBackgroundEnd)
		document.body.style.setProperty("--first-color", firstColor)
		document.body.style.setProperty("--second-color", secondColor)
		document.body.style.setProperty("--third-color", thirdColor)
		document.body.style.setProperty("--fourth-color", fourthColor)
		document.body.style.setProperty("--fifth-color", fifthColor)
		document.body.style.setProperty("--pointer-color", pointerColor)
		document.body.style.setProperty("--size", size)
		document.body.style.setProperty("--blending-value", blendingValue)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		function move() {
			if (!interactiveRef.current) {
				return
			}

			setCurX(curX + (tgX - curX) / 20)
			setCurY(curY + (tgY - curY) / 20)
			interactiveRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`
		}

		move()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [tgX, tgY])

	const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
		if (interactiveRef.current) {
			const rect = interactiveRef.current.getBoundingClientRect()

			setTgX(event.clientX - rect.left)
			setTgY(event.clientY - rect.top)
		}
	}

	const [isSafari, setIsSafari] = useState(false)

	useEffect(() => {
		setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent))
	}, [])

	return (
		<div
			className={cn(
				"relative left-0 top-0 h-screen w-screen overflow-hidden bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
				className
			)}>
			<svg className='hidden'>
				<defs>
					<filter id='blurMe'>
						<feGaussianBlur in='SourceGraphic' result='blur' stdDeviation='10' />
						<feColorMatrix in='blur' mode='matrix' result='goo' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8' />
						<feBlend in='SourceGraphic' in2='goo' />
					</filter>
				</defs>
			</svg>

			<div
				className={cn(
					"gradients-container h-full w-full blur-lg",
					isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
				)}>
				<div
					className={cn(
						`absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]`,
						`left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [mix-blend-mode:var(--blending-value)]`,
						`[transform-origin:center_center]`,
						`animate-first`,
						`opacity-100`
					)}
				/>
				<div
					className={cn(
						`absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`,
						`left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [mix-blend-mode:var(--blending-value)]`,
						`[transform-origin:calc(50%-400px)]`,
						`animate-second`,
						`opacity-100`
					)}
				/>
				<div
					className={cn(
						`absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`,
						`left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [mix-blend-mode:var(--blending-value)]`,
						`[transform-origin:calc(50%+400px)]`,
						`animate-third`,
						`opacity-100`
					)}
				/>
				<div
					className={cn(
						`absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`,
						`left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [mix-blend-mode:var(--blending-value)]`,
						`[transform-origin:calc(50%-200px)]`,
						`animate-fourth`,
						`opacity-70`
					)}
				/>
				<div
					className={cn(
						`absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]`,
						`left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [mix-blend-mode:var(--blending-value)]`,
						`[transform-origin:calc(50%-800px)_calc(50%+800px)]`,
						`animate-fifth`,
						`opacity-100`
					)}
				/>

				{interactive && (
					<div
						className={cn(
							`absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]`,
							`-left-1/2 -top-1/2 h-full w-full [mix-blend-mode:var(--blending-value)]`,
							`opacity-70`
						)}
						onMouseMove={handleMouseMove}
						ref={interactiveRef}
					/>
				)}
			</div>
		</div>
	)
}
