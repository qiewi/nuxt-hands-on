<template>
  <main class="app-main">
    <div class="prose container w-full overflow-auto text-xs">
      <pre><code>{{ pageData }}</code></pre>
      <hr />
      <pre><code>{{ route.params.slugs }}</code></pre>
    </div>
    <span v-if="isLoading">LOADING</span>
    <div v-else>
      <!-- Dynamic component mapping -->
      <LazyPagesDynamic v-if="pageData !== null" :slugs="slug" />
      <LazyPagesNewsDetail v-if="pageData === null" />
    </div>
  </main>
</template>

<script setup>
// definePageMeta({ auth: false })
const route = useRoute()
const pageData = ref(null)
const isLoading = ref(true)
// const fullPath = '/' + (route.params.slugs?.join('/') ?? '')
const slug = route.params.slugs[route.params.slugs.length - 1]

// Recursively find the page by URL
function findPageByUrl(pages) {
  // console.log({ MENUS: menus, url })
  for (const page of pages) {
    // console.log({ menuUrl: menu.Url, url })
    if (page.Slug === slug) return page
    // if (menu.Child?.length) {
    //   const found = findPageByUrl(menu.Child, url)
    //   if (found) return found
    // }
  }
  return null
}

// onMounted(async () => {
// const { data: menus } = useNuxtData('main-menus')
const { data: pages } = useNuxtData('pages')
// cachedMenus.value = menus
// Simulate API fetch based on URL
// const menus = await fetchMenus()
const page = await findPageByUrl(pages.value.data)

if (page) {
  pageData.value = page
}

isLoading.value = false
// console.log({ fullPath, slug })
// console.log({ pageData: pageData.value, pages })
// })
</script>
