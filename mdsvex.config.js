import rehypeExternalLinks from 'rehype-external-links'

export const mdsvexConfig = {
  extensions: ['.md', '.svx'],
  layout: './src/md_layout.svelte',
  rehypePlugins: [[rehypeExternalLinks, { target: ['_blank'], rel: ['noopener noreferrer'] }]]
}