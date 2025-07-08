<template>
  <div class="slide-item relative h-[80svh]">
    <!-- <img
      :src="props.item.Image.url"
      alt=""
      class="absolute top-0 left-0 z-0 h-full w-full object-cover"
    /> -->
    <NuxtImg
      :src="props.item.Image.url"
      :alt="props.item.Title"
      loading="lazy"
      width="640"
      class="absolute top-0 left-0 z-0 h-full w-full object-cover"
      sizes="sm:320px md:768px lg:1024px xxl:1536px"
      :placeholder="[50, 50, 75, 5]"
    />

    <div
      class="relative z-[2] flex h-full flex-col justify-center bg-black/50 p-8 text-center text-white"
    >
      <div class="mx-auto max-w-xl">
        <h3 class="mb-4 text-2xl font-bold lg:mb-6 lg:text-4xl xl:text-5xl">
          {{ props.item.Title }}
        </h3>
        <div
          class="prose mb-6 text-white lg:text-lg xl:text-xl"
          v-html="props.item.Description"
        ></div>
        <div class="">
          <UButton
            v-for="(button, i) in props.item.Buttons"
            :key="i"
            :to="button.Url"
            :label="button.Title"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
})
</script>
