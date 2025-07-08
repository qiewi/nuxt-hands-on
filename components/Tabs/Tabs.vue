<script setup>
const props = defineProps({
  navs: {
    type: Array,
    default: () => [],
  },
  currentNav: {
    type: Number,
    default: () => 0,
  },
})

const emit = defineEmits(['selected'])

function selected(i) {
  emit('selected', i)
}
</script>

<template>
  <div class="tab">
    <nav class="block overflow-x-auto no-scrollbar">
      <ul class="flex border-b">
        <li v-for="(nav, i) in props.navs" :key="i" class="mx-1">
          <button
            type="button"
            class="font-bold inline-flex px-5 h-11 rounded-t-lg items-center justify-center"
            :class="
              props.currentNav === i
                ? 'text-white bg-primary hover:text-white hover:bg-primary'
                : 'text-slate-600 hover:text-primary hover:bg-slate-100'
            "
            @click.stop="selected(i)"
          >
            <span>{{ nav.title }}</span>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>
