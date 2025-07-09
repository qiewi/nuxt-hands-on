<template>
  <section
    class="relative mb-12 h-[320px] w-full overflow-hidden sm:h-[420px] md:h-[480px]"
  >
    <div
      class="absolute inset-0 h-full w-full will-change-transform"
      :style="{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: `center ${offset}px`,
        transition: 'background-position 0.1s linear',
      }"
    />
    <div
      class="relative z-10 flex h-full flex-col items-center justify-center px-6"
      :style="{
        transform: `translateY(${offset * 0.3}px)`,
        transition: 'transform 0.1s linear',
      }"
    >
      <div
        class="container mx-auto pt-16 text-center sm:pt-20 md:pt-12 lg:pt-0"
      >
        <h1 class="mb-6 text-5xl font-bold text-white sm:text-2xl md:text-7xl">
          {{ title }}
        </h1>
        <p class="mx-auto mb-12 max-w-3xl text-white sm:text-base lg:text-xl">
          {{ description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Props
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  backgroundImage: {
    type: String,
    default: '/assets/img/hero-image.jpg',
  },
})

// Parallax effect
const offset = ref(0)

const handleScroll = () => {
  offset.value = window.scrollY * 0.4
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
