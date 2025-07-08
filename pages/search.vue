<template>
  <main class="app-main">
    <section class="py-6 sm:py-8 lg:py-12">
      <div class="container">
        <h1>Cari yang kau cari: {{ keyword }}</h1>
      </div>
    </section>
  </main>
</template>

<script setup>
const route = useRoute()

const keyword = ref(undefined)

function fetchItems() {
  keyword.value = route.query.keyword || undefined
}

fetchItems()

// Watch route query changes
watch(
  () => route.query, // watch the entire query object
  () => {
    fetchItems()
  },
  { deep: true, immediate: false }, // important: watch nested changes inside the query
)
</script>
