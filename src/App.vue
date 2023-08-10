<script setup lang="ts">
import { TheImageContainer } from '~/composables/image'
</script>

<template>
  <main font-sans text="center gray-700 dark:gray-200">
    <TheNav />
    <RouterView />
  </main>
  <TheImageContainer />
</template>
