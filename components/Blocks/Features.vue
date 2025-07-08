<template>
  <div class="features py-8 lg:py-12">
    <div class="container mx-auto">
      <h2 class="mb-4 text-center text-2xl">{{ props.data.Title }}</h2>
      <p class="mb-8 text-center">{{ props.data.Description }}</p>
      <ul class="grid gap-8 md:grid-cols-2">
        <li v-for="(item, i) in props.data.Items" :key="i" class="mb-4 flex">
          <div class="mr-4 w-16 flex-shrink-0">
            <img
              :src="imgSrc(item.Image.formats)"
              :alt="item.Title"
              class="h-16 w-16 rounded-full object-cover"
            />
          </div>
          <div>
            <h3 class="mb-2 text-xl font-bold">{{ item.Title }}</h3>
            <p>{{ item.Description }}</p>
          </div>
        </li>
      </ul>
      <!-- <pre><code>{{ props.data }}</code></pre> -->
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
})

const imgSrc = src => {
  const keys = Object.keys(src)
  const lastKey = keys[keys.length - 1]
  const lastObject = src[lastKey]

  if (src.medium === undefined) {
    return lastObject.url
  } else {
    return src.medium.url
  }
}
</script>
