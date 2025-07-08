<template>
  <ul class="border-b">
    <li v-for="(item, i) in props.items" :key="i">
      <details class="group border-t">
        <summary class="flex select-none cursor-pointer font-bold text-lg">
          <span class="py-3 group-open:text-primary">
            {{ item.title }}
          </span>
          <NuxtIcon
            class="py-3 text-primary text-2xl group-open:rotate-180"
            name="caret-down"
          />
        </summary>
        <div class="prose pb-4" v-html="item.content"></div>
      </details>
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
