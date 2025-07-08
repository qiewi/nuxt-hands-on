<template>
  <ul>
    <li
      v-for="(item, i) in props.items"
      :key="i"
      class="grid gap-8 lg:gap-12 md:grid-cols-2 items-center py-12"
    >
      <div>
        <h3 class="font-black md:text-4xl lg:text-5xl mb-4">
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
      <div>
        <div class="mx-auto max-w-2xl">
          <div class="relative pb-[100%]">
            <NuxtImg
              :key="'img' + i"
              loading="lazy"
              height="512"
              width="512"
              :src="item.image"
              :alt="item.title"
              class="absolute left-0 top-0 w-full h-full object-contain"
              :placeholder="[50, 50]"
            />
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})
</script>
