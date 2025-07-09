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

    <!-- Filter Section -->
    <section class="px-6 pb-12">
      <div class="container mx-auto">
        <div class="mb-12 flex flex-wrap justify-center gap-4">
          <button
            v-for="category in categories"
            :key="category"
            :class="[
              'rounded-full border-2 px-6 py-3 transition-all duration-300',
              selectedCategory === category
                ? 'border-[#FF6600] bg-[#FF6600] text-white'
                : 'border-gray-300 bg-white text-gray-700 hover:border-[#FF6600]',
            ]"
            @click="selectedCategory = category"
          >
            {{ category }}
          </button>
        </div>
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

    <!-- Articles Grid -->
    <section class="px-6 pb-20">
      <div class="container mx-auto">
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <CardsArticleCard
            v-for="article in filteredArticles"
            :key="article.id"
            :article="article"
          />
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

const selectedCategory = ref('All')

const categories = ['All', 'Technology', 'Design', 'Strategy', 'Industry News']

const articles = [
  {
    id: 1,
    title: 'Building Scalable React Applications',
    excerpt:
      'Learn best practices for structuring large React applications that can grow with your business needs.',
    category: 'Technology',
    date: 'Dec 10, 2023',
    readTime: '8 min read',
  },
  {
    id: 2,
    title: 'The Psychology of User Interface Design',
    excerpt:
      'Understanding how users interact with digital interfaces and designing for better user experiences.',
    category: 'Design',
    date: 'Dec 8, 2023',
    readTime: '6 min read',
  },
  {
    id: 3,
    title: 'Digital Transformation Strategy for SMEs',
    excerpt:
      'A comprehensive guide for small and medium enterprises looking to digitize their business processes.',
    category: 'Strategy',
    date: 'Dec 5, 2023',
    readTime: '10 min read',
  },
  {
    id: 4,
    title: 'Mobile-First Design Principles',
    excerpt:
      'Why mobile-first approach is crucial in modern web development and how to implement it effectively.',
    category: 'Design',
    date: 'Dec 3, 2023',
    readTime: '7 min read',
  },
  {
    id: 5,
    title: 'The Rise of AI in Web Development',
    excerpt:
      'Exploring how artificial intelligence is revolutionizing the way we build and maintain websites.',
    category: 'Technology',
    date: 'Dec 1, 2023',
    readTime: '9 min read',
  },
  {
    id: 6,
    title: 'E-commerce Trends to Watch in 2024',
    excerpt:
      'Key trends that will shape the e-commerce landscape in the coming year and how to prepare for them.',
    category: 'Industry News',
    date: 'Nov 28, 2023',
    readTime: '5 min read',
  },
  {
    id: 7,
    title: 'Effective API Design Patterns',
    excerpt:
      'Best practices for designing APIs that are easy to use, maintain, and scale for modern applications.',
    category: 'Technology',
    date: 'Nov 25, 2023',
    readTime: '12 min read',
  },
  {
    id: 8,
    title: 'Color Theory in Digital Design',
    excerpt:
      'Understanding how colors affect user perception and behavior in digital interfaces.',
    category: 'Design',
    date: 'Nov 22, 2023',
    readTime: '6 min read',
  },
]

const filteredArticles = computed(() => {
  if (selectedCategory.value === 'All') {
    return articles
  }
  return articles.filter(article => article.category === selectedCategory.value)
})

// SEO
useMeta({
  title: 'Ideas & Insights - Suitmedia',
  description:
    'Explore our latest thoughts on technology, design, and digital innovation. Stay ahead with expert insights.',
})
</script>
