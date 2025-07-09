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
        {{ randomCategory }}
      </span>
    </div>

    <h3
      class="mb-3 text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-[#FF6600]"
    >
      {{ article.title }}
    </h3>

    <p class="mb-4 line-clamp-3 text-gray-600">{{ staticExcerpt }}</p>

    <div class="flex items-center justify-between text-sm text-gray-500">
      <span>{{ formattedDate }}</span>
      <span>6 min read</span>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  article: {
    type: Object,
    required: true,
    validator: value => {
      return (
        value &&
        typeof value.id !== 'undefined' &&
        typeof value.title === 'string' &&
        typeof value.published_at === 'string'
      )
    },
  },
})

// Static categories
const categories = ['Technology', 'Design', 'Strategy']

// Generate random category based on article id for consistency
const randomCategory = computed(() => {
  const index = parseInt(props.article.id) % categories.length
  return categories[index]
})

// Static excerpts based on category
const excerpts = {
  Technology:
    'Exploring the latest technological innovations and their impact on modern web development and digital solutions.',
  Design:
    'Understanding design principles and user experience strategies that create engaging and intuitive digital interfaces.',
  Strategy:
    'Strategic insights for businesses looking to leverage digital transformation and optimize their online presence.',
}

const staticExcerpt = computed(() => {
  return excerpts[randomCategory.value]
})

// Format date from API response
const formattedDate = computed(() => {
  if (!props.article.published_at) return ''

  const date = new Date(props.article.published_at)
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
})
</script>
