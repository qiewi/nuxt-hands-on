<template>
  <div class="rating flex items-center">
    <span class="rate-number mr-2">{{ props.rating.toFixed(1) }}</span>
    <ol class="flex">
      <li v-for="(rate, i) in rateItem" :key="i" class="mr-1">
        <span class="bg-primary" :style="`width:${rate}`"></span>
      </li>
    </ol>
  </div>
</template>

<script setup>
const props = defineProps({
  rating: {
    type: Number,
    default: 0,
  },
})

const rateItem = computed(() => {
  const item = [1, 2, 3, 4, 5]

  return item.map(i => {
    const full = 100
    const count = (props.rating - i + 1) * full
    let el = full

    if (count > 0 && count < full) {
      el = count.toFixed(2)
    } else if (count <= 0) {
      el = 0
    }

    return el + '%'
  })
})
</script>

<style scoped>
.rating ol {
  margin-bottom: 2px;
}
li {
  position: relative;
  // background-color: lighten(rgb(0, 0, 0), 70%);
}

li,
li span {
  display: block;
  width: 14px;
  height: 14px;
  -webkit-mask: url('~/assets/img/rating-star.svg') no-repeat 0 0;
  -webkit-mask-size: 14px 14px;
  mask: url('~/assets/img/rating-star.svg') no-repeat 0 0;
  mask-size: 14px 14px;
}

li span {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
