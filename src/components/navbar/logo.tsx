//#region Import
import Image from "next/image"
import Link from "next/link"
//#endregion

const Logo = () => (
	<Link href={"/"}>
		<Image alt='logo' className='w-24' height={150} src='/logos/bird-logo.png' width={150} />
	</Link>
)

export default Logo
