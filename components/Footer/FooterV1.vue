<template>
  <div class="container">
    <div class="py-12 flex flex-col gap-12 xl:flex-row xl:justify-between">
      <div class="xl:max-w-[400px]">
         <div>
           <div class="flex items-center gap-2">
             <nuxt-img src="/icon.png" width="36" height="36"></nuxt-img>
             <h2 class="text-xl font-bold text-primary">{{ settings.companyName }}</h2>
           </div>

            <p class="mt-4 text-gray-500 text-balance">{{ settings.companyDescription }}</p>
         </div>

        <div class="mt-4 flex gap-2">
          <a v-for="social, i in socials" :key="i" :href="social.url" class="w-8 h-8 flex justify-center items-center">
            <nuxt-icon :name="'icon-' + social.name" class="text-gray-400 text-2xl hover:text-gray-500 transition-colors duration-150 ease-in-out" />
          </a>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-12 md:grid-cols-4">
        <div v-for="item, i in menu" :key="i">
          <h3 class="text-lg uppercase tracking-widest font-bold">{{ item.title }}</h3>
          <ul class="mt-4 flex flex-col gap-4">
            <li v-for="child, j in item.items" :key="j">
              <NuxtLink :to="child.url" class="text-gray-500 hover:text-primary transition-colors duration-150 ease-in-out">{{ child.title }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="text-sm text-gray-500 text-center pt-12 border-t-[1px] border-t-gray-200 mx-auto">
      <p>&copy; {{ settings.copyright }}</p>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n()

const { data: footer } = await useFetch('/api/footer', {
  query: { locale },
})
const settings = ref(footer.value.settings)
const socials = ref(footer.value.socials)
const menu = ref(footer.value.menu)
</script>