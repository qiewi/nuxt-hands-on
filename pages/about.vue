<template>
  <main class="bg-white">
    <!-- Hero Section -->
    <HeroSection
      title="About Suitmedia"
      description="We are a digital innovation partner that transforms businesses through creative technology solutions and strategic thinking."
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
              developers and designers with a vision to bridge the gap between
              technology and human experience.
            </p>
            <p class="mb-6 text-lg text-gray-600">
              Today, we've grown into a leading digital agency that has helped
              hundreds of businesses across Indonesia and Southeast Asia achieve
              their digital transformation goals.
            </p>
            <p class="text-lg text-gray-600">
              Our journey is driven by curiosity, innovation, and an unwavering
              commitment to delivering exceptional results for our clients.
            </p>
          </div>
          <div
            class="flex aspect-square items-center justify-center rounded-lg bg-gray-100"
          >
            <span class="text-xl text-gray-500">Company Photo</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="bg-gray-50 px-6 py-20">
      <div class="container mx-auto">
        <div class="mb-16 text-center">
          <h2 class="mb-6 text-4xl font-bold text-gray-900">Our Values</h2>
          <p class="mx-auto max-w-2xl text-xl text-gray-600">
            These principles guide everything we do and shape how we work with
            our clients and each other.
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="value in values"
            :key="value.title"
            class="rounded-lg bg-white p-8 text-center transition-shadow duration-300 hover:shadow-lg"
          >
            <div
              class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#FF6600]"
            >
              <span class="text-2xl text-white">{{ value.icon }}</span>
            </div>
            <h3 class="mb-4 text-xl font-semibold text-gray-900">
              {{ value.title }}
            </h3>
            <p class="text-gray-600">{{ value.description }}</p>
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

const values = [
  {
    icon: '💡',
    title: 'Innovation',
    description:
      'We constantly explore new technologies and approaches to solve complex challenges.',
  },
  {
    icon: '🤝',
    title: 'Collaboration',
    description:
      'We work closely with our clients as partners to achieve shared success.',
  },
  {
    icon: '⚡',
    title: 'Excellence',
    description:
      'We strive for perfection in every project, no matter how big or small.',
  },
  {
    icon: '🌱',
    title: 'Growth',
    description:
      'We believe in continuous learning and helping our clients grow their business.',
  },
  {
    icon: '🎯',
    title: 'Focus',
    description:
      'We maintain laser focus on delivering results that matter to our clients.',
  },
  {
    icon: '💜',
    title: 'Passion',
    description: 'We love what we do and it shows in the quality of our work.',
  },
]

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    bio: 'Visionary leader with 15+ years in digital innovation',
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    bio: 'Full-stack architect passionate about scalable solutions',
  },
  {
    name: 'Jessica Williams',
    role: 'Creative Director',
    bio: 'Award-winning designer with eye for detail',
  },
  {
    name: 'David Rodriguez',
    role: 'Strategy Director',
    bio: 'Digital strategist helping brands transform',
  },
]

const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '50+', label: 'Team Members' },
  { value: '13+', label: 'Years Experience' },
  { value: '20+', label: 'Countries Served' },
]

// SEO
useMeta({
  title: 'About Us - Suitmedia',
  description:
    "Learn about Suitmedia's story, values, and the team behind innovative digital solutions.",
})
</script>
