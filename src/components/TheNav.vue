<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div border="b gray-400:10" flex="~" mb-4 items-center p4>
    <div text-lg>
      {{ route.path }}
    </div>
    <div flex-auto />
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
