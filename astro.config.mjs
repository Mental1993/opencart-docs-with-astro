import { defineConfig } from 'astro/config'
import image from '@astrojs/image'
import markdownIntegration from '@astropub/md'

export default defineConfig({
	integrations: [
		image({
			serviceEntryPoint: '@astrojs/image/sharp',
		}),
		markdownIntegration(),
	],
	markdown: {
		remarkPlugins: [],
		rehypePlugins: [],
		// syntaxHighlight: 'shiki'
		// syntaxHighlight: 'prism'
	},
})
