<template>
  <div flex="~ col" items-center>
    <div>Foo</div>
    <div>
      <RouterLink
        class="m-3 text-sm btn"
        to="/"
      >
        Back
      </RouterLink>
    </div>
    <div m10>
      <FloatProxy h-60 w-60 rounded="1/2" />
    </div>
  </div>
</template>
