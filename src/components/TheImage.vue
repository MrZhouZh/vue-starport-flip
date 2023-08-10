<script setup lang="ts">
// const Images = [
//   'https://images.unsplash.com/photo-1681255633332-61b53fa198e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1015&q=80',
//   'https://images.unsplash.com/photo-1691531315982-f6bccf4bd875?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
// ]

const a = $ref(false)
</script>

<template>
  <div overflow-hidden transition-all duration-500 @click="a = !a">
    <img v-if="a" block h-full w-full object-cover src="https://images.unsplash.com/photo-1681255633332-61b53fa198e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1015&q=80" alt="unsplash pic1">
    <img v-else block h-full w-full object-cover src="https://images.unsplash.com/photo-1691531315982-f6bccf4bd875?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt="unsplash pic2">
  </div>
</template>
