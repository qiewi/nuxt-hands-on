<template>
  <main id="main" role="main" class="site-main">
    <div class="container">
      <h1>{{ staticPath }}</h1>
    </div>
  </main>
</template>

<script setup>
definePageMeta({ auth: false })
const route = useRoute()
const staticPath = route.params.static
</script>
