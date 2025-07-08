<template>
  <aside class="col-span-1">
    <nav>
      <h2>{{ categories }}</h2>
      <ul>
        <li v-for="(nav, i) in menus" :key="i">
          <NuxtLink
            class="inline-block p-4"
            :to="`/en/${newsEvents}/${categories}/${nav.slug}`"
          >
            {{ nav.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
const route = useRoute()
const params = route.params
const newsEvents = params.newsEvents
const categories = params.categories

console.log({ newsEvents, categories })

const { data: menus } = await useFetch('/api/' + categories)

console.log({ menus })
</script>
