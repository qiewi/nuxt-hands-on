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
                <div class="relative">
                  <select
                    v-model="selectedShowPerPage"
                    class="w-[120px] appearance-none rounded-full border border-gray-300 bg-white px-4 py-2 pr-8 text-sm focus:border-[#FF6600] focus:ring-2 focus:ring-[#FF6600] focus:outline-none"
                  >
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                  </select>
                  <div
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    <svg
                      class="h-4 w-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span>Sort by:</span>
                <div class="relative">
                  <select
                    v-model="selectedSort"
                    class="w-[120px] appearance-none rounded-full border border-gray-300 bg-white px-4 py-2 pr-8 text-sm focus:border-[#FF6600] focus:ring-2 focus:ring-[#FF6600] focus:outline-none"
                  >
                    <option value="-published_at">Newest</option>
                    <option value="published_at">Oldest</option>
                  </select>
                  <div
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    <svg
                      class="h-4 w-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
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

// Use the article composable
const {
  // State
  currentPage,
  selectedShowPerPage,
  selectedSort,

  // API State
  pending,
  error,

  // Data
  articles,
  total,
  totalPages,
  start,
  end,
  paginationPages,

  // Methods
  goToPage,
} = useArticle()

// SEO
useMeta({
  title: 'Ideas & Insights - Suitmedia',
  description:
    'Explore our latest thoughts on technology, design, and digital innovation. Stay ahead with expert insights.',
})
</script>
