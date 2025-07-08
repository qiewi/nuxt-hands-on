<script setup>
const router = useRouter()
// const localePath = useLocalePath()

const keyword = ref('')
const showInput = ref(false)
const chars = ref(0)
const allowedToSearch = ref(false)

const showInputFields = () => {
  showInput.value = !showInput.value
}

const hideInputFields = () => {
  showInput.value = false
}

const clearKeyword = () => {
  const inputField = document.querySelector('#siteSearch')
  keyword.value = ''
  chars.value = 0
  inputField.focus()
}

const search = () => {
  if (!allowedToSearch.value) return false

  console.log('run Search ' + keyword.value)
  router.push({
    path: `/search`,
    query: { keyword: keyword.value, page: 1 },
  })

  hideInputFields()
}

const charsLength = () => {
  chars.value = keyword.value.length

  if (chars.value > 3) {
    allowedToSearch.value = true
  } else {
    allowedToSearch.value = false
  }
}

onMounted(() => {
  handleClickOutside('.site-search', showInput)
})
</script>

<template>
  <form class="site-search" @submit.prevent="search">
    <label
      for="siteSearch"
      class="flex h-[48px] w-[48px] items-center justify-center"
      @click="showInputFields"
    >
      <UIcon name="i-lucide-search" />
    </label>
    <!-- Label as toggle trigger -->

    <!-- left 50% -->
    <div
      class="site-search-fields fixed top-[64px] left-1/2 z-[3] w-[90%] max-w-sm translate-x-[-50%] rounded-lg bg-white p-3 shadow-lg transition"
      :class="
        showInput
          ? 'pointer-events-auto translate-y-1/4 opacity-100'
          : 'pointer-events-none -translate-y-1/2 opacity-0'
      "
    >
      <input
        id="siteSearch"
        v-model.trim="keyword"
        class="form-input w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
        type="search"
        autocomplete="off"
        placeholder="Search..."
        @keyup="charsLength"
      />
      <!-- input search -->

      <button
        type="reset"
        class="btn-clear absolute top-3 right-[44px] flex h-[40px] w-[40px] items-center justify-center"
        :class="allowedToSearch ? 'opacity-100' : 'opacity-0'"
        aria-label="Clear"
        @click.prevent="clearKeyword"
      >
        <UIcon name="i-lucide-circle-x" />
      </button>
      <!-- button keayword clear -->

      <button
        type="submit"
        class="btn-submit absolute top-3 right-3 flex h-[40px] w-[40px] items-center justify-center"
        aria-label="Search"
      >
        <UIcon name="i-lucide-search" />
      </button>
      <!-- button submit search -->
    </div>
  </form>
</template>
