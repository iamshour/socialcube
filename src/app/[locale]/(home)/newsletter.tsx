export default function Newsletter() {
	return (
		<section
			className='mx-auto max-w-screen-xl py-32'
			data-scroll
			data-scroll-direction='horizontal'
			data-scroll-speed='1'>
			<div className='relative mx-4 overflow-hidden rounded-2xl bg-shade-dark px-4 py-14 md:mx-8 md:px-8'>
				<div className='relative z-10 mx-auto max-w-xl sm:text-center'>
					<div className='space-y-3'>
						<h3 className='text-3xl font-bold text-white'>Subscribe to our newsletter</h3>
						<p className='leading-relaxed text-blue-100'>
							Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with
							your email.
						</p>
					</div>
					<div className='mt-6'>
						<form
							className='flex items-center justify-center rounded-lg bg-white p-1 sm:mx-auto sm:max-w-md'
							// onSubmit={(e) => e.preventDefault()}
						>
							<input
								className='w-full border-none p-2 text-gray-500 outline-none'
								placeholder='Enter your email'
								type='email'
							/>
							<button className='rounded-lg bg-blue-600 p-2 px-3 font-medium text-white shadow-md outline-none duration-150 hover:bg-blue-500 focus:shadow-none active:bg-blue-700 sm:px-4'>
								Subscribe
							</button>
						</form>
						<p className='mt-3 max-w-lg text-[15px] text-blue-100 sm:mx-auto'>
							No spam ever, we are care about the protection of your data. Read our{" "}
							<a className='underline' href='#'>
								{" "}
								Privacy Policy{" "}
							</a>
						</p>
					</div>
				</div>
				<div
					className='absolute inset-0 h-full w-full'
					style={{
						background:
							"linear-gradient(268.24deg, rgba(59, 130, 246, 0.76) 50%, rgba(59, 130, 246, 0.545528) 80.61%, rgba(55, 48, 163, 0) 117.35%)",
					}}
				/>
			</div>
		</section>
	)
}
