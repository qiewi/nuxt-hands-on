<template>
  <main id="main" role="main" class="app-main">
    <!-- <HeroV2 :items="hero" /> -->
    <div class="block-padding container">
      <h1 class="mb-6 text-3xl font-semibold">Profile</h1>
      <!-- <pre><code>{{ data }}</code></pre> -->

      <div class="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
        <div class="col-span-1 rounded-full border border-slate-100 p-2">
          <img
            :src="data?.profilePicture.formats.small.url"
            alt="Profile Picture"
            class="aspect-square w-full rounded-full"
          />
        </div>

        <div class="md:col-span-2">
          <h2 class="mb-4 text-lg font-semibold">User Information</h2>
          <p class="text-2xl font-semibold">
            {{ data?.firstName }} {{ data?.lastName }}
          </p>
          <p class="mb-4 text-sm text-slate-500">
            {{ data?.username }}
          </p>
          <!-- List of user information -->
          <ul class="list-disc pl-6">
            <!-- <li><strong>Username:</strong> {{ data?.username }}</li> -->
            <li><strong>Email:</strong> {{ data?.email }}</li>
            <!-- <li><strong>First Name:</strong> {{ data?.firstName }}</li>
            <li><strong>Last Name:</strong> {{ data?.lastName }}</li> -->
            <li>
              <strong>Join Date:</strong>
              {{ useDateFormat(data?.createdAt, 'MMMM DD, YYYY') }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
// definePageMeta({ auth: false })
const { data } = useAuth()
</script>
