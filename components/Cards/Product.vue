<template>
  <ul class="mb-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
    <li v-for="(item, i) in props.items" :key="i" class="">
      <NuxtLink
        :to="path + '/' + item.Slug"
        class="group block h-full rounded-lg border border-slate-200 bg-white hover:shadow-lg"
      >
        <div class="aspect-square overflow-hidden rounded-t-lg bg-gray-200">
          <NuxtImg
            :id="'card_img_' + i"
            :key="'img' + i"
            width="300"
            height="300"
            loading="lazy"
            :src="renderImage(item.Image[0])"
            class="h-full w-full object-cover transition-transform group-hover:scale-110"
            :onerror="`this.src='https://placehold.co/400x300'; this.srcset='';`"
            @error="handleError"
          />
        </div>
        <!-- loading="lazy" -->
        <div class="px-6 py-5">
          <!-- <time class="text-xs">
            {{ formatedDate(item.createdAt) }}
          </time> -->
          <h6
            class="group-hover:text-primary mb-2 block font-semibold select-none"
          >
            {{ item.Title }}
          </h6>
          <div class="flex items-center">
            <div
              class="text-primary mr-1 flex min-w-0 flex-shrink items-center truncate font-medium"
            >
              <div class="flex truncate">
                <span class="mr-px text-xs font-medium">Rp</span>
                <span class="truncate text-base/5 font-medium">
                  {{ price(item.Price, item.Discount) }}
                </span>
              </div>
            </div>
            <div
              v-if="item.Discount > 0"
              class="bg-primary-50/30 text-primary-600 mr-1 shrink-0 rounded-[2px] px-1 py-0.5 text-xs font-medium"
            >
              <span :aria-label="`-${item.Discount}%`">
                {{ `-${item.Discount}%` }}
              </span>
            </div>
          </div>
          <!-- <span class="inline-block text-xs">{{
            item.Categories[0].name
          }}</span> -->
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

// console.log({ items: props.items, path: props.path })

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

const price = (val, percent) => {
  console.log({ val, percent })
  if (percent > 0) {
    return (val - (val * percent) / 100).toLocaleString('id-ID')
  }
  return val.toLocaleString('id-ID')
}

function renderImage(img) {
  // console.log({ imgs: img.formats })
  return img ? img.formats.small.url : '/icon.png'
}
</script>

<style>
img[data-error='1'] {
  opacity: 0;
}
</style>
