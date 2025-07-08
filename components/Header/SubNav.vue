<script setup>
const props = defineProps({
  subNav: {
    type: Array,
    default: () => [],
  },
  parentSlug: {
    type: String,
    default: () => '/',
  },
})
const showSubNav = ref([])
props.subNav.forEach(() => {
  showSubNav.value.push(false)
})

const style = {
  navLink: 'block px-2 py-1 hover:bg-slate-200',
}

// console.log({ subNav: props.subNav })
</script>

<template>
  <div class="sub-nav absolute top-full z-[2] w-full bg-white">
    <!-- <pre><code>{{ props.subNav }}</code></pre> -->
    <ul class="mb-0">
      <li
        v-for="(nav, i) in props.subNav"
        :key="i"
        :class="{ 'parent-nav': nav.Child?.length }"
      >
        <span v-if="!nav.Child?.length" class="block">
          <NuxtLink :to="nav.Url" :class="style.navLink">
            {{ nav.Title }}
          </NuxtLink>
        </span>
        <template v-else>
          <span class="block">
            <NuxtLink :to="nav.Url" :class="style.navLink"
              >">
              {{ nav.Title }}
            </NuxtLink>
            <button
              class="nav-arrow"
              type="button"
              @click.prevent="showSubNav[i] = !showSubNav[i]"
            >
              >
            </button>
          </span>
          <HeaderSubNav
            v-if="nav.Child?.length"
            :parent-slug="nav.Url"
            :sub-nav="nav.Child"
            :class="{ 'is-active': showSubNav[i] }"
          />
        </template>
      </li>
    </ul>
  </div>
</template>
