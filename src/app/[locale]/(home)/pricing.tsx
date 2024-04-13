export default function Pricing() {
	return (
		<section className='py-14'>
			<div className='mx-auto max-w-screen-xl px-4 text-gray-600 md:px-8'>
				<div className='relative mx-auto max-w-xl sm:text-center'>
					<h3 className='text-3xl font-semibold text-gray-800 sm:text-4xl'>Pricing for all sizes</h3>
					<div className='mt-3 max-w-xl'>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur consequat nunc.</p>
					</div>
				</div>
				<div className='mt-16 justify-center gap-6 space-y-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3'>
					{plans.map((item, idx) => (
						<div className='relative flex flex-1 flex-col items-stretch rounded-xl border-2 p-8' key={idx}>
							<div>
								<span className='font-medium text-indigo-600'>{item.name}</span>
								<div className='mt-4 text-3xl font-semibold text-gray-800'>
									${item.price} <span className='text-xl font-normal text-gray-600'>/mo</span>
								</div>
							</div>
							<ul className='space-y-3 py-8'>
								{item.features.map((featureItem, idx) => (
									<li className='flex items-center gap-5' key={idx}>
										<svg
											className='h-5 w-5 text-indigo-600'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												clipRule='evenodd'
												d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
												fillRule='evenodd'></path>
										</svg>
										{featureItem}
									</li>
								))}
							</ul>
							<div className='flex flex-1 items-end'>
								<button className='w-full rounded-lg bg-indigo-600 px-3 py-3 text-sm font-semibold text-white duration-150 hover:bg-indigo-500 active:bg-indigo-700'>
									Get Started
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

const plans = [
	{
		features: [
			"Curabitur faucibus",
			"massa ut pretium maximus",
			"Sed posuere nisi",
			"Pellentesque eu nibh et neque",
			"Suspendisse a leo",
			"Praesent quis venenatis ipsum",
			"Duis non diam vel tortor",
		],
		name: "Basic plan",
		price: 12,
	},
	{
		features: [
			"Curabitur faucibus",
			"massa ut pretium maximus",
			"Sed posuere nisi",
			"Pellentesque eu nibh et neque",
			"Suspendisse a leo",
			"Praesent quis venenatis ipsum",
			"Duis non diam vel tortor",
		],
		name: "Startup",
		price: 35,
	},
	{
		features: [
			"Curabitur faucibus",
			"massa ut pretium maximus",
			"Sed posuere nisi",
			"Pellentesque eu nibh et neque",
			"Suspendisse a leo",
			"Praesent quis venenatis ipsum",
			"Duis non diam vel tortor",
		],
		name: "Enterprise",
		price: 60,
	},
]
