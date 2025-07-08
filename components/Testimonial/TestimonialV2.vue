<template>
  <div class="max-w-[480px] p-8 rounded-lg text-black">
    <blockquote class="text-balance text-center">
      “{{props.data.testimonial}}”
    </blockquote>

    <figure class="m-0 mt-8 w-fit mx-auto flex gap-4 items-center">
      <div class="overflow-hidden relative w-20 h-20 rounded-full shadow-lg">
        <NuxtImg
          width="100"
          height="100"
          :src="props.data.image"
          loading="lazy"
          class="absolute w-full h-full top-0 left-0 object-cover"
        />
      </div>

      <figcaption class="">
        <p class="font-bold text-primary">{{ props.data.name }}</p>
        <p class="text-sm text-gray-400">{{ props.data.details }}</p>
      </figcaption>
    </figure>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  }
})
</script>