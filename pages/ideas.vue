<template>
  <main class="bg-white">
    <!-- Hero Section -->
    <section class="px-6 pt-32 pb-20">
      <div class="container mx-auto text-center">
        <h1 class="mb-6 text-5xl font-bold text-gray-900 md:text-7xl">
          Ideas & Insights
        </h1>
        <p class="mx-auto mb-12 max-w-3xl text-xl text-gray-600">
          Explore our latest thoughts on technology, design, and digital
          innovation. Stay ahead with insights from our team of experts.
        </p>
      </div>
    </section>

    <!-- Featured Article -->
    <section class="px-6 pb-20">
      <div class="container mx-auto">
        <div class="mb-16 rounded-lg bg-gray-50 p-8 lg:p-12">
          <div class="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span
                class="mb-4 inline-block rounded-full bg-[#FF6600] px-3 py-1 text-sm font-medium text-white"
              >
                Featured
              </span>
              <h2 class="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
                The Future of Web Development in 2024
              </h2>
              <p class="mb-6 text-lg text-gray-600">
                Explore the emerging trends and technologies that are shaping
                the future of web development, from AI integration to
                progressive web apps.
              </p>
              <div class="mb-6 flex items-center text-sm text-gray-500">
                <span>December 15, 2023</span>
                <span class="mx-2">•</span>
                <span>5 min read</span>
                <span class="mx-2">•</span>
                <span>Technology</span>
              </div>
              <NuxtLink
                to="#"
                class="inline-block rounded-lg bg-[#FF6600] px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-[#e55a00]"
              >
                Read Article
              </NuxtLink>
            </div>
            <div
              class="flex aspect-video items-center justify-center rounded-lg bg-gray-200"
            >
              <span class="text-lg text-gray-500">Featured Article Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Articles Section -->
    <section class="px-6 pb-20">
      <div class="container mx-auto py-10">
        <div v-if="pending" class="py-20 text-center">
          <div
            class="inline-block h-8 w-8 animate-spin rounded-full border-b-2 border-[#FF6600]"
          ></div>
          <p class="mt-4 text-gray-600">Loading articles...</p>
        </div>

        <div v-else-if="error" class="py-20 text-center">
          <p class="text-red-600">Error loading articles. Please try again.</p>
        </div>

        <div v-else>
          <!-- Controls and Info -->
          <div
            class="mb-6 flex flex-col gap-4 text-black sm:flex-row sm:items-center sm:justify-between"
          >
            <div class="text-sm">
              Showing {{ start }} - {{ end }} of {{ total }}
            </div>
            <div class="flex flex-row gap-4">
              <div class="flex items-center gap-2">
                <span>Show per page:</span>
                <select
                  v-model="selectedShowPerPage"
                  class="w-[120px] rounded-3xl border border-gray-300 px-3 py-2 text-sm focus:border-[#FF6600] focus:ring-2 focus:ring-[#FF6600] focus:outline-none"
                >
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                </select>
              </div>
              <div class="flex items-center gap-2">
                <span>Sort by:</span>
                <select
                  v-model="selectedSort"
                  class="w-[120px] rounded-3xl border border-gray-300 px-3 py-2 text-sm focus:border-[#FF6600] focus:ring-2 focus:ring-[#FF6600] focus:outline-none"
                >
                  <option value="-published_at">Newest</option>
                  <option value="published_at">Oldest</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Articles Grid -->
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            <CardsArticleCard
              v-for="article in articles"
              :key="article.id"
              :article="article"
            />
          </div>

          <!-- Pagination -->
          <div v-if="totalPages > 1" class="mt-16 flex justify-center">
            <div class="flex items-center gap-1">
              <!-- First Page -->
              <button
                :disabled="currentPage === 1"
                :class="[
                  'flex h-8 w-8 items-center justify-center rounded transition-colors',
                  currentPage === 1
                    ? 'cursor-not-allowed opacity-50'
                    : 'hover:bg-gray-100',
                ]"
                @click="goToPage(1)"
                aria-label="First page"
              >
                <svg
                  class="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                  />
                </svg>
              </button>

              <!-- Previous Page -->
              <button
                :disabled="currentPage === 1"
                :class="[
                  'flex h-8 w-8 items-center justify-center rounded transition-colors',
                  currentPage === 1
                    ? 'cursor-not-allowed opacity-50'
                    : 'hover:bg-gray-100',
                ]"
                @click="goToPage(currentPage - 1)"
                aria-label="Previous page"
              >
                <svg
                  class="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <!-- Page Numbers -->
              <template v-for="(page, idx) in paginationPages" :key="idx">
                <span
                  v-if="page === '...'"
                  class="flex h-8 w-8 items-center justify-center text-gray-400 select-none"
                >
                  <svg
                    class="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 12h.01M12 12h.01M19 12h.01"
                    />
                  </svg>
                </span>
                <button
                  v-else
                  :class="[
                    'flex h-8 w-8 items-center justify-center rounded font-medium transition-colors',
                    currentPage === page
                      ? 'bg-[#FF6600] text-white'
                      : 'border border-transparent bg-transparent text-black hover:bg-[#FF6600]/80 hover:text-white',
                  ]"
                  @click="goToPage(page)"
                  :aria-current="currentPage === page ? 'page' : undefined"
                >
                  {{ page }}
                </button>
              </template>

              <!-- Next Page -->
              <button
                :disabled="currentPage === totalPages"
                :class="[
                  'flex h-8 w-8 items-center justify-center rounded transition-colors',
                  currentPage === totalPages
                    ? 'cursor-not-allowed opacity-50'
                    : 'hover:bg-gray-100',
                ]"
                @click="goToPage(currentPage + 1)"
                aria-label="Next page"
              >
                <svg
                  class="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              <!-- Last Page -->
              <button
                :disabled="currentPage === totalPages"
                :class="[
                  'flex h-8 w-8 items-center justify-center rounded transition-colors',
                  currentPage === totalPages
                    ? 'cursor-not-allowed opacity-50'
                    : 'hover:bg-gray-100',
                ]"
                @click="goToPage(totalPages)"
                aria-label="Last page"
              >
                <svg
                  class="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="bg-gray-50 px-6 py-20">
      <div class="container mx-auto text-center">
        <h2 class="mb-6 text-4xl font-bold text-gray-900">Stay Updated</h2>
        <p class="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
          Subscribe to our newsletter and never miss our latest insights, tips,
          and updates.
        </p>

        <form class="mx-auto flex max-w-md gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            class="flex-1 rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-[#FF6600] focus:outline-none"
          />
          <button
            type="submit"
            class="rounded-lg bg-[#FF6600] px-6 py-3 font-semibold whitespace-nowrap text-white transition-colors duration-300 hover:bg-[#e55a00]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="px-6 py-20">
      <div class="container mx-auto text-center">
        <h2 class="mb-6 text-4xl font-bold text-gray-900">
          Have a Project in Mind?
        </h2>
        <p class="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
          Let's turn your ideas into reality. Our team is ready to help you
          build something amazing.
        </p>
        <NuxtLink
          to="/contact"
          class="inline-block rounded-lg bg-[#FF6600] px-8 py-4 font-semibold text-white transition-colors duration-300 hover:bg-[#e55a00]"
        >
          Start Your Project
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup>
definePageMeta({
  name: 'ideas',
})

// Get URL parameters
const route = useRoute()
const router = useRouter()

// Reactive state
const currentPage = ref(Number(route.query.page) || 1)
const selectedShowPerPage = ref(Number(route.query.size) || 10)
const selectedSort = ref(route.query.sort || '-published_at')

// Fetch data from API
const {
  data: apiResponse,
  pending,
  error,
  refresh,
} = await useAsyncData(
  'ideas',
  async () => {
    const response = await $fetch('/api/app/pages/ideas', {
      query: {
        'page[number]': currentPage.value,
        'page[size]': selectedShowPerPage.value,
        sort: selectedSort.value,
        'append[]': ['small_image', 'medium_image'],
      },
    })
    return response
  },
  {
    watch: [currentPage, selectedShowPerPage, selectedSort],
  },
)

// Computed properties for data
const articles = computed(() => apiResponse.value?.data || [])
const total = computed(() => apiResponse.value?.meta?.total || 0)
const totalPages = computed(() =>
  Math.ceil(total.value / selectedShowPerPage.value),
)

// Pagination display info
const start = computed(
  () => (currentPage.value - 1) * selectedShowPerPage.value + 1,
)
const end = computed(() =>
  Math.min(currentPage.value * selectedShowPerPage.value, total.value),
)

// Pagination logic matching React component
const paginationPages = computed(() => {
  const pages = []
  const current = currentPage.value
  const totalPagesCount = totalPages.value

  if (totalPagesCount <= 5) {
    // Show all pages if total is 5 or less
    for (let i = 1; i <= totalPagesCount; i++) {
      pages.push(i)
    }
  } else {
    if (current <= 3) {
      // Show first 4 pages + ellipsis + last page
      pages.push(1, 2, 3, 4, '...', totalPagesCount)
    } else if (current >= totalPagesCount - 2) {
      // Show first page + ellipsis + last 4 pages
      pages.push(
        1,
        '...',
        totalPagesCount - 3,
        totalPagesCount - 2,
        totalPagesCount - 1,
        totalPagesCount,
      )
    } else {
      // Show first page + ellipsis + current-1, current, current+1 + ellipsis + last page
      pages.push(
        1,
        '...',
        current - 1,
        current,
        current + 1,
        '...',
        totalPagesCount,
      )
    }
  }

  return pages
})

// Navigation functions
const updateUrl = params => {
  const query = { ...route.query, ...params }
  router.push({ query })
}

const goToPage = page => {
  currentPage.value = page
  updateUrl({ page })
}

// Watch for changes and update URL
watch(selectedSort, newSort => {
  updateUrl({ sort: newSort, page: 1 })
  currentPage.value = 1
})

watch(selectedShowPerPage, newSize => {
  updateUrl({ size: newSize, page: 1 })
  currentPage.value = 1
})

// Update reactive state when URL changes
watch(
  () => route.query,
  newQuery => {
    currentPage.value = Number(newQuery.page) || 1
    selectedShowPerPage.value = Number(newQuery.size) || 10
    selectedSort.value = newQuery.sort || '-published_at'
  },
)

// SEO
useMeta({
  title: 'Ideas & Insights - Suitmedia',
  description:
    'Explore our latest thoughts on technology, design, and digital innovation. Stay ahead with expert insights.',
})
</script>
