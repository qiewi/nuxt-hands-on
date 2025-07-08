<template>
  <ul class="mb-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
    <li v-for="(item, i) in props.items" :key="i" class="">
      <NuxtLink
        :to="path + '/' + item.slug"
        class="group block h-full rounded-lg border border-slate-200 bg-white hover:shadow-lg"
      >
        <div class="aspect-16/10 overflow-hidden rounded-t-lg bg-gray-200">
          <NuxtImg
            :id="'card_img_' + i"
            :key="'img' + i"
            width="400"
            height="250"
            loading="lazy"
            :src="renderImage(item.Image)"
            class="h-full w-full object-cover transition-transform group-hover:scale-110"
            :onerror="`this.src='https://placehold.co/400x300'; this.srcset='';`"
            @error="handleError"
          />
        </div>
        <!-- loading="lazy" -->
        <div class="px-6 py-5">
          <time class="text-xs">
            {{ formatedDate(item.createdAt) }}
          </time>
          <h6
            class="group-hover:text-primary mb-2 block text-lg leading-6 font-semibold select-none"
          >
            {{ item.Title }}
          </h6>
          <span class="inline-block text-xs">{{
            item.Categories[0].name
          }}</span>
          <!-- <div class="line-clamp-3 text-sm">{{ item.description }}</div> -->
          <!-- <span>
          {{ path + item.slug }}
        </span> -->
        </div>
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
// const dayjs = useDayjs()
import { useDateFormat } from '@vueuse/core'
// const { locale } = useI18n()

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  path: {
    type: String,
    default: () => '/',
  },
})

const formatedDate = date => {
  return useDateFormat(date, 'MMMM DD, YYYY')
}
// const formatedDate = date => {
//   return dayjs(date).locale(locale.value).format('MMM DD, YYYY')
// }
function handleError(e) {
  // e.target?.setAttribute('data-error', '1')
  // e.target?.setAttribute('src', 'https://placeholde.co/400x300')
  // e.target?.setAttribute('srcset', '')

  return `this.src='https://placehold.co/400x300'; this.srcset='';`
}

function renderImage(img) {
  return img ? img.formats.medium.url : '/icon.png'
}
</script>

<style>
img[data-error='1'] {
  opacity: 0;
}
</style>
