<template>
  <section class="news py-10">
    <div class="container">
      <h1 class="mb-8 text-2xl lg:text-3xl">{{ props.data.Title }}</h1>
      <div class="mb-4">
        <!-- <UDropdownMenu :items="itemsSort" :update="sort">
          <UButton label="Sort" />
        </UDropdownMenu> -->
        <USelectMenu
          v-model="sorted"
          :items="itemsSort"
          value-key="key"
          :search-input="false"
          class="mr-2 w-48"
          @change="sort(sorted)"
        />

        <USelectMenu
          v-model="selectedCategory"
          :items="filterCategories"
          value-key="key"
          :search-input="false"
          class="w-48"
          placeholder="All"
          @change="getFilter(selectedCategory)"
        />
      </div>
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
      <!-- <pre><code>{{ newsData.value.data }}</code></pre> -->
      <Cards v-else :items="newsData.value.data" :path="fullPath" />

      <UPagination
        v-model:page="page"
        :total="itemsTotal"
        :items-per-page="pageSize"
        :to="toPage"
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
const router = useRouter()
const fullPath = route.path
const apiSlug = props.data?.Category

const itemsTotal = ref(0)
const page = ref(1)
const pageSize = ref(8)
const sorted = ref('createdAt:desc')
const filterCategories = ref([
  {
    label: 'All',
    key: undefined,
  },
])
const selectedCategory = ref(undefined)

const itemsSort = [
  {
    label: 'Latest',
    key: 'createdAt:desc',
  },
  {
    label: 'Oldest',
    key: 'createdAt:asc',
  },
]

const newsData = ref({})
const loading = ref(false)

const { data: categories } = await useFetch('/api/app/categories')

// filterCategories.value = categories.value.data.map(item => ({
//   label: item.name,
//   key: item.slug,
// }))

categories.value.data.forEach(item => {
  filterCategories.value.push({
    label: item.name,
    key: item.slug,
  })
})

async function fetchItems() {
  loading.value = true

  page.value = Number(route.query.page) || 1
  pageSize.value = route.query.pageSize || 8
  sorted.value = route.query.sort || 'createdAt:desc'
  selectedCategory.value = route.query.category || undefined

  // const { data } = await useAsyncData(() =>
  //   $fetch(`/api/app/posts?filters[Type]=${apiSlug}`, {
  //     query: {
  //       populate: '*',
  //       'pagination[page]': page.value,
  //       'pagination[pageSize]': pageSize.value,
  //       sort: sorted.value,
  //       'filters[Categories][slug][$eq]': selectedCategory.value || undefined,
  //     },
  //     // server: false,
  //   }),
  // )

  const { data } = await useFetch(`/api/app/posts?filters[Type]=${apiSlug}`, {
    query: {
      populate: '*',
      'pagination[page]': page.value,
      'pagination[pageSize]': pageSize.value,
      sort: sorted.value,
      'filters[Categories][slug][$eq]': selectedCategory.value,
    },
    // server: false,
  })

  newsData.value = data
  itemsTotal.value = data.value.meta.pagination.total
  loading.value = false
}

fetchItems()

// Watch route query changes
watch(
  () => route.query, // watch the entire query object
  () => {
    fetchItems()
    window.scrollTo(0, 0)
  },
  { deep: true, immediate: false }, // important: watch nested changes inside the query
)

// console.log({ status: status.value })

// function renderImage(img) {
//   return img ? img.formats.medium.url : '/icon.png'
// }

function toPage(page) {
  return {
    query: {
      ...route.query,
      page,
    },
  }
}

function sort(sort) {
  router.push({
    query: {
      ...route.query,
      sort,
      page: 1,
    },
  })
}

function getFilter(category) {
  router.push({
    query: {
      ...route.query,
      category,
      page: 1,
    },
  })
}

// function formatDate(date) {
//   return useDateFormat(date, 'DD MMMM YYYY')
// }
</script>
