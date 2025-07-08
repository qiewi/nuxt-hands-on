<template>
  <section class="block-rich-text block-padding">
    <div class="container">
      <div class="prose lg:text-lg">
        <!-- <pre><code>{{ props.data.RichText.Content }}</code></pre> -->
        <div v-html="props.data.RichText.Content"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
})
</script>
