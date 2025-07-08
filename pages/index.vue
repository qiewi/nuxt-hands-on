<template>
  <main id="main" role="main" class="app-main">
    <!-- <HeroV2 :items="hero" /> -->

    <PagesDynamic slugs="home" />
  </main>
</template>

<script setup>
import { useThemeStore } from '~/store/global'
const theme = useThemeStore()
const seo = {
  // title: 'Home',
  description: 'Description in 160 characters',
}

// const { signOut } = useAuth()

// definePageMeta({ auth: false })

useMeta({
  title: seo?.title, // bila data title ternyata error dari API, selama ada optional chainning, akan mengembalikan default yang sudah kita set di /composables/useMeta
  description: seo?.description,
  // image: '/icon.png',
  // type: 'website',
})

const expires = new Date()
expires.setTime(expires.getTime() + 1000 * 60 * 60 * 24) // 1 Day

theme.darkTheme = useCookie('theme', {
  default: () => false,
  expires,
})

/*
JSONLD
*/
const breadcrumbs = ref([])

breadcrumbs.value = [
  {
    url: 'https://example.com',
    text: 'top page',
  },
  {
    url: 'https://example.com/foo',
    text: 'foo',
  },
  {
    url: 'https://example.com/foo/bar',
    text: 'bar',
  },
]

const items = breadcrumbs.value.map((item, index) => ({
  '@type': 'ListItem',
  position: index + 1,
  item: {
    '@id': item.url,
    name: item.text,
  },
}))

useJsonld({
  '@type': 'BreadcrumbList',
  name: 'static json',
  itemListElement: items,
})

useJsonld({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Suitmedia',
  url: 'suitmedia.com',
  email: 'contact(at)suitmedia.com',
  telephone: '+62 21 719 6877',
  legalName: 'PT Suitmedia Kreasi Indonesia',
  location: 'Jakarta, Bandung, Yogyakarta, Singapore',
  description: 'Digital Agency Indonesia',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Jakarta, Indonesia',
    postalCode: '12510',
    streetAddress: 'Jl. Pejaten Barat II No. 3A',
  },
})

// Handle Lazy component scroll behaviour
const showAllComponents = ref(false)
onMounted(() => {
  // document.addEventListener('scroll', () => {
  //   showAllComponents.value = true
  // })

  // document.addEventListener('click', () => {
  //   showAllComponents.value = true
  // })

  // document.addEventListener('mousemove', () => {
  //   showAllComponents.value = true
  // })

  // document.addEventListener('touchmove', () => {
  //   showAllComponents.value = true
  // })

  const enableComponents = () => {
    showAllComponents.value = true
  }

  const events = ['scroll', 'click', 'mousemove', 'touchmove']

  events.forEach(event => {
    document.addEventListener(event, enableComponents)
  })
})
</script>
