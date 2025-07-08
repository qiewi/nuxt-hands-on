<script setup>
const error = useError()

const handleError = () => {
  clearError({
    redirect: `/`,
  })
}
</script>

<template>
  <div class="flex h-screen items-center justify-center">
    <div class="container mx-auto text-center">
      <h1 class="mb-2 text-9xl font-bold">
        {{ error.statusCode }}
      </h1>
      <p class="mt-1 mb-4 text-2xl">
        {{ error.message }}
      </p>
      <UButton class="btn--primary cursor-pointer" @click="handleError">
        Go Back
      </UButton>
    </div>
  </div>
</template>
