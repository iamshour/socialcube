import servicesData from "./data"

// eslint-disable-next-line react-refresh/only-export-components
export async function generateStaticParams() {
	return servicesData.map((service) => ({ slug: service.slug }))
}

export default function Page({ params }: { params: { slug: string } }) {
	// eslint-disable-next-line no-console
	console.log(params)

	return (
		<h1>
			My Service Page <span className='text-xl font-bold'>{params?.slug}</span>
		</h1>
	)
}
