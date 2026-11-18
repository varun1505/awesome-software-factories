import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import EntryFilter from './EntryFilter.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  // The filter bar sits above the page content.
  Layout: () => h(DefaultTheme.Layout, null, { 'doc-before': () => h(EntryFilter) }),
}
