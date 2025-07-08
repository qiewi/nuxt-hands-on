<script setup>
// disini pakai useFetch (tanpa proxy), karena kita fetch dari server FE di /server/api/menus.get.js
// const { data: menus } = await useFetch('/api/app/menus', {
//   query: {
//     sort: 'Order',
//     'populate[Page][populate]': '*',
//     'populate[Child][populate]': '*',
//   },
//   key: 'menus',
//   transform: res => {
//     const newItems = prependUrls(res.data, '')
//     return {
//       ...res,
//       data: newItems,
//     }
//   },
// })
// console.log({ menus })

const { data: mainMenus } = useNuxtData('main-menus')

// function prependUrls(menuItems, basePath = '') {
//   return menuItems.map(item => {
//     // Build the full path
//     const fullPath = `${basePath}${item.Url}`

//     const newItem = {
//       ...item,
//       Url: fullPath,
//     }

//     // Recurse into children if they exist
//     if (item.Child) {
//       newItem.Child = prependUrls(item.Child, fullPath)
//     }

//     return newItem
//   })
// }

const writeUrl = nav => (!nav.hasLanding ? '#' : nav.Url)
const renderSubNav = ref(false)
const showNav = ref(false)
const showSubNav = ref([])

const toggleNav = () => {
  showNav.value = !showNav.value
}

const style = {
  navLink: 'flex-grow px-2 py-1 hover:bg-slate-200',
}

onMounted(() => {
  // Add null check to prevent error during SSR
  if (mainMenus.value?.data) {
    mainMenus.value.data.forEach(() => {
      showSubNav.value.push(false)
    })
  }

  window.onresize = () => {
    showNav.value = false
  }

  handleClickOutside('.main-nav', showNav)

  const enableSubNav = () => {
    renderSubNav.value = true
  }

  const events = ['scroll', 'click', 'mousemove', 'touchmove']

  events.forEach(event => {
    document.addEventListener(event, enableSubNav)
  })
})
</script>

<template>
  <nav class="main-nav" :class="{ 'is-active': showNav }">
    <button
      class="nav-trigger flex h-[48px] w-[48px] items-center justify-center lg:hidden"
      type="button"
      aria-label="Navigation"
      @click.prevent="toggleNav"
    >
      <NuxtIcon :name="!showNav ? 'bars' : 'close'" />
    </button>
    <span v-if="!mainMenus?.data?.length">Kosong</span>
    <ul
      v-else
      class="fixed top-[64px] right-0 z-[3] mb-0 block w-80 bg-white transition-transform lg:static lg:flex lg:h-auto lg:w-auto lg:translate-x-0"
      :class="showNav ? 'translate-x-0' : 'translate-x-full'"
    >
      <li class="main-nav__item group relative">
        <span class="flex">
          <NuxtLink to="/scan-ar" no-prefetch :class="style.navLink">
            Scan AR
          </NuxtLink>
        </span>
      </li>
      <li
        v-for="(nav, i) in mainMenus?.data || []"
        :key="i"
        class="main-nav__item group relative"
      >
        <span v-if="!nav.Child?.length" class="flex">
          <NuxtLink :to="writeUrl(nav)" :class="style.navLink">
            {{ nav.Title }}
          </NuxtLink>
        </span>
        <template v-else>
          <span class="item-parent flex items-center">
            <NuxtLink :to="writeUrl(nav)" :class="style.navLink">
              {{ nav.Title }}
            </NuxtLink>
            <button
              class="nav-arrow"
              type="button"
              @click.prevent="showSubNav[i] = !showSubNav[i]"
            >
              <UIcon name="i-lucide-chevron-right" class="size-3" />
            </button>
          </span>
          <LazyHeaderSubNav
            v-if="nav.Child?.length && renderSubNav"
            :parent-slug="nav.Url"
            :sub-nav="nav.Child"
            :class="{ 'is-active': showSubNav[i] }"
            class="hidden group-hover:block"
          />
        </template>
      </li>
    </ul>
  </nav>
</template>
