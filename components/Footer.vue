<template>
  <footer class="site-footer border-t border-slate-200">
    <div class="footer-top bg-[#FF6600] py-4">
      <div class="container">
        <div
          class="footer-content gap-4 md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-8"
        >
          <div class="footer-info mb-4 md:col-span-2">
            <NuxtLink to="/" class="mb-2 block font-bold">
              <!-- <img
                :src="footerData?.data?.siteLogo?.formats?.thumbnail.url"
                :alt="footerData?.data?.siteName"
                width="32"
              /> -->
              {{ footerData?.data?.siteName }}
            </NuxtLink>
            <p>{{ footerData?.data?.siteDescription }}</p>
          </div>
          <!-- Footer Info -->
          <nav class="footer-nav mb-4">
            <h6 class="mb-2 font-semibold">Information</h6>
            <ul>
              <li v-for="(link, i) in footerMenus?.data || []" :key="i">
                <NuxtLink :to="link.Url">{{ link.Title }}</NuxtLink>
              </li>
            </ul>
          </nav>
          <!-- Footer Links -->
          <nav class="footer-links mb-4">
            <h6 class="mb-2 font-semibold">Social Media</h6>
            <ul class="flex">
              <li
                v-for="(item, i) in footerData?.data?.SocialMedia || []"
                :key="i + item.id"
              >
                <a
                  :href="'/' + item.Url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:text-primary-600 flex h-8 w-8 justify-center p-1 text-2xl text-slate-500"
                >
                  <UIcon
                    :name="`i-lucide-${item.Name.toLowerCase()}`"
                    width="24"
                    height="24"
                    :title="item.Name"
                  />
                </a>
              </li>
            </ul>
          </nav>
          <!-- Footer Links -->
        </div>
      </div>
    </div>
    <!-- <pre><code>{{ footerData }}</code></pre> -->
    <div
      class="footer-bottom bg-primary-600 p-2 text-center text-xs text-white"
    >
      <p>&copy; {{ footerData?.data?.Copyrights }}</p>
    </div>
  </footer>
</template>

<script setup>
const { data: footerData } = useNuxtData('global')
const { data: footerMenus } = useNuxtData('footer-menus')

if (footerData.value?.error !== undefined) {
  const err = footerData.value.error

  console.error({ err })
}
</script>
