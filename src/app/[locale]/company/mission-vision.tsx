//#region Import
import { useTranslations } from "next-intl"
import Image from "next/image"
//#endregion

const MissionVision = () => {
	const t = useTranslations("company.missionVision")

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
								<h2 className='text-2xl font-bold sm:text-3xl'>{t("mission.heading")}</h2>
								<p className='mt-4 text-gray-600'>{t("mission.desc")}</p>
							</div>
							<div>
								<h2 className='text-2xl font-bold sm:text-3xl'>{t("vision.heading")}</h2>
								<p className='mt-4 text-gray-600'>{t("vision.desc")}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MissionVision
