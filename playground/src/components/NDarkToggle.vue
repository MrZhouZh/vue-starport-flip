<script setup lang="ts">
import { isDark } from '~/composables'

type NDocument = Document & {
  startViewTransition: any
}

const props = withDefaults(
  defineProps<{
    useTransition?: boolean
  }>(), {
    useTransition: true,
  },
)

const isAppearanceTransition = (document as NDocument).startViewTransition
  && !window.matchMedia('(prefers-reduced-motion:reduce)').matches

/**
 * Credit to [@hooray](https://github.com/hooray)
 * @see https://github.com/vuejs/vitepress/pull/2347
 */
function toggle(event: MouseEvent) {
  if (!props.useTransition) {
    isDark.value = !isDark.value
    return
  }
  if (!isAppearanceTransition || !event) {
    isDark.value = !isDark.value
    return
  }

  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  )

  const transition = (document as NDocument).startViewTransition(() => {
    isDark.value = !isDark.value
  })

  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ]
    document.documentElement.animate({
      clipPath: isDark.value
        ? [...clipPath].reverse()
        : clipPath,
    }, {
      duration: 400,
      easing: 'ease-in',
      pseudoElement: isDark.value
        ? '::view-transition-old(root)'
        : '::view-transition-new(root)',
    })
  })
}
</script>

<template>
  <button mr3 text-4 class="icon-btn !outline-none" @click="toggle">
    <div v-if="isDark" i-carbon-moon />
    <div v-else i-carbon-sun />
  </button>
</template>
