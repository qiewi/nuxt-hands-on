<template>
  <div
    v-if="show"
    class="bg-primary relative w-full overflow-hidden text-white"
    :class="{ 'rounded-lg': props.rounded }"
  >
    <div class="flex w-full">
      <div
        class="mx-auto flex w-full max-w-[1000px] flex-col gap-2 p-4 md:flex-row md:items-center md:justify-center"
      >
        <p class="mr-10 md:mr-2">
          {{ data.text }}
        </p>

        <NuxtLink
          :to="data.link"
          class="btn bg-primary-600 hover:bg-primary-700 min-w-[140px] shadow-none md:h-fit md:px-5 md:py-1"
        >
          <span class="">{{ data.linkText }}</span>
        </NuxtLink>
      </div>

      <div class="absolute top-4 right-5 md:static md:mt-2 md:mr-2">
        <div
          class="hover:bg-primary-400 flex h-6 w-6 cursor-pointer rounded-full transition-colors"
        >
          <nuxt-icon name="close-thin" class="text-2xl" @click="show = false" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  rounded: {
    type: Boolean,
    default: true,
  },
})

const show = ref(true)
</script>
