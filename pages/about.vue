<template>
  <main class="bg-white">
    <!-- Hero Section -->
    <HeroSection
      title="About Us"
      description="Suitmedia is a leading Indonesian digital agency, driving proven results in technology and marketing for enterprise clients."
      background-image="/assets/img/hero-image.jpg"
    />

    <!-- Story Section -->
    <section class="px-6 py-20">
      <div class="container mx-auto">
        <div class="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 class="mb-6 text-4xl font-bold text-gray-900">Our Story</h2>
            <p class="mb-6 text-lg text-gray-600">
              Founded in 2010, Suitmedia began as a small team of passionate
              developers and designers in a creative digital lab. We launched
              "Bukalapak" an e-commerce marketplace platform.
            </p>
            <p class="mb-6 text-lg text-gray-600">
              Today, we've grown into a leading digital agency that has helped
              hundreds of businesses across Indonesia, powered by more than 200
              team members and branch over 5 different cities.
            </p>
            <p class="text-lg text-gray-600">
              Our journey is driven by a cycle that consists of Discover,
              Define, Deliver, and Determine.
            </p>
          </div>
          <nuxt-img
            src="/assets/img/suitmedia-team.webp"
            alt="Suitmedia Team - Our passionate team of developers and designers"
            class="aspect-square rounded-lg object-cover"
            width="600"
            height="600"
            quality="90"
          />
        </div>
      </div>
    </section>

    <!-- Culture Section -->
    <section class="bg-gray-50 px-6 py-20">
      <div class="container mx-auto">
        <div class="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 class="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
              Our Culture Shapes the Way We Live and Work
            </h2>
          </div>
          <div class="grid gap-8 md:grid-cols-2">
            <div
              v-for="culture in cultureItems"
              :key="culture.title"
              class="rounded-lg bg-white p-6 transition-shadow duration-300 hover:shadow-lg"
            >
              <div
                class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100"
              >
                <span class="text-xl text-gray-600">{{ culture.icon }}</span>
              </div>
              <h3 class="mb-3 text-lg font-semibold text-gray-900">
                {{ culture.title }}
              </h3>
              <p class="text-gray-600">{{ culture.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="px-6 py-20">
      <div class="container mx-auto">
        <div class="mb-16 text-center">
          <h2 class="mb-6 text-4xl font-bold text-gray-900">Meet Our Team</h2>
          <p class="mx-auto max-w-2xl text-xl text-gray-600">
            Our diverse team of experts brings together creativity, technical
            expertise, and strategic thinking.
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="member in team"
            :key="member.name"
            class="group text-center"
          >
            <div
              class="mb-6 aspect-square overflow-hidden rounded-lg bg-gray-100"
            >
              <div
                class="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 transition-transform duration-300 group-hover:scale-105"
              >
                <span class="text-lg text-gray-500">{{ member.name }}</span>
              </div>
            </div>
            <h3 class="mb-2 text-lg font-semibold text-gray-900">
              {{ member.name }}
            </h3>
            <p class="mb-2 font-medium text-[#FF6600]">{{ member.role }}</p>
            <p class="text-sm text-gray-600">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="bg-gray-50 px-6 py-20">
      <div class="container mx-auto">
        <div class="mb-16 text-center">
          <h2 class="mb-6 text-4xl font-bold text-gray-900">By the Numbers</h2>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="mb-2 text-4xl font-bold text-[#FF6600]">
              {{ stat.value }}
            </div>
            <div class="text-gray-600">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="px-6 py-20">
      <div class="container mx-auto text-center">
        <h2 class="mb-6 text-4xl font-bold text-gray-900">
          Want to work with us?
        </h2>
        <p class="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
          We're always looking for talented individuals and exciting projects.
          Let's create something amazing together.
        </p>
        <div class="flex flex-col justify-center gap-4 sm:flex-row">
          <NuxtLink
            to="/careers"
            class="inline-block rounded-lg bg-[#FF6600] px-8 py-4 font-semibold text-white transition-colors duration-300 hover:bg-[#e55a00]"
          >
            Join Our Team
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="inline-block rounded-lg border-2 border-[#FF6600] px-8 py-4 font-semibold text-[#FF6600] transition-colors duration-300 hover:bg-[#FF6600] hover:text-white"
          >
            Start a Project
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
definePageMeta({
  name: 'about',
})

const cultureItems = [
  {
    icon: '💻',
    title: 'Flexibility At Work',
    description:
      'You have the freedom on how and when you work with a goal to increase productivity in the workplace.',
  },
  {
    icon: '📚',
    title: 'Learning While Working',
    description:
      "Here, every day is a chance to master advance skills. Thus, you'll become more and more awesome.",
  },
  {
    icon: '🎉',
    title: 'Spirit of Fun',
    description:
      'We all grow together in a fun, creative, and dynamic workplace. The team is guaranteed to always have a good time.',
  },
  {
    icon: '⚖️',
    title: 'Work-Life Balance',
    description:
      'We know how to use our time in a smart and efficient way. A work-life balance is our priority at Suitmedia.',
  },
]

const team = [
  {
    name: 'Almika Gusnandri Indra',
    role: 'Chief Executive',
    bio: 'Visionary leader with 15+ years in digital innovation',
  },
  {
    name: 'Anggriawan Sugianto',
    role: 'CTO',
    bio: 'Full-stack architect passionate about scalable solutions',
  },
  {
    name: 'Priyadi Wicaksono',
    role: 'Creative Director',
    bio: 'Award-winning designer with eye for detail',
  },
  {
    name: 'I Ketut Hartawan',
    role: 'Account Director',
    bio: 'Digital strategist helping brands transform',
  },
]

const stats = [
  { value: '900+', label: 'Projects Delivered' },
  { value: '200+', label: 'Digital Experts' },
  { value: '16+', label: 'Years Experience' },
  { value: '150+', label: 'Satisfied Clients' },
]

// SEO
useMeta({
  title: 'About Us - Suitmedia',
  description:
    "Learn about Suitmedia's story, values, and the team behind innovative digital solutions.",
})
</script>
