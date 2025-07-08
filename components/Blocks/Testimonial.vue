<template>
  <div class="testimony bg-slate-100 py-8 lg:py-12">
    <div class="container mx-auto">
      <h2 class="mb-4 text-center text-2xl lg:mb-8">{{ props.data.Title }}</h2>
      <ul class="grid gap-8 md:grid-cols-2">
        <li
          v-for="(item, i) in props.data.People"
          :key="i"
          class="rounded-lg bg-white p-8"
        >
          <blockquote class="text-center text-balance">
            “{{ item.Description }}”
          </blockquote>

          <figure class="m-0 mx-auto mt-8 flex w-fit items-center gap-4">
            <div
              class="relative h-20 w-20 overflow-hidden rounded-full border-4 border-slate-200"
            >
              <img
                width="100"
                height="100"
                :src="item.Image.formats.thumbnail.url"
                :alt="item.name"
                loading="lazy"
                class="absolute top-0 left-0 h-full w-full object-cover"
              />
            </div>

            <figcaption class="">
              <p class="font-bold">{{ item.Name }}</p>
              <p class="text-sm">{{ item.Title }}</p>
            </figcaption>
          </figure>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
})
</script>
