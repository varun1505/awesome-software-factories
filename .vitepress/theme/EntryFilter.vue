<script setup lang="ts">
// Filter bar for the list. It reads the data attributes that readme-plugin.ts
// puts on each entry, then hides the entries and sections that do not match.
import { nextTick, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const agents = ref<{ name: string; count: number }[]>([])
const agent = ref('')
const query = ref('')
const hideUnmaintained = ref(false)
const freeOnly = ref(false)
const total = ref(0)
const shown = ref(0)

let entries: HTMLElement[] = []

function scan() {
  entries = [...document.querySelectorAll<HTMLElement>('.vp-doc li.entry')]
  total.value = entries.length
  const counts = new Map<string, number>()
  for (const el of entries) {
    for (const name of (el.dataset.agents ?? '').split('|').filter(Boolean)) {
      counts.set(name, (counts.get(name) ?? 0) + 1)
    }
  }
  agents.value = [...counts]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
}

function apply() {
  const q = query.value.trim().toLowerCase()
  let visible = 0
  for (const el of entries) {
    const ok =
      (!agent.value || (el.dataset.agents ?? '').split('|').includes(agent.value)) &&
      (!q || (el.textContent ?? '').toLowerCase().includes(q)) &&
      (!hideUnmaintained.value || !('unmaintained' in el.dataset)) &&
      (!freeOnly.value || !('paid' in el.dataset))
    el.classList.toggle('filter-hidden', !ok)
    if (ok) visible++
  }
  shown.value = visible
  hideEmptySections()
  syncUrl()
}

// Hide a heading and its text when every entry under it is hidden.
function hideEmptySections() {
  const root = document.querySelector('.vp-doc > div')
  if (!root) return
  const blocks = [...root.children] as HTMLElement[]
  blocks.forEach((el) => el.classList.remove('filter-hidden'))
  for (const level of ['H2', 'H3']) {
    blocks.forEach((heading, i) => {
      if (heading.tagName !== level) return
      const section: HTMLElement[] = []
      for (const el of blocks.slice(i + 1)) {
        if (el.tagName === 'H2' || (level === 'H3' && el.tagName === 'H3')) break
        section.push(el)
      }
      const cards = section.flatMap((el) =>
        el.matches('ul.entries') ? ([...el.children] as HTMLElement[]) : [],
      )
      if (cards.length && cards.every((c) => c.classList.contains('filter-hidden'))) {
        ;[heading, ...section].forEach((el) => el.classList.add('filter-hidden'))
      }
    })
  }
}

// Keep the filter in the address bar, so a filtered view can be shared.
function syncUrl() {
  const params = new URLSearchParams()
  if (agent.value) params.set('agent', agent.value)
  if (query.value.trim()) params.set('q', query.value.trim())
  if (hideUnmaintained.value) params.set('maintained', '1')
  if (freeOnly.value) params.set('free', '1')
  const search = params.toString()
  history.replaceState(history.state, '', location.pathname + (search ? `?${search}` : '') + location.hash)
}

function reset() {
  agent.value = ''
  query.value = ''
  hideUnmaintained.value = false
  freeOnly.value = false
}

async function init() {
  await nextTick()
  scan()
  apply()
}

onMounted(() => {
  const params = new URLSearchParams(location.search)
  agent.value = params.get('agent') ?? ''
  query.value = params.get('q') ?? ''
  hideUnmaintained.value = params.has('maintained')
  freeOnly.value = params.has('free')
  init()
})
watch(() => route.path, init)
watch([agent, query, hideUnmaintained, freeOnly], apply)
</script>

<template>
  <div v-if="total" class="entry-filter">
    <div class="row">
      <input v-model="query" class="search" type="search" placeholder="Filter the list…" aria-label="Filter the list" />
      <label><input v-model="hideUnmaintained" type="checkbox" /> Maintained only</label>
      <label><input v-model="freeOnly" type="checkbox" /> Free only</label>
      <span class="count">{{ shown }} of {{ total }}</span>
      <button v-if="shown !== total" class="reset" @click="reset">Clear</button>
    </div>
    <div class="row chips" aria-label="Filter by agent">
      <button :class="{ active: !agent }" @click="agent = ''">All agents</button>
      <button
        v-for="a in agents"
        :key="a.name"
        :class="{ active: agent === a.name }"
        @click="agent = agent === a.name ? '' : a.name"
      >
        {{ a.name }} <small>{{ a.count }}</small>
      </button>
    </div>
  </div>
</template>

<style scoped>
.entry-filter {
  position: sticky;
  top: var(--vp-nav-height);
  z-index: 5;
  margin-bottom: 24px;
  padding: 12px 0;
  background: var(--vp-c-bg);
  border-bottom: 1px solid var(--vp-c-divider);
  font-size: 13px;
}
.row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 14px;
}
.chips {
  margin-top: 10px;
  gap: 6px;
}
.search {
  flex: 1 1 200px;
  min-width: 0;
  padding: 6px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-size: 14px;
}
.search:focus {
  border-color: var(--vp-c-brand-1);
  outline: none;
}
label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--vp-c-text-2);
  cursor: pointer;
  white-space: nowrap;
}
.count {
  color: var(--vp-c-text-3);
  font-variant-numeric: tabular-nums;
}
.reset {
  color: var(--vp-c-brand-1);
  font-weight: 500;
}
.chips button {
  padding: 3px 11px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  color: var(--vp-c-text-2);
  transition: border-color 0.2s, color 0.2s;
}
.chips button:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-text-1);
}
.chips button.active {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}
.chips small {
  margin-left: 2px;
  color: var(--vp-c-text-3);
}
</style>
