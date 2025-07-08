<template>
  <div :class="`relative flex flex-col gap-8 items-center bg-white p-8 pt-14 border-2 ${isHighlight ? 'border-primary' : 'border-slate-200'} rounded-lg`">
    <div v-if="isHighlight" class="absolute top-[-16px] inset-x-0">
      <div class="mx-auto max-w-1/2 w-fit bg-primary px-4 py-1 rounded-full">
        <span class="text-white font-bold uppercase tracking-widest line-clamp-1">Most Popular</span>
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup>
const prop = defineProps({
  item: {
    type: Object,
    required: true,
  }
})

provide('variants', prop.item.variants)
provide('header', {
  title: prop.item.title,
  description: prop.item.description,
})
provide('features', prop.item.features)
provide('price', prop.item.price)
provide('button', {
  cta: prop.item.cta,
  url: prop.item.url,
})

const isHighlight = computed(() => prop.item.variants !== 'exclusive' && prop.item.variants !== 'default')
</script>