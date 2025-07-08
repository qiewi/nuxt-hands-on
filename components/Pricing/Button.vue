<template>
  <NuxtLink class="w-full" :to="url">
    <button :class="`w-full btn ${ variants === 'default' ? 'bg-slate-200 text-gray-600 hover:bg-slate-300' : variants === 'exclusive' ? 'bg-slate-600 text-gray-200 hover:bg-slate-500' : 'btn-primary'} shadow-none font-bold`">{{ cta }}</button>
  </NuxtLink>
</template>

<script setup>
const variants = inject('variants')
const { cta, url } = inject('button')
</script>