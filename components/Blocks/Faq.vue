<template>
  <section class="faq-block py-16 lg:py-24">
    <div class="container">
      <!-- <pre><code>{{ props.data }}</code></pre> -->

      <div class="grid gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-12">
        <nav>
          <ul class="mb-8">
            <li v-for="(item, i) in filterCategories" :key="i">
              <button
                type="button"
                class="block w-full cursor-pointer border-b-2 py-3 text-left hover:border-slate-200 hover:bg-slate-100"
                :class="
                  selectedCategory === item.key
                    ? 'text-primary border-slate-200'
                    : 'border-transparent'
                "
                @click.prevent="filterCategory(item.key)"
              >
                {{ item.label }}
              </button>
            </li>
          </ul>
        </nav>
        <div class="mb-8 md:col-span-2 lg:col-span-3">
          <div v-if="loading">
            <div
              v-for="(item, i) in 4"
              :key="i"
              class="flex justify-between border-b-1 border-slate-200 py-3"
            >
              <USkeleton class="h-5 w-3/4" />
              <USkeleton class="h-4 w-[24px]" />
            </div>
            <!-- <USkeleton class="mb-2 h-6 w-full" /> -->
          </div>
          <div v-else class="text-base">
            <UAccordion
              :items="faqsData.data"
              :ui="{
                trigger:
                  'text-lg cursor-pointer hover:text-primary-700 data-[state=open]:text-primary',
              }"
            >
              <template #content="{ item }">
                <div
                  class="prose bg-slate-100 px-6 pt-4 pb-8"
                  v-html="item.content"
                ></div>
              </template>
            </UAccordion>
            <!-- <pre><code>{{ faqsData }}</code></pre> -->
          </div>
        </div>
      </div>
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
const apiSlug = props.data?.Data
const filterCategories = ref([
  {
    label: 'All',
    key: undefined,
  },
])
const selectedCategory = ref(undefined)

const faqsData = ref({})
const loading = ref(false)

const { data: categories } = await useFetch('/api/app/faq-categories')

// filterCategories.value = categories.value.data.map(item => ({
//   label: item.Title,
//   key: item.Slug,
// }))

categories.value.data.forEach(item => {
  filterCategories.value.push({
    label: item.Title,
    key: item.Slug,
  })
})

async function fetchItems() {
  loading.value = true

  selectedCategory.value = route.query.category || undefined

  const data = await $fetch(`/api/app/${apiSlug}`, {
    query: {
      populate: '*',
      'filters[categories][Slug][$eqi]': selectedCategory.value,
    },
    // server: false,
  })

  // console.log({ data })

  faqsData.value = data
  faqsData.value.data = data.data.map(item => ({
    label: item.Question,
    content: item.Answer,
    categories: item.categories,
  }))

  loading.value = false
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

function getFilter(category) {
  router.push({
    query: {
      category,
    },
  })
}

function filterCategory(category) {
  selectedCategory.value = category
  getFilter(category)
}
</script>
