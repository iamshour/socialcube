//#region Import
import Button from "@/components/ui/button"
import PATHS from "@/constants/paths"
//#endregion

const Careers = () => {
	return (
		<section className='relative bg-shade-lighter py-28' id='careers'>
			<div className='relative z-10 mx-auto max-w-screen-xl space-y-8 px-4 md:px-8 md:text-center'>
				<div className='max-w-xl md:mx-auto'>
					<p className='text-3xl font-semibold text-shade-darker sm:text-4xl'>Wanna Join our team ?</p>
					<p className='mt-3 text-shade-dark'>
						Contact us below to explore exciting career opportunities with SocialCub.ai. Join our dynamic team and help
						shape the future of digital innovation and business growth.
					</p>
				</div>
				<Button as='link' className='mx-auto w-max' href={PATHS.CONTACT_US}>
					Contact Us
				</Button>
			</div>
		</section>
	)
}

export default Careers
