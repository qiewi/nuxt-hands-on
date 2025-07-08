<template>
  <div class="app-blocks">
    <!-- <pre><code>{{ router.params.slugs }}</code></pre> -->

    <h1 class="sr-only">{{ pageData?.data?.Name }}</h1>
    <!-- <template v-if="pageData?.data !== null"> -->
    <component
      :is="getComponent(block.__component)"
      v-for="(block, i) in pageData?.data?.Blocks?.filter(b => b.Published) ||
      []"
      :key="i"
      :data="block"
    />
    <!-- </template> -->
    <div class="prose container overflow-auto text-xs">
      <pre><code>{{ pageData }}</code></pre>
    </div>
  </div>
</template>

<script setup>
// definePageMeta({ auth: false });
import { defineAsyncComponent } from 'vue'
const props = defineProps({
  slugs: {
    type: String,
    default: () => '',
  },
})
// const router = useRoute()
// // const page = router.params.slugs
// const slugs = router.params.slugs.pop()

// console.log({ slugs: props.slugs })

// Dynamic component mapping
const getComponent = type => {
  // const blocksPath = "~/components/Blocks/";
  const components = {
    'blocks.hero-slide': defineAsyncComponent(
      () => import('~/components/Blocks/HeroSlide.vue'),
    ),
    'blocks.features': defineAsyncComponent(
      () => import('~/components/Blocks/Features.vue'),
    ),
    'blocks.testimony': defineAsyncComponent(
      () => import('~/components/Blocks/Testimonial.vue'),
    ),
    'blocks.posts': defineAsyncComponent(
      () => import('~/components/Blocks/News.vue'),
    ),
    'blocks.rich-text': defineAsyncComponent(
      () => import('~/components/Blocks/RichText.vue'),
    ),
    'blocks.forms': defineAsyncComponent(
      () => import('~/components/Blocks/Forms.vue'),
    ),
    'blocks.faq': defineAsyncComponent(
      () => import('~/components/Blocks/Faq.vue'),
    ),
    'blocks.heading': defineAsyncComponent(
      () => import('~/components/Blocks/Heading.vue'),
    ),
    'blocks.collection': defineAsyncComponent(
      () => import('~/components/Blocks/Collection.vue'),
    ),
  }
  return components[type] || 'div' // Default fallback
}

// const { data: pageData } = await useFetch(`/api/app/pages/${slugs}`)

// const { data: pageData } = await useAsyncData('pageData', () =>
//   $fetch(`/api/app/pages/${props.slugs}`),
// )

const { data: pageData } = await useFetch(`/api/app/pages/${props.slugs}`)

// const publishedBlocks = computed(() =>
//   pageData.value.data.Blocks.filter(b => b.published),
// )

// console.log({ pageDataError: pageData.value })

if (pageData.value?.error !== undefined) {
  const err = pageData.value.error
  console.log({ err })
  // throw createError({
  //   fatal: true,
  //   statusCode: err.status,
  //   statusMessage: err.message,
  // })
}

const seoData = pageData.value?.data

useMeta({
  title: seoData?.Seo?.metaTitle, // bila data title ternyata error dari API, selama ada optional chainning, akan mengembalikan default yang sudah kita set di /composables/useMeta
  description: seoData?.Seo?.metaDescription,
  image: seoData?.Seo?.shareImage?.url,
  // type: 'website',
})
</script>
