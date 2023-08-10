<script setup lang="ts">
import { TheImageProxy } from '~/composables/image'

let size = $(useStorage('size', 100))

function onLarge() {
  size += 20
}

function onReset() {
  size = 100
}
</script>

<template>
  <div flex="~ col" items-center>
    <div flex="~ gap2">
      <button btn @click="onLarge">
        EnLarge
      </button>
      <button btn @click="onReset">
        reset
      </button>
    </div>
    <div m10 flex="~ col <sm:row gap-4" items-center>
      <TheImageProxy :style="{ width: `${size}px`, height: `${size}px` }" rounded-full />
      <p flex-1>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
  </div>
</template>
