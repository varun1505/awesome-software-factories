import type MarkdownIt from 'markdown-it'

// Reshapes the README for the website without changing the README itself.
// 1. Points the LICENSE link at GitHub, because LICENSE is not a page.
// 2. Drops the "Contents" section, because the sidebar already lists the sections.
// 3. Marks every "- [Name](url) - description" list so the theme can draw cards.
export function readmePlugin(md: MarkdownIt, repo: string) {
  md.core.ruler.push('readme-for-web', (state) => {
    const tokens = state.tokens

    // 1. LICENSE link
    for (const block of tokens) {
      for (const token of block.children ?? []) {
        if (token.type !== 'link_open') continue
        const href = token.attrGet('href') ?? ''
        if (/^(\.\/)?LICENSE$/.test(href)) token.attrSet('href', `${repo}/blob/main/LICENSE`)
      }
    }

    // 2. Contents section: the heading plus the list right after it
    const start = tokens.findIndex(
      (t, i) => t.type === 'heading_open' && tokens[i + 1]?.content.trim() === 'Contents',
    )
    if (start !== -1 && tokens[start + 3]?.type === 'bullet_list_open') {
      const level = tokens[start + 3].level
      const end = tokens.findIndex(
        (t, i) => i > start + 3 && t.type === 'bullet_list_close' && t.level === level,
      )
      if (end !== -1) tokens.splice(start, end - start + 1)
    }

    // 3. Entry lists
    for (let i = 0; i < tokens.length; i++) {
      const list = tokens[i]
      if (list.type !== 'bullet_list_open') continue
      const items: { item: (typeof tokens)[number]; inline: (typeof tokens)[number] }[] = []
      let allEntries = true
      for (let j = i + 1; j < tokens.length; j++) {
        const t = tokens[j]
        if (t.type === 'bullet_list_close' && t.level === list.level) break
        if (t.type !== 'list_item_open' || t.level !== list.level + 1) continue
        const inline = tokens.slice(j + 1).find((x) => x.type === 'inline')
        if (inline?.children?.[0]?.type === 'link_open') items.push({ item: t, inline })
        else allEntries = false
      }
      if (!allEntries || items.length === 0) continue
      list.attrJoin('class', 'entries')
      for (const { item, inline } of items) {
        item.attrJoin('class', 'entry')
        const children = inline.children!
        const close = children.findIndex((c) => c.type === 'link_close')
        const next = children[close + 1]
        // Drop the " - " that separates the name from the description.
        if (next?.type === 'text') next.content = next.content.replace(/^\s*[-–—]\s*/, '')
      }
    }
  })
}
