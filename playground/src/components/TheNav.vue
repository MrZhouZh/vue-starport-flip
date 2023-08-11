<script setup lang="ts">
import { isDark, toggleDark } from '~/composables/dark'

const route = useRoute()
</script>

<template>
  <div border="b gray-400:10" flex="~" mb-4 items-center p4>
    <div text-lg>
      {{ route.path }}
    </div>
    <div flex-auto />
    <button mr3 class="icon-btn !outline-none" @click="toggleDark()">
      <div v-if="isDark" i-carbon-moon />
      <div v-else i-carbon-sun />
    </button>
    <div flex="~ gap1" justify-center>
      <router-link btn to="/">
        /
      </router-link>
      <router-link btn to="/foo">
        /foo
      </router-link>
      <router-link btn to="/bar">
        /bar
      </router-link>
    </div>
  </div>
</template>
