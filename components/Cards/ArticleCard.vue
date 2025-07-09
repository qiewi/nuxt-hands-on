<template>
  <article class="group cursor-pointer">
    <div class="mb-6 aspect-video overflow-hidden rounded-lg bg-gray-100">
      <nuxt-img
        src="/assets/img/article-image.jpg"
        :alt="article.title"
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
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
