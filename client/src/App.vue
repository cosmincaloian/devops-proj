<script setup lang="ts">
import DevopsPoll from './components/DevopsPoll.vue'
</script>

<template>
  <main>
    <DevopsPoll />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
