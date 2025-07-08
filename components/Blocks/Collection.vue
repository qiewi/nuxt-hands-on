<template>
  <section class="block-collection block-padding">
    <div class="container">
      <!-- <pre><code>{{ dataCollection.value.data }}</code></pre> -->
      <div
        v-if="loading"
        class="mb-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-8"
      >
        <div
          v-for="(el, i) in pageSize"
          :key="el + i"
          class="rounded-lg border border-slate-200 bg-white"
        >
          <USkeleton class="aspect-16/10 w-full" />
          <div class="px-6 py-5">
            <USkeleton class="mb-2 h-4 w-1/2" />
            <USkeleton class="mb-2 h-6 w-full" />
            <USkeleton class="mb-2 h-6 w-2/3" />
          </div>
        </div>
      </div>
      <CardsProduct
        v-else
        :items="dataCollection.value.data"
        :path="route.path"
      />
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
})
const route = useRoute()

const apiCollection = props.data?.Data
const dataCollection = ref({})
const pageSize = ref(8)
const loading = ref(false)

async function fetchItems() {
  loading.value = true
  const { data } = await useFetch(`/api/app/${apiCollection}`, {
    query: {
      // populate: '*',
      // 'pagination[page]': page.value,
      // 'pagination[pageSize]': pageSize.value,
      // sort: sorted.value,
      // 'filters[Categories][slug][$eq]': selectedCategory.value,
    },
    // server: false,
  })

  dataCollection.value = data
  loading.value = false
}

fetchItems()
</script>
