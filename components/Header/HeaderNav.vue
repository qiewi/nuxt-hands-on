<template>
  <div class="h-full">
    <nav class="flex items-center" role="navigation">
      <button
        id="buttonShowMenu"
        type="button"
        class="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none md:hidden"
        aria-controls="navbar-default"
        aria-expanded="false"
        @click="showMenu = !showMenu"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="h-6 w-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <div />
      <div
        id="navbar-default"
        class="absolute top-full right-0 z-10 w-full md:relative md:block md:w-auto"
        :class="showMenu ? 'block' : 'hidden'"
      >
        <ul
          class="mt-0 flex flex-col border border-gray-100 p-4 font-medium md:flex-row md:space-x-8 md:border-0 md:p-0"
        >
          <li v-for="(menu, index) in menus.data[locale]" :key="index">
            <NuxtLink :to="localePath(menu.url)">
              {{ menu.title }}
            </NuxtLink>
          </li>
          <li>
            <button @click="theme.changeTheme">Dark Mode</button>
          </li>
          <HeaderSwitchLocale />
          <li>
            <NuxtLink v-if="loggedIn" to="/" @click.prevent="signOut"
              >Logout</NuxtLink
            >
            <NuxtLink v-else to="/login"> Login </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/user/profile">User</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

import { useThemeStore } from '~/store/global'

const theme = useThemeStore()

const showMenu = ref(false)

const el = ref(null)

const menus = await useFetchMenus()

onMounted(() => {
  el.value = document.getElementById('navbar-default')

  window.addEventListener('click', onClickOutside)
})

const onClickOutside = e => {
  if (
    e.target !== el.value &&
    e.target !== document.getElementById('buttonShowMenu')
  ) {
    showMenu.value = false
  }
}
</script>
