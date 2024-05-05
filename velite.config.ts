//#region Import
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"
import { defineConfig, s } from "velite"
//#endregion

export default defineConfig({
	collections: {
		services: {
			name: "Service",
			pattern: "services/**/*.mdx",
			schema: s
				.object({
					code: s.mdx(),
					date: s.isodate(),
					description: s.string(),
					metadata: s.metadata(), // extract markdown reading-time, word-count, etc.
					slug: s.path(),
					title: s.string().max(99),
				})
				// more additional fields (computed fields)
				.transform((data) => ({ ...data, permalink: `/${data.slug}`, slug: data?.slug?.split("/")[1] })),
		},
	},
	markdown: {
		rehypePlugins: [
			rehypeSlug,
			[
				rehypePrettyCode,
				{
					onVisitHighlightedLine(node: any) {
						node.properties.className.push("line--highlighted")
					},
					onVisitHighlightedWord(node: any) {
						node.properties.className = ["word--highlighted"]
					},
					onVisitLine(node: any) {
						// Prevent lines from collapsing in `display: grid` mode, and allow empty
						// lines to be copy/pasted
						if (node.children.length === 0) {
							node.children = [{ type: "text", value: " " }]
						}
					},
					theme: "github-dark",
				},
			],
			[rehypeAutolinkHeadings, { properties: { ariaLabel: "Link to section", className: ["subheading-anchor"] } }],
		],
		remarkPlugins: [remarkGfm],
	},
})
