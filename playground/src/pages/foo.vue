<script setup lang="ts">
const size = useStorage('size', 100)

function onLarge() {
  size.value += 20
}

function onReset() {
  size.value = 100
}
</script>

<template>
  <div px6 py-2 flex="~ col" items-center>
    <div flex="~ gap2">
      <button btn @click="onLarge">
        EnLarge
      </button>
      <button btn @click="onReset">
        reset
      </button>
    </div>
    <div class="circle-0" m10 items-center max-w-180 flex="~ col sm:row gap6">
      <Starport
        :port="String(0)"
        :style="{ width: `${size}px`, height: `${size}px` }"
        transition-all duration-800
      >
        <MyComponpent class="rounded-1/2 shadow-xl" :index="0" />
      </Starport>
      <p flex-1 text-left>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  </div>
</template>
