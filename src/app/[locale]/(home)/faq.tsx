export default function Faq() {
	return (
		<div className='mx-4 mt-12 leading-relaxed md:mx-8'>
			<div className='space-y-3 text-center'>
				<h1 className='block text-3xl font-semibold text-gray-800'>Frequently Asked Questions</h1>
				<p className='mx-auto max-w-lg text-gray-500'>
					Answered all frequently asked questions. Can’t find the answer you’re looking for? feel free to contact us.
				</p>
			</div>
			<div
				className='relative mt-10 rounded-md bg-white sm:mx-auto md:max-w-3xl lg:max-w-4xl xl:max-w-5xl'
				style={{ boxShadow: "0px 7px 20px 7px #F1F1F1" }}>
				<div className='grid gap-4 py-8 md:grid-cols-2'>
					{faqsList.map((item, idx) => (
						<div className='mt-6 space-y-3 px-8' key={idx}>
							<h4 className='text-xl font-semibold text-gray-800 '>{item.q}</h4>
							<p className='text-gray-500'>{item.a}</p>
						</div>
					))}
				</div>
				<span className='absolute left-0 right-0 top-0 m-auto hidden h-full w-0.5 bg-gray-200 md:block'></span>
			</div>
		</div>
	)
}

const faqsList = [
	{
		a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
		q: "What are some random questions to ask?",
	},
	{
		a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.",
		q: "Do you include common questions?",
	},
	{
		a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
		q: "Can I use this for 21 questions?",
	},
	{
		a: "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).",
		q: "Are these questions for girls or for boys?",
	},
	{
		a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires.",
		q: "What do you wish you had more talent doing?",
	},
	{
		a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question to ask friends.",
		q: "What are some random questions to ask?",
	},
]
