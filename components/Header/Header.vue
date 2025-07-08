<template>
  <header
    class="site-header fixed top-0 z-[3] flex h-[64px] w-full items-center justify-between shadow-md"
    :class="theme.darkTheme ? 'bg-gray-800 text-white' : 'bg-white'"
  >
    <div class="container mx-auto flex flex-wrap items-center justify-between">
      <NuxtLink class="site-logo" to="/">
        <nuxt-img
          src="/assets/img/site-logo.png"
          alt="Suitmedia"
          width="48"
          height="48"
          quality="100"
        />
      </NuxtLink>
      <!-- end site-logo -->
      <HeaderNavs />
    </div>
  </header>
</template>

<script setup>
import { useThemeStore } from '~/store/global'

const theme = useThemeStore()
</script>

<style scoped>
/* .site-header {
  @apply fixed top-0 z-[3] flex h-[64px] w-full items-center justify-between space-x-1 border-b shadow-md;
} */
</style>
