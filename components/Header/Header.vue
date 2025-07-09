<template>
  <header
    :class="[
      'fixed top-0 left-0 z-50 w-full transition-all duration-500',
      mobileMenuOpen
        ? 'bg-[#FF6600]'
        : isAtTop
          ? 'bg-transparent'
          : 'bg-[#FF6600]',
      'md:' + (show ? 'translate-y-0' : '-translate-y-full'),
    ]"
    :style="{ willChange: 'transform' }"
  >
    <nav class="container mx-auto flex items-center justify-between px-6 py-4">
      <!-- Logo -->
      <NuxtLink to="/">
        <nuxt-img
          src="/assets/img/suitmedia.png"
          alt="Suitmedia Logo"
          width="80"
          height="auto"
          quality="100"
        />
      </NuxtLink>

      <!-- Desktop Menu -->
      <ul class="hidden gap-8 md:flex">
        <li
          v-for="item in menuItems"
          :key="item.path"
          :class="[
            'font-medium text-white underline-offset-8 transition-all duration-200 hover:underline',
            route.path === item.path
              ? 'text-white underline decoration-4 underline-offset-8'
              : '',
          ]"
        >
          <NuxtLink :to="item.path">{{ item.label }}</NuxtLink>
        </li>
      </ul>

      <!-- Mobile Hamburger Button -->
      <button
        @click="toggleMobileMenu"
        class="flex h-8 w-8 flex-col items-center justify-center space-y-1.5 md:hidden"
        aria-label="Toggle mobile menu"
      >
        <span
          :class="[
            'block h-0.5 w-6 bg-white transition-all duration-300',
            mobileMenuOpen ? 'translate-y-2 rotate-45' : '',
          ]"
        />
        <span
          :class="[
            'block h-0.5 w-6 bg-white transition-all duration-300',
            mobileMenuOpen ? 'opacity-0' : '',
          ]"
        />
        <span
          :class="[
            'block h-0.5 w-6 bg-white transition-all duration-300',
            mobileMenuOpen ? '-translate-y-2 -rotate-45' : '',
          ]"
        />
      </button>
    </nav>

    <!-- Mobile Menu -->
    <div
      :class="[
        'absolute top-full left-0 w-full overflow-hidden bg-white transition-all duration-300 md:hidden',
        mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
      ]"
    >
      <ul class="flex flex-col py-4">
        <li
          v-for="item in menuItems"
          :key="item.path"
          :class="[
            'px-6 py-3 font-medium text-[#FF6600] transition-all duration-200 hover:bg-gray-100',
            route.path === item.path
              ? 'border-l-4 border-[#FF6600] bg-gray-50'
              : '',
          ]"
        >
          <NuxtLink :to="item.path" @click="closeMobileMenu">{{
            item.label
          }}</NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
const route = useRoute()
const show = ref(true)
const isAtTop = ref(true)
const lastScroll = ref(0)
const mobileMenuOpen = ref(false)

const menuItems = [
  { label: 'About', path: '/about' },
  { label: 'Work', path: '/work' },
  { label: 'Services', path: '/services' },
  { label: 'Ideas', path: '/ideas' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
]

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const handleScroll = () => {
  const currentScroll = window.scrollY
  isAtTop.value = currentScroll <= 0

  // Close mobile menu on scroll
  if (mobileMenuOpen.value) {
    closeMobileMenu()
  }

  if (currentScroll <= 0) {
    show.value = true
    lastScroll.value = 0
    return
  }

  // Only hide/show header on desktop (md and up)
  // On mobile, header always stays visible
  if (window.innerWidth >= 768) {
    if (currentScroll > lastScroll.value) {
      show.value = false // Hide on scroll down
    } else {
      show.value = true // Show on scroll up
    }
  } else {
    show.value = true // Always show on mobile
  }

  lastScroll.value = currentScroll
}

// Close mobile menu when route changes
watch(
  () => route.path,
  () => {
    closeMobileMenu()
  },
)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
