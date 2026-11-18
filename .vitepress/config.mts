import { defineConfig } from 'vitepress'
import { readmePlugin } from './readme-plugin'

// The site is the README. Nothing is copied: VitePress reads README.md
// and serves it as the home page, so every push to main updates the site.
const repo = 'https://github.com/varun1505/awesome-software-factories'
const hostname = 'https://awesome-harnessengineering.fyi'

export default defineConfig({
  title: 'Awesome Software Factories',
  description:
    'A curated list of software factories: systems that run AI coding agents autonomously, in parallel, and in loops to turn a backlog into working software.',
  lang: 'en-US',
  cleanUrls: true,
  lastUpdated: true,
  srcExclude: ['.github/**', 'LICENSE'],
  rewrites: {
    'README.md': 'index.md',
    'CONTRIBUTING.md': 'contributing.md',
  },
  sitemap: { hostname },
  markdown: {
    config: (md) => readmePlugin(md, repo),
  },
  // Put the section list on the left, like a sidebar that follows the scroll.
  transformPageData(pageData) {
    pageData.frontmatter.aside ??= 'left'
  },
  themeConfig: {
    nav: [
      { text: 'List', link: '/' },
      { text: 'Contribute', link: '/contributing' },
    ],
    outline: { level: [2, 3], label: 'Sections' },
    search: { provider: 'local' },
    socialLinks: [{ icon: 'github', link: repo }],
    editLink: {
      pattern: `${repo}/edit/main/:path`,
      text: 'Suggest a change on GitHub',
    },
    footer: {
      message: 'Released under CC0 1.0.',
    },
  },
})
