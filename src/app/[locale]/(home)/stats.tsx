import Section from "@/components/layouts/section"

export default function Stats() {
	return (
		<Section
			classNames={{
				container: "!pt-0",
				section: "dark:bg-gray-900 bg-gradient-to-b pt-0 from-white to-shade-lighter/50",
			}}
			heading='Our customers are always happy'
			subHeading='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis sollicitudin quam ut tincidunt.'>
			<div className='mt-12'>
				<ul className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
					{stats.map((item, idx) => (
						<li
							className='w-full rounded-lg bg-shade-lighter px-12 py-4 text-center shadow-lg shadow-shade-light transition-basic hover:shadow-lg hover:shadow-shade-dark dark:bg-gray-800 sm:w-auto'
							key={idx}>
							<h4 className='text-4xl font-semibold text-shade-darker dark:text-white'>{item.data}</h4>
							<p className='mt-3 font-medium dark:text-gray-400'>{item.title}</p>
						</li>
					))}
				</ul>
			</div>
		</Section>
	)
}

const stats = [
	{
		data: "35K",
		title: "Customers",
	},
	{
		data: "40+",
		title: "Countries",
	},
	{
		data: "30M+",
		title: "Total revenue",
	},
]
