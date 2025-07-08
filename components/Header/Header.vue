<template>
  <header
    :class="[
      'fixed top-0 left-0 z-50 w-full transition-all duration-500',
      show ? 'translate-y-0' : '-translate-y-full',
      isAtTop ? 'bg-[#FF6600]' : 'bg-[#FF6600]/80',
      'shadow-sm backdrop-blur-md',
    ]"
    :style="{ willChange: 'transform' }"
  >
    <nav class="container mx-auto flex items-center justify-between px-6 py-4">
      <NuxtLink to="/">
        <nuxt-img
          src="/assets/img/suitmedia.png"
          alt="Suitmedia Logo"
          width="80"
          height="auto"
          quality="100"
        />
      </NuxtLink>

      <ul class="flex gap-8">
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
    </nav>
  </header>
</template>

<script setup>
const route = useRoute()
const show = ref(true)
const isAtTop = ref(true)
const lastScroll = ref(0)

const menuItems = [
  { label: 'Work', path: '/work' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Ideas', path: '/ideas' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
]

const handleScroll = () => {
  const currentScroll = window.scrollY
  isAtTop.value = currentScroll <= 0

  if (currentScroll <= 0) {
    show.value = true
    lastScroll.value = 0
    return
  }

  if (currentScroll > lastScroll.value) {
    show.value = false // Hide on scroll down
  } else {
    show.value = true // Show on scroll up
  }

  lastScroll.value = currentScroll
}

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
