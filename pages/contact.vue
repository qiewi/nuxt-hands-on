<template>
  <main class="bg-white">
    <!-- Hero Section -->
    <section class="px-6 pt-32 pb-20">
      <div class="container mx-auto text-center">
        <h1 class="mb-6 text-5xl font-bold text-gray-900 md:text-7xl">
          Get in Touch
        </h1>
        <p class="mx-auto mb-12 max-w-3xl text-xl text-gray-600">
          Ready to start your next project? We'd love to hear from you. Let's
          discuss how we can help bring your ideas to life.
        </p>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="px-6 pb-20">
      <div class="container mx-auto">
        <div class="grid gap-16 lg:grid-cols-2">
          <!-- Contact Form -->
          <div>
            <h2 class="mb-8 text-3xl font-bold text-gray-900">
              Send us a message
            </h2>

            <form class="space-y-6">
              <div class="grid gap-6 md:grid-cols-2">
                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-[#FF6600] focus:outline-none"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-[#FF6600] focus:outline-none"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label class="mb-2 block text-sm font-medium text-gray-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-[#FF6600] focus:outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label class="mb-2 block text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <input
                  type="text"
                  class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-[#FF6600] focus:outline-none"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label class="mb-2 block text-sm font-medium text-gray-700">
                  Project Type
                </label>
                <select
                  class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-[#FF6600] focus:outline-none"
                >
                  <option value="">Select project type</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile App</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="digital-strategy">Digital Strategy</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label class="mb-2 block text-sm font-medium text-gray-700">
                  Budget Range
                </label>
                <select
                  class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-[#FF6600] focus:outline-none"
                >
                  <option value="">Select budget range</option>
                  <option value="under-10k">Under $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="over-100k">Over $100,000</option>
                </select>
              </div>

              <div>
                <label class="mb-2 block text-sm font-medium text-gray-700">
                  Project Description *
                </label>
                <textarea
                  rows="6"
                  required
                  class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-[#FF6600] focus:outline-none"
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full rounded-lg bg-[#FF6600] px-8 py-4 font-semibold text-white transition-colors duration-300 hover:bg-[#e55a00]"
              >
                Send Message
              </button>
            </form>
          </div>

          <!-- Contact Information -->
          <div>
            <h2 class="mb-8 text-3xl font-bold text-gray-900">
              Contact Information
            </h2>

            <div class="space-y-8">
              <div
                v-for="contact in contactInfo"
                :key="contact.title"
                class="flex items-start"
              >
                <div
                  class="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#FF6600]"
                >
                  <span class="text-xl text-white">{{ contact.icon }}</span>
                </div>
                <div>
                  <h3 class="mb-2 text-lg font-semibold text-gray-900">
                    {{ contact.title }}
                  </h3>
                  <div class="text-gray-600">
                    <p v-for="line in contact.details" :key="line">
                      {{ line }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Office Locations -->
            <div class="mt-12">
              <h3 class="mb-6 text-2xl font-bold text-gray-900">Our Offices</h3>
              <div class="space-y-6">
                <div
                  v-for="office in offices"
                  :key="office.city"
                  class="rounded-lg border border-gray-200 p-6"
                >
                  <h4 class="mb-3 text-lg font-semibold text-gray-900">
                    {{ office.city }}
                  </h4>
                  <div class="space-y-1 text-gray-600">
                    <p v-for="line in office.address" :key="line">{{ line }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="bg-gray-50 px-6 py-20">
      <div class="container mx-auto">
        <div class="mb-16 text-center">
          <h2 class="mb-6 text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p class="mx-auto max-w-2xl text-xl text-gray-600">
            Find answers to common questions about our services and process.
          </p>
        </div>

        <div class="mx-auto max-w-3xl space-y-4">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="rounded-lg border border-gray-200"
          >
            <button
              @click="toggleFaq(index)"
              class="flex w-full items-center justify-between px-6 py-4 text-left transition-colors duration-200 hover:bg-gray-50"
            >
              <span class="font-semibold text-gray-900">{{
                faq.question
              }}</span>
              <span
                :class="[
                  'text-[#FF6600] transition-transform duration-200',
                  openFaqs.includes(index) ? 'rotate-45' : '',
                ]"
              >
                +
              </span>
            </button>
            <div
              v-show="openFaqs.includes(index)"
              class="px-6 pb-4 text-gray-600"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="px-6 py-20">
      <div class="container mx-auto text-center">
        <h2 class="mb-6 text-4xl font-bold text-gray-900">
          Ready to Get Started?
        </h2>
        <p class="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
          Don't wait any longer. Let's schedule a call to discuss your project
          and see how we can help you achieve your goals.
        </p>
        <div class="flex flex-col justify-center gap-4 sm:flex-row">
          <button
            class="rounded-lg bg-[#FF6600] px-8 py-4 font-semibold text-white transition-colors duration-300 hover:bg-[#e55a00]"
          >
            Schedule a Call
          </button>
          <button
            class="rounded-lg border-2 border-[#FF6600] px-8 py-4 font-semibold text-[#FF6600] transition-colors duration-300 hover:bg-[#FF6600] hover:text-white"
          >
            View Our Work
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
definePageMeta({
  name: 'contact',
})

const openFaqs = ref([])

const contactInfo = [
  {
    icon: '📧',
    title: 'Email',
    details: ['hello@suitmedia.com', 'We respond within 24 hours'],
  },
  {
    icon: '📱',
    title: 'Phone',
    details: ['+62 21 719 6877', 'Mon-Fri 9AM-6PM (GMT+7)'],
  },
  {
    icon: '💬',
    title: 'Live Chat',
    details: [
      'Available on our website',
      'Instant support during business hours',
    ],
  },
  {
    icon: '📍',
    title: 'Office',
    details: ['Jakarta, Indonesia', 'Schedule a visit anytime'],
  },
]

const offices = [
  {
    city: 'Jakarta (Headquarters)',
    address: [
      'Jl. Pejaten Barat II No. 3A',
      'Pasar Minggu, Jakarta Selatan',
      'Jakarta 12510, Indonesia',
    ],
  },
  {
    city: 'Bandung',
    address: [
      'Jl. Buah Batu No. 45',
      'Bandung, Jawa Barat',
      'Bandung 40264, Indonesia',
    ],
  },
]

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary depending on scope and complexity. Simple websites typically take 4-6 weeks, while complex web applications can take 3-6 months. We provide detailed timelines during our initial consultation.',
  },
  {
    question: 'What is your development process?',
    answer:
      'We follow a structured 4-phase process: Discovery (understanding requirements), Strategy (planning and design), Development (building and testing), and Launch (deployment and support). We maintain regular communication throughout each phase.',
  },
  {
    question: 'Do you provide ongoing maintenance and support?',
    answer:
      'Yes, we offer comprehensive maintenance packages including security updates, performance monitoring, content updates, and technical support. We can discuss the best maintenance plan for your specific needs.',
  },
  {
    question: 'Can you work with our existing team?',
    answer:
      'Absolutely! We often collaborate with in-house teams and can adapt our approach to complement your existing resources. We can work as an extension of your team or as an independent partner.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer:
      'We specialize in modern web technologies including Vue.js, React, Node.js, PHP, and mobile technologies like React Native and Flutter. We choose the best technology stack based on your project requirements.',
  },
]

const toggleFaq = index => {
  if (openFaqs.value.includes(index)) {
    openFaqs.value = openFaqs.value.filter(i => i !== index)
  } else {
    openFaqs.value.push(index)
  }
}

// SEO
useMeta({
  title: 'Contact Us - Suitmedia',
  description:
    "Get in touch with Suitmedia to discuss your next digital project. We're here to help bring your ideas to life.",
})
</script>
