<template>
  <div class="my-4 flex items-end gap-2 text-gray-500">
    <span class="self-start">{{ currency === 'USD' ? '$' : 'Rp' }}</span>
    <span class="text-black text-5xl font-bold">{{ price }}</span>
    <span>/month</span>
  </div>
</template>

<script setup>
defineProps({
  currency: {
    type: String,
    required: false,
    default: 'USD',
  }
})

const price = inject('price')
</script>