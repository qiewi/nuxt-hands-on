<template>
  <ul class="mx-auto flex-grow flex flex-col gap-4">
    <li 
      v-for="feature, i in features" 
      :key="i"
      class="flex gap-4 items-center"
    >
      <nuxt-icon name="check-thin" class="text-xl text-primary"/>
      <span class="text-gray-500 text-sm">{{ feature }}</span>
    </li>
  </ul>
</template>

<script setup>
const features = inject('features')
</script>