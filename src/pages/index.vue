<script setup lang="ts">
import { TheImageProxy } from '~/composables/image'

const mode = ref(false)
const toggle = useToggle(mode)
</script>

<template>
  <div>
    <div>Index</div>

    <div>
      <RouterLink
        btn
        to="/foo"
      >
        Foo
      </RouterLink>

      <RouterLink
        ml3 btn
        to="/bar"
      >
        Bar
      </RouterLink>

      <button ml-3 btn @click="toggle()">
        Toggle
      </button>
    </div>
    <TheImageProxy :class="mode ? 'w-50 h-50' : 'w-60 h-30'" rounded-xl />
  </div>
</template>
