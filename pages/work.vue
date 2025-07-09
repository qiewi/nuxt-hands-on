<template>
  <main class="bg-white">
    <!-- Hero Section -->
    <HeroSection
      title="Our Work"
      description="We create digital experiences that transform businesses and delight users. Explore our portfolio of innovative solutions."
      background-image="/assets/img/hero-image.jpg"
    />

    <!-- Filter Section -->
    <section class="px-6 pb-12">
      <div class="container mx-auto">
        <div class="mb-12 flex flex-wrap justify-center gap-4">
          <button
            v-for="filter in filters"
            :key="filter"
            :class="[
              'rounded-full border-2 px-6 py-3 transition-all duration-300',
              selectedFilter === filter
                ? 'border-[#FF6600] bg-[#FF6600] text-white'
                : 'border-gray-300 bg-white text-gray-700 hover:border-[#FF6600]',
            ]"
            @click="selectedFilter = filter"
          >
            {{ filter }}
          </button>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="px-6 pb-20">
      <div class="container mx-auto">
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            class="group cursor-pointer"
          >
            <div
              class="mb-6 aspect-video overflow-hidden rounded-lg bg-gray-100"
            >
              <div
                class="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 transition-transform duration-300 group-hover:scale-105"
              >
                <span class="text-lg text-gray-500">{{ project.title }}</span>
              </div>
            </div>
            <h3 class="mb-2 text-xl font-semibold text-gray-900">
              {{ project.title }}
            </h3>
            <p class="mb-3 text-gray-600">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gray-50 px-6 py-20">
      <div class="container mx-auto text-center">
        <h2 class="mb-6 text-4xl font-bold text-gray-900">
          Ready to start your project?
        </h2>
        <p class="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
          Let's work together to create something amazing that will elevate your
          business to the next level.
        </p>
        <NuxtLink
          to="/contact"
          class="inline-block rounded-lg bg-[#FF6600] px-8 py-4 font-semibold text-white transition-colors duration-300 hover:bg-[#e55a00]"
        >
          Start a Project
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup>
definePageMeta({
  name: 'work',
})

const selectedFilter = ref('All')

const filters = [
  'All',
  'Web Development',
  'Mobile Apps',
  'E-commerce',
  'Branding',
]

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Modern e-commerce solution with advanced features',
    category: 'E-commerce',
    technologies: ['Vue.js', 'Node.js', 'MongoDB'],
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    description: 'Secure and user-friendly mobile banking application',
    category: 'Mobile Apps',
    technologies: ['React Native', 'TypeScript', 'Firebase'],
  },
  {
    id: 3,
    title: 'Corporate Website',
    description: 'Professional corporate website with CMS',
    category: 'Web Development',
    technologies: ['Nuxt.js', 'Tailwind CSS', 'Strapi'],
  },
  {
    id: 4,
    title: 'Brand Identity Design',
    description: 'Complete brand identity and visual system',
    category: 'Branding',
    technologies: ['Adobe Creative Suite', 'Figma'],
  },
  {
    id: 5,
    title: 'SaaS Dashboard',
    description: 'Analytics dashboard for SaaS platform',
    category: 'Web Development',
    technologies: ['React', 'D3.js', 'PostgreSQL'],
  },
  {
    id: 6,
    title: 'Food Delivery App',
    description: 'Complete food delivery ecosystem',
    category: 'Mobile Apps',
    technologies: ['Flutter', 'Firebase', 'Google Maps API'],
  },
]

const filteredProjects = computed(() => {
  if (selectedFilter.value === 'All') {
    return projects
  }
  return projects.filter(project => project.category === selectedFilter.value)
})

// SEO
useMeta({
  title: 'Our Work - Suitmedia',
  description:
    'Explore our portfolio of innovative digital solutions and transformative projects.',
})
</script>
