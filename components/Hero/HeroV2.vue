<template>
  <section class="h-svh">
    <ul class="h-full">
      <li
        v-for="(item, i) in props.items"
        :key="i"
        class="relative h-full flex items-center"
      >
        <NuxtImg
          :key="'bg' + i"
          :src="item.background"
          alt=""
          :loading="i === 0 ? null : 'lazy'"
          :preload="i === 0 ? true : null"
          class="absolute top-0 left-0 w-full h-full z-0 object-cover"
        />
        <span
          class="overlay block h-full w-4/6 absolute z-[1] top-0 left-0 bg-gradient-to-r from-black/80 to-black/0"
        ></span>
        <div
          class="relative z-[2] container mx-auto grid gap-8 lg:gap-12 md:grid-cols-2 items-center"
        >
          <div class="item-text text-white">
            <h3 class="font-bold md:text-4xl lg:text-5xl mb-4">
              {{ item.title }}
            </h3>
            <div class="mb-4">{{ item.description }}</div>
            <div class="flex items-center">
              <NuxtLink
                v-for="(cta, c) in item.ctas"
                :key="c"
                :to="cta.url"
                class="btn mr-4"
                :class="`btn-${cta.type}`"
              >
                <span>{{ cta.title }}</span>
              </NuxtLink>
            </div>
          </div>
          <div class="item-img">
            <div class="mx-auto max-w-2xl">
              <div class="relative pb-[100%]">
                <nuxt-img
                  :key="'img' + i"
                  height="512"
                  :src="item.image"
                  :alt="item.title"
                  :loading="i === 0 ? null : 'lazy'"
                  :preload="i === 0 ? true : null"
                  class="absolute left-0 top-0 w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})
</script>
