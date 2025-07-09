export const useArticle = () => {
  // Get URL parameters
  const route = useRoute()
  const router = useRouter()

  // Reactive state
  const currentPage = ref(Number(route.query.page) || 1)
  const selectedShowPerPage = ref(Number(route.query.size) || 10)
  const selectedSort = ref(route.query.sort || '-published_at')

  // Fetch data from API
  const {
    data: apiResponse,
    pending,
    error,
    refresh,
  } = useAsyncData(
    'ideas',
    async () => {
      const response = await $fetch('/api/app/pages/ideas', {
        query: {
          'page[number]': currentPage.value,
          'page[size]': selectedShowPerPage.value,
          'append[]': ['small_image', 'medium_image'],
        },
      })
      return response
    },
    {
      watch: [currentPage, selectedShowPerPage],
    },
  )

  // Process and sort articles client-side
  const articles = computed(() => {
    const rawData = apiResponse.value?.data || []

    // Sort the articles based on selected sort option
    const sortedData = [...rawData].sort((a, b) => {
      if (selectedSort.value === '-published_at') {
        return (
          new Date(b.published_at || '').getTime() -
          new Date(a.published_at || '').getTime()
        )
      } else {
        return (
          new Date(a.published_at || '').getTime() -
          new Date(b.published_at || '').getTime()
        )
      }
    })

    return sortedData
  })
  const total = computed(() => apiResponse.value?.meta?.total || 0)
  const totalPages = computed(() =>
    Math.ceil(total.value / selectedShowPerPage.value),
  )

  // Pagination display info
  const start = computed(
    () => (currentPage.value - 1) * selectedShowPerPage.value + 1,
  )
  const end = computed(() =>
    Math.min(currentPage.value * selectedShowPerPage.value, total.value),
  )

  // Pagination logic matching React component
  const paginationPages = computed(() => {
    const pages = []
    const current = currentPage.value
    const totalPagesCount = totalPages.value

    if (totalPagesCount <= 5) {
      // Show all pages if total is 5 or less
      for (let i = 1; i <= totalPagesCount; i++) {
        pages.push(i)
      }
    } else {
      if (current <= 3) {
        // Show first 4 pages + ellipsis + last page
        pages.push(1, 2, 3, 4, '...', totalPagesCount)
      } else if (current >= totalPagesCount - 2) {
        // Show first page + ellipsis + last 4 pages
        pages.push(
          1,
          '...',
          totalPagesCount - 3,
          totalPagesCount - 2,
          totalPagesCount - 1,
          totalPagesCount,
        )
      } else {
        // Show first page + ellipsis + current-1, current, current+1 + ellipsis + last page
        pages.push(
          1,
          '...',
          current - 1,
          current,
          current + 1,
          '...',
          totalPagesCount,
        )
      }
    }

    return pages
  })

  // Navigation functions
  const updateUrl = params => {
    const query = { ...route.query, ...params }
    router.push({ query })
  }

  const goToPage = page => {
    currentPage.value = page
    updateUrl({ page })
  }

  // Watch for changes and update URL
  watch(selectedSort, newSort => {
    // Keep current page when sorting changes
    updateUrl({ sort: newSort })
  })

  watch(selectedShowPerPage, newSize => {
    // Reset to page 1 when page size changes
    updateUrl({ size: newSize, page: 1 })
    currentPage.value = 1
  })

  // Update reactive state when URL changes
  watch(
    () => route.query,
    newQuery => {
      currentPage.value = Number(newQuery.page) || 1
      selectedShowPerPage.value = Number(newQuery.size) || 10
      selectedSort.value = newQuery.sort || '-published_at'
    },
  )

  return {
    // State
    currentPage,
    selectedShowPerPage,
    selectedSort,

    // API State
    pending,
    error,
    refresh,

    // Data
    articles,
    total,
    totalPages,
    start,
    end,
    paginationPages,

    // Methods
    goToPage,
    updateUrl,
  }
}
