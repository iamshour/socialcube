//#region Import
import Image from "next/image"
//#endregion

const MissionVision = () => {
	return (
		<section>
			<div className='mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8'>
				<div className='grid grid-cols-1 lg:grid-cols-2'>
					<div className='relative z-10 lg:py-20'>
						<div className='relative h-48 overflow-hidden rounded-lg sm:h-64 lg:h-full'>
							<Image
								alt='An image here'
								className='absolute inset-0 h-full w-full object-cover'
								height={400}
								src='/images/company/mission-vision.png'
								width={320}
							/>
						</div>
					</div>

					<div className='relative flex items-center bg-shade-lighter/20'>
						<span className='hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-shade-lighter/20' />

						<div className='flex flex-col gap-10 p-8 sm:p-12 lg:p-20'>
							<div>
								<h2 className='text-2xl font-bold sm:text-3xl'>Our Mission</h2>

								<p className='mt-4 text-gray-600'>
									To empower businesses by delivering innovative, customized digital solutions that drive growth,
									enhance brand visibility, and streamline operations. We are dedicated to fostering long-term
									partnerships and exceeding client expectations through our expertise in social media, web development,
									mobile app development, e-commerce, and accounting software.
								</p>
							</div>
							<div>
								<h2 className='text-2xl font-bold sm:text-3xl'>Our Vision</h2>

								<p className='mt-4 text-gray-600'>
									To be a leading force in the digital transformation landscape, recognized for our commitment to
									excellence, innovation, and customer satisfaction. We strive to create a sustainable impact by turning
									ideas into successful, thriving businesses that shape the future of the digital world.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MissionVision
