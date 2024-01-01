export default function Home() {
	return (
		<main className='flex min-h-screen items-center justify-center p-5 lg:p-12'>
			<div className='relative flex flex-col  place-items-center '>
				<h2 className='font-heading m-10 text-center text-6xl font-black leading-[5rem] sm:text-7xl sm:leading-[7rem] lg:text-8xl lg:leading-[7rem]	 '>
					<span className='bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent'>
						Coming Soon
					</span>
					<span className=''>⏳</span>
				</h2>
				<p className='m-5 max-w-3xl px-6 text-center text-2xl font-thin text-slate-800 md:text-3xl dark:text-slate-100'>
					We&apos;re currently working 👨‍💻 hard to bring you something great, and we can&apos;t wait to share it with you
					📅. Our team is putting the finishing touches on a new project 🚀 that we think you&apos;ll love 😍.
				</p>
			</div>
		</main>
	)
}
