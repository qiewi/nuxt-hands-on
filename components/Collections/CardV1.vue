<template>
  <NuxtLink :to="path + props.item.slug" class="w-full">
    <figure class="relative m-0 w-full overflow-hidden rounded-lg">
      <figcaption
        class="pointer-events-none absolute inset-x-0 bottom-0 z-[1] bg-gradient-to-t from-black/50 to-transparent p-4 pt-6"
      >
        <p class="line-clamp-1 text-sm text-gray-100">
          {{ props.item.category }}
        </p>
        <h3 class="line-clamp-1 text-lg text-white">{{ props.item.title }}</h3>
      </figcaption>

      <div class="relative aspect-video w-full">
        <NuxtImg
          width="300"
          height="200"
          :src="props.item.image"
          :alt="props.item.title"
          loading="lazy"
          class="absolute top-0 left-0 h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
    </figure>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  path: {
    type: String,
    default: () => '/',
  },
})
</script>
