<template>
  <div class="text-center w-11/12">
    <h3 class="text-2xl font-bold">{{ title }}</h3>
    <p class="mt-2 text-gray-500 text-balance">{{ description }}</p>
  </div>
</template>

<script setup>
const { title, description } = inject('header')
</script>