<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean
}>()
</script>

<template>
  <div
    class="my-component"
    overflow-hidden
    w-full h-full
    transition-all duration-500
    relative select-none
  >
    <slot />
  </div>
</template>
