<template>
  <main class="app-main">
    <div class="container mx-auto py-16">
      <h1 class="text-3xl font-semibold">
        {{ posts.data.Title }}
      </h1>
      <UtilsSocialShare />
      <time class="mb-8 block" datetime="">{{
        useDateFormat(posts.data.createdAt, 'MMMM DD, YYYY')
      }}</time>
      <figure class="mb-6">
        <img :src="renderImage(posts.data.Image)" alt="" />
      </figure>
      <div class="prose lg:text-lg" v-html="posts.data.Content"></div>
      <!-- <pre><code>{{ posts }}</code></pre> -->
    </div>
  </main>
</template>

<script setup>
const router = useRoute()
const slugs = router.params.slugs.pop()
const { data: posts, error } = await useFetch('/api/app/posts/' + slugs)
function renderImage(img) {
  return img ? img.url : '/icon.png'
}

console.log({ error })

if (error.value) {
  console.log({ error: error.value })
  const errValue = error.value
  throw createError({
    fatal: true,
    statusCode: errValue.statusCode,
    statusMessage: errValue.statusMessage,
  })
}

const seoData = posts.value.data

useMeta({
  title: seoData?.Seo?.metaTitle || seoData?.Title, // bila data title ternyata error dari API, selama ada optional chainning, akan mengembalikan default yang sudah kita set di /composables/useMeta
  description: seoData?.Seo?.metaDescription,
  image:
    seoData?.Seo?.shareImage?.formats.large.url || renderImage(seoData.Image),
  // type: 'website',
})
</script>
