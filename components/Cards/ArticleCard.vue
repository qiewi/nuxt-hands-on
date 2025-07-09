<template>
  <article class="group cursor-pointer">
    <div class="mb-6 aspect-video overflow-hidden rounded-lg bg-gray-100">
      <div
        class="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 transition-transform duration-300 group-hover:scale-105"
      >
        <span class="text-lg text-gray-500">Article Image</span>
      </div>
    </div>

    <div class="mb-3">
      <span
        class="inline-block rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
      >
        {{ article.category }}
      </span>
    </div>

    <h3
      class="mb-3 text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-[#FF6600]"
    >
      {{ article.title }}
    </h3>

    <p class="mb-4 line-clamp-3 text-gray-600">{{ article.excerpt }}</p>

    <div class="flex items-center justify-between text-sm text-gray-500">
      <span>{{ article.date }}</span>
      <span>{{ article.readTime }}</span>
    </div>
  </article>
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    required: true,
    validator: value => {
      return (
        value &&
        typeof value.id !== 'undefined' &&
        typeof value.title === 'string' &&
        typeof value.excerpt === 'string' &&
        typeof value.category === 'string' &&
        typeof value.date === 'string' &&
        typeof value.readTime === 'string'
      )
    },
  },
})
</script>
