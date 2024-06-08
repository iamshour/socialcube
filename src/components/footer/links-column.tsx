//#region Import
import type { LinkProps } from "@/types"

import { Link } from "@/next.navigation"
//#endregion

export interface LinksColumnProps {
	heading: string
	links: LinkProps[]
}

const LinksColumn = ({ heading, links }: LinksColumnProps) => (
	<div>
		<p className='font-medium text-gray-900'>{heading}</p>

		<ul className='mt-6 space-y-4 text-sm'>
			{links?.map(({ href, label }) => (
				<li key={href}>
					<Link className='text-gray-700 transition hover:opacity-75' href={href}>
						{label}
					</Link>
				</li>
			))}
		</ul>
	</div>
)

export default LinksColumn
