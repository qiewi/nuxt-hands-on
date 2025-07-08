<template>
  <section class="block-heading block-padding bg-black/5">
    <div class="container" :class="`text-${props.data.Align}`">
      <div class="inline-block max-w-screen-md">
        <p
          v-if="props.data.subTitle !== null"
          class="text-primary-400 mb-2 font-semibold md:mb-3 lg:text-lg"
        >
          {{ props.data.subTitle }}
        </p>

        <h2 class="mb-4 text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
          {{ props.data.Title }}
        </h2>

        <p class="max-w-screen-md text-gray-500 md:text-lg">
          {{ props.data.Description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
})
</script>
