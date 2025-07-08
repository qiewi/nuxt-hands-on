<template>
  <main class="bg-white">
    <!-- Hero Section -->
    <section class="px-6 pt-32 pb-20">
      <div class="container mx-auto text-center">
        <h1 class="mb-6 text-5xl font-bold text-gray-900 md:text-7xl">
          Join Our Team
        </h1>
        <p class="mx-auto mb-12 max-w-3xl text-xl text-gray-600">
          Build your career with a team of passionate innovators. We're always
          looking for talented individuals who share our vision for creating
          exceptional digital experiences.
        </p>
      </div>
    </section>

    <!-- Culture Section -->
    <section class="bg-gray-50 px-6 py-20">
      <div class="container mx-auto">
        <div class="mb-16 text-center">
          <h2 class="mb-6 text-4xl font-bold text-gray-900">
            Why Work With Us?
          </h2>
          <p class="mx-auto max-w-2xl text-xl text-gray-600">
            We believe in creating an environment where creativity flourishes
            and careers grow.
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="benefit in benefits"
            :key="benefit.title"
            class="rounded-lg bg-white p-8 text-center transition-shadow duration-300 hover:shadow-lg"
          >
            <div
              class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#FF6600]"
            >
              <span class="text-2xl text-white">{{ benefit.icon }}</span>
            </div>
            <h3 class="mb-4 text-xl font-semibold text-gray-900">
              {{ benefit.title }}
            </h3>
            <p class="text-gray-600">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Open Positions -->
    <section class="px-6 py-20">
      <div class="container mx-auto">
        <div class="mb-16 text-center">
          <h2 class="mb-6 text-4xl font-bold text-gray-900">Open Positions</h2>
          <p class="mx-auto max-w-2xl text-xl text-gray-600">
            Explore current opportunities to join our growing team.
          </p>
        </div>

        <div class="mx-auto max-w-4xl space-y-6">
          <div
            v-for="job in jobs"
            :key="job.id"
            class="rounded-lg border border-gray-200 p-6 transition-shadow duration-300 hover:shadow-lg"
          >
            <div
              class="flex flex-col lg:flex-row lg:items-center lg:justify-between"
            >
              <div class="flex-1">
                <div class="mb-3 flex flex-wrap items-center gap-4">
                  <h3 class="text-xl font-semibold text-gray-900">
                    {{ job.title }}
                  </h3>
                  <span
                    class="inline-block rounded-full bg-[#FF6600] px-3 py-1 text-sm text-white"
                  >
                    {{ job.type }}
                  </span>
                </div>

                <p class="mb-4 text-gray-600">{{ job.description }}</p>

                <div class="flex flex-wrap gap-4 text-sm text-gray-500">
                  <span class="flex items-center">
                    <span class="mr-2 h-2 w-2 rounded-full bg-gray-400"></span>
                    {{ job.location }}
                  </span>
                  <span class="flex items-center">
                    <span class="mr-2 h-2 w-2 rounded-full bg-gray-400"></span>
                    {{ job.experience }}
                  </span>
                  <span class="flex items-center">
                    <span class="mr-2 h-2 w-2 rounded-full bg-gray-400"></span>
                    {{ job.department }}
                  </span>
                </div>
              </div>

              <div class="mt-4 lg:mt-0 lg:ml-6">
                <button
                  class="rounded-lg bg-[#FF6600] px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-[#e55a00]"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- No positions message -->
        <div v-if="jobs.length === 0" class="py-12 text-center">
          <p class="mb-6 text-lg text-gray-600">
            We don't have any open positions at the moment, but we're always
            interested in meeting talented people.
          </p>
          <button
            class="rounded-lg bg-[#FF6600] px-8 py-4 font-semibold text-white transition-colors duration-300 hover:bg-[#e55a00]"
          >
            Send Your Resume
          </button>
        </div>
      </div>
    </section>

    <!-- Team Values -->
    <section class="bg-gray-50 px-6 py-20">
      <div class="container mx-auto">
        <div class="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 class="mb-6 text-4xl font-bold text-gray-900">
              Our Team Values
            </h2>
            <div class="space-y-6">
              <div
                v-for="value in teamValues"
                :key="value.title"
                class="flex items-start"
              >
                <div
                  class="mt-1 mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#FF6600]"
                >
                  <span class="text-sm text-white">{{ value.icon }}</span>
                </div>
                <div>
                  <h3 class="mb-2 text-lg font-semibold text-gray-900">
                    {{ value.title }}
                  </h3>
                  <p class="text-gray-600">{{ value.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex aspect-square items-center justify-center rounded-lg bg-gray-200"
          >
            <span class="text-xl text-gray-500">Team Photo</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Application Process -->
    <section class="px-6 py-20">
      <div class="container mx-auto">
        <div class="mb-16 text-center">
          <h2 class="mb-6 text-4xl font-bold text-gray-900">
            Application Process
          </h2>
          <p class="mx-auto max-w-2xl text-xl text-gray-600">
            Our hiring process is designed to be fair, efficient, and give you
            the best opportunity to showcase your skills.
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(step, index) in applicationProcess"
            :key="step.title"
            class="text-center"
          >
            <div class="relative mb-6">
              <div
                class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FF6600]"
              >
                <span class="text-xl font-bold text-white">{{
                  index + 1
                }}</span>
              </div>
              <div
                v-if="index < applicationProcess.length - 1"
                class="absolute top-8 left-1/2 hidden h-0.5 w-full bg-gray-300 lg:block"
                style="transform: translateX(50%)"
              ></div>
            </div>
            <h3 class="mb-3 text-xl font-semibold text-gray-900">
              {{ step.title }}
            </h3>
            <p class="text-gray-600">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-[#FF6600] px-6 py-20">
      <div class="container mx-auto text-center">
        <h2 class="mb-6 text-4xl font-bold text-white">
          Ready to Start Your Journey?
        </h2>
        <p class="mx-auto mb-8 max-w-2xl text-xl text-white/90">
          Join a team that values innovation, creativity, and personal growth.
          Let's build something amazing together.
        </p>
        <div class="flex flex-col justify-center gap-4 sm:flex-row">
          <button
            class="rounded-lg bg-white px-8 py-4 font-semibold text-[#FF6600] transition-colors duration-300 hover:bg-gray-100"
          >
            View All Positions
          </button>
          <NuxtLink
            to="/contact"
            class="rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-[#FF6600]"
          >
            Get in Touch
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
definePageMeta({
  name: 'careers',
})

const benefits = [
  {
    icon: '🚀',
    title: 'Growth Opportunities',
    description:
      'Continuous learning and career advancement in a fast-growing company.',
  },
  {
    icon: '⚖️',
    title: 'Work-Life Balance',
    description:
      'Flexible working arrangements and generous time-off policies.',
  },
  {
    icon: '💡',
    title: 'Innovation Culture',
    description: 'Work on cutting-edge projects with the latest technologies.',
  },
  {
    icon: '🤝',
    title: 'Collaborative Team',
    description:
      'Join a supportive team that values collaboration and knowledge sharing.',
  },
  {
    icon: '🎯',
    title: 'Meaningful Work',
    description:
      'Create solutions that make a real impact on businesses and users.',
  },
  {
    icon: '🌟',
    title: 'Competitive Benefits',
    description:
      'Comprehensive health insurance, retirement plans, and performance bonuses.',
  },
]

const jobs = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    description:
      'Lead the development of user-facing features using modern JavaScript frameworks.',
    type: 'Full-time',
    location: 'Jakarta, Indonesia',
    experience: '5+ years',
    department: 'Engineering',
  },
  {
    id: 2,
    title: 'UX/UI Designer',
    description:
      'Design intuitive and beautiful user experiences for web and mobile applications.',
    type: 'Full-time',
    location: 'Jakarta, Indonesia',
    experience: '3+ years',
    department: 'Design',
  },
  {
    id: 3,
    title: 'Digital Marketing Specialist',
    description:
      'Develop and execute digital marketing strategies to drive client success.',
    type: 'Full-time',
    location: 'Jakarta, Indonesia',
    experience: '2+ years',
    department: 'Marketing',
  },
  {
    id: 4,
    title: 'Backend Developer',
    description:
      'Build scalable server-side applications and APIs using modern technologies.',
    type: 'Full-time',
    location: 'Remote',
    experience: '3+ years',
    department: 'Engineering',
  },
]

const teamValues = [
  {
    icon: '🎯',
    title: 'Excellence',
    description:
      'We strive for the highest quality in everything we deliver, never settling for good enough.',
  },
  {
    icon: '🤝',
    title: 'Collaboration',
    description:
      'We believe the best solutions come from diverse perspectives working together.',
  },
  {
    icon: '🌱',
    title: 'Growth',
    description:
      "We support each other's professional and personal development journey.",
  },
  {
    icon: '💡',
    title: 'Innovation',
    description:
      'We embrace new ideas and technologies to stay ahead of the curve.',
  },
]

const applicationProcess = [
  {
    title: 'Apply',
    description: 'Submit your application with resume and portfolio.',
  },
  {
    title: 'Screen',
    description: 'Initial review and phone/video screening call.',
  },
  {
    title: 'Interview',
    description: 'Technical and cultural fit interviews with the team.',
  },
  {
    title: 'Decision',
    description: 'Final decision and offer with onboarding details.',
  },
]

// SEO
useMeta({
  title: 'Careers - Suitmedia',
  description:
    'Join our team of passionate innovators. Explore career opportunities at Suitmedia and build your future with us.',
})
</script>
