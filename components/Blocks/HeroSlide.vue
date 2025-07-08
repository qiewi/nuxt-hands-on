<template>
  <section class="hero-slide">
    <BannerSlides v-if="isSingle" :item="props.data.Slide[0]" />
    <UCarousel
      v-else
      v-slot="{ item }"
      class-names
      arrows
      loop
      dots
      :items="props.data.Slide"
      :ui="{
        arrows: 'absolute inset-x-16 top-1/2 -translate-y-1/2',
        dots: 'bottom-4',
        item: 'ps-0',
      }"
    >
      <BannerSlides :item="item" />
    </UCarousel>
  </section>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
})

const isSingle = computed(() => {
  return props.data.Slide.length === 1
})
</script>
