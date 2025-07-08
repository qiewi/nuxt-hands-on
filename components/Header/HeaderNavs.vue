<template>
  <div class="header-nav flex items-center">
    <HeaderSiteSearch />
    <HeaderMainNav />
    <UButton
      v-if="!authenticated"
      to="/login"
      class="cta-special btn--primary inline-flex"
    >
      <NuxtIcon name="user" class="lg:hidden" />
      <span class="hidden lg:block">Login</span>
    </UButton>
    <!-- <img
      v-else
      :src="data.profilePicture.formats.thumbnail.url"
      alt="avatar"
      class="ml-4 h-10 w-10 rounded-full"
      @click.prevent="signOut({ callbackUrl: '/login' })"
    /> -->

    <!-- <UButton
      v-if="authenticated"
      :avatar="{
        src: data.profilePicture.formats.thumbnail.url,
      }"
      color="neutral"
      variant="ghost"
      @click.prevent="signOut({ callbackUrl: '/login' })"
    >
      {{ data.username }}
    </UButton> -->

    <UDropdownMenu
      v-if="authenticated"
      :items="userNavItems"
      :content="{
        align: 'start',
        side: 'bottom',
        sideOffset: 8,
      }"
      :ui="{
        content: 'w-48',
      }"
    >
      <UButton
        :avatar="{
          src: data.profilePicture.formats.thumbnail.url,
        }"
        color="neutral"
        variant="ghost"
      >
        {{ data.username }}
      </UButton>
    </UDropdownMenu>
  </div>
</template>

<script setup>
const { status, signOut, data } = useAuth()
const authenticated = computed(() => status.value === 'authenticated')

const userNavItems = [
  {
    label: 'Profile',
    icon: 'i-lucide-user',
    onSelect() {
      // console.log('profile')
      navigateTo('/user/profile')
    },
  },
  {
    label: 'Sign Out',
    icon: 'i-lucide-log-out',
    onSelect() {
      // console.log('sign out')
      signOut({ callbackUrl: '/login' })
    },
  },
]

// const ses = getSession()

// console.log({ data: data.value.profilePicture })
</script>
