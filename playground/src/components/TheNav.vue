<script setup lang="ts">
import { isDebug, toggleDebug } from '~/composables/dark'

const route = useRoute()
</script>

<template>
  <div border="b gray-400:10" flex="~" mb-4 items-center p4>
    <div text-lg>
      {{ route.path }}
    </div>
    <div flex-auto />
    <button
      class="icon-btn !outline-none p1"
      :class="isDebug ? '!text-red bg-red:10 rounded' : ''"
      text-4 mr-3
      @click="toggleDebug()"
    >
      <div i-carbon-debug />
    </button>
    <NDarkToggle />
    <a
      i-carbon-logo-github icon-btn
      text-4 mr-3
      rel="noreferrer"
      href="https://github.com/MrZhouZh/vue-starport-flip"
      target="_blank"
      title="GitHub"
    />
    <div flex="~ gap1" justify-center>
      <router-link btn to="/">
        /
      </router-link>
      <router-link btn to="/bar">
        /bar
      </router-link>
    </div>
  </div>
</template>
