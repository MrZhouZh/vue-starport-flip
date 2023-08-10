<script setup lang="ts" generic="T extends any, O extends any">
const router = useRouter()

function go() {
  console.log('click--')

  router.push('/foo')
}
</script>

<template>
  <div>
    <div>Index</div>

    <div>
      <button
        class="m-3 text-sm btn"
        @click="go"
      >
        Go
      </button>
    </div>
  </div>
</template>
