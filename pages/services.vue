<template>
  <main class="bg-white">
    <!-- Hero Section -->
    <section class="px-6 pt-32 pb-20">
      <div class="container mx-auto text-center">
        <h1 class="mb-6 text-5xl font-bold text-gray-900 md:text-7xl">
          Our Services
        </h1>
        <p class="mx-auto mb-12 max-w-3xl text-xl text-gray-600">
          From concept to launch, we provide comprehensive digital solutions
          that drive growth and create meaningful user experiences.
        </p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="px-6 pb-20">
      <div class="container mx-auto">
        <div class="grid gap-8 lg:grid-cols-2">
          <div
            v-for="service in services"
            :key="service.title"
            class="group rounded-lg border border-gray-200 p-8 transition-all duration-300 hover:shadow-lg"
          >
            <div
              class="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-[#FF6600] transition-transform duration-300 group-hover:scale-110"
            >
              <span class="text-2xl text-white">{{ service.icon }}</span>
            </div>
            <h3 class="mb-4 text-2xl font-bold text-gray-900">
              {{ service.title }}
            </h3>
            <p class="mb-6 text-gray-600">{{ service.description }}</p>

            <h4 class="mb-3 font-semibold text-gray-900">What's Included:</h4>
            <ul class="mb-6 space-y-2">
              <li
                v-for="feature in service.features"
                :key="feature"
                class="flex items-center text-gray-600"
              >
                <span class="mr-3 h-2 w-2 rounded-full bg-[#FF6600]"></span>
                {{ feature }}
              </li>
            </ul>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in service.technologies"
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

    <!-- Process Section -->
    <section class="bg-gray-50 px-6 py-20">
      <div class="container mx-auto">
        <div class="mb-16 text-center">
          <h2 class="mb-6 text-4xl font-bold text-gray-900">Our Process</h2>
          <p class="mx-auto max-w-2xl text-xl text-gray-600">
            We follow a proven methodology to ensure every project delivers
            exceptional results.
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(step, index) in process"
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
                v-if="index < process.length - 1"
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

    <!-- Industries Section -->
    <section class="px-6 py-20">
      <div class="container mx-auto">
        <div class="mb-16 text-center">
          <h2 class="mb-6 text-4xl font-bold text-gray-900">
            Industries We Serve
          </h2>
          <p class="mx-auto max-w-2xl text-xl text-gray-600">
            We have experience working across various industries, bringing
            specialized knowledge to each project.
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="industry in industries"
            :key="industry"
            class="group rounded-lg bg-gray-50 p-6 text-center transition-colors duration-300 hover:bg-[#FF6600] hover:text-white"
          >
            <span class="text-lg font-medium">{{ industry }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-[#FF6600] px-6 py-20">
      <div class="container mx-auto text-center">
        <h2 class="mb-6 text-4xl font-bold text-white">
          Ready to Transform Your Business?
        </h2>
        <p class="mx-auto mb-8 max-w-2xl text-xl text-white/90">
          Let's discuss your project and see how we can help you achieve your
          digital goals.
        </p>
        <NuxtLink
          to="/contact"
          class="inline-block rounded-lg bg-white px-8 py-4 font-semibold text-[#FF6600] transition-colors duration-300 hover:bg-gray-100"
        >
          Get Started Today
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup>
definePageMeta({
  name: 'services',
})

const services = [
  {
    icon: '💻',
    title: 'Web Development',
    description:
      'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
    features: [
      'Responsive Design',
      'Performance Optimization',
      'SEO Implementation',
      'Content Management Systems',
      'E-commerce Solutions',
    ],
    technologies: ['Vue.js', 'React', 'Node.js', 'PHP', 'WordPress'],
  },
  {
    icon: '📱',
    title: 'Mobile Development',
    description:
      'Native and cross-platform mobile applications that deliver seamless experiences across all devices.',
    features: [
      'iOS & Android Apps',
      'Cross-platform Development',
      'UI/UX Design',
      'Backend Integration',
      'App Store Optimization',
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description:
      'User-centered design solutions that create intuitive and engaging digital experiences.',
    features: [
      'User Research',
      'Wireframing & Prototyping',
      'Visual Design',
      'Usability Testing',
      'Design Systems',
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'InVision'],
  },
  {
    icon: '🚀',
    title: 'Digital Strategy',
    description:
      'Strategic consultation to align your digital initiatives with business objectives and market opportunities.',
    features: [
      'Digital Transformation',
      'Technology Consulting',
      'Market Analysis',
      'Competitive Research',
      'Growth Strategy',
    ],
    technologies: ['Analytics', 'SEO Tools', 'CRM', 'Marketing Automation'],
  },
  {
    icon: '☁️',
    title: 'Cloud Solutions',
    description:
      'Scalable cloud infrastructure and services to support your growing business needs.',
    features: [
      'Cloud Migration',
      'DevOps Implementation',
      'Scalable Architecture',
      'Security Implementation',
      'Performance Monitoring',
    ],
    technologies: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes'],
  },
  {
    icon: '📊',
    title: 'Digital Marketing',
    description:
      'Data-driven marketing strategies to increase your online presence and drive customer engagement.',
    features: [
      'SEO/SEM Optimization',
      'Social Media Marketing',
      'Content Strategy',
      'Email Marketing',
      'Analytics & Reporting',
    ],
    technologies: ['Google Ads', 'Facebook Ads', 'HubSpot', 'Mailchimp', 'GA4'],
  },
]

const process = [
  {
    title: 'Discovery',
    description:
      'We understand your business goals, target audience, and project requirements.',
  },
  {
    title: 'Strategy',
    description:
      'We develop a comprehensive plan and roadmap for your project success.',
  },
  {
    title: 'Design & Build',
    description:
      'Our team creates and develops your solution with attention to detail.',
  },
  {
    title: 'Launch & Support',
    description:
      'We deploy your project and provide ongoing maintenance and support.',
  },
]

const industries = [
  'Financial Services',
  'Healthcare',
  'E-commerce',
  'Education',
  'Real Estate',
  'Manufacturing',
  'Hospitality',
  'Non-profit',
  'Government',
]

// SEO
useMeta({
  title: 'Services - Suitmedia',
  description:
    'Comprehensive digital solutions including web development, mobile apps, UI/UX design, and digital strategy.',
})
</script>
