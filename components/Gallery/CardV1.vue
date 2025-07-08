<template>
  <NuxtLink :to="props.item.slug" class="w-full">
    <figure class="relative m-0 w-full overflow-hidden rounded-lg">
      <figcaption
        class="absolute right-4 bottom-4 z-[1] rounded-lg border-[1px] border-slate-500 bg-black/10 px-3 py-1 backdrop-blur-md"
      >
        <h3 class="line-clamp-1 text-sm text-white">{{ props.item.title }}</h3>
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
})
</script>
