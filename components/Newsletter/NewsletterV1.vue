<template>
  <section class="bg-slate-100 py-8">
    <div
      class="container flex flex-col gap-6 text-center md:flex-row md:items-center md:justify-between"
    >
      <header class="md:text-left">
        <h2 class="text-xl font-bold text-primary md:text-2xl lg:text-3xl">
          Get The Latest Updates
        </h2>
        <p class="mt-1 text-gray-500">Sign up for our newsletter</p>
      </header>
      <div class="md:text-right">
        <form
          class="flex gap-2 md:ml-auto md:max-w-[480px] lg:max-w-[580px]"
          role="form"
          @submit.prevent="handleSubmit"
        >
          <input
            id="email"
            v-model.trim="formData.email"
            type="email"
            placeholder="Email"
            class="form-input w-full"
            :class="{
              'border-red border-2': v$.email?.$dirty && v$.email?.$error,
            }"
            @blur="v$.email.$touch()"
          />
          <button
            class="btn btn-primary shadow-none"
            :class="{ 'pointer-events-none opacity-50': v$.$invalid }"
            :disabled="v$.$invalid"
          >
            Send
          </button>
        </form>
        <p class="mt-4 text-balance text-sm text-gray-500">
          By signing up to our newsletter you agree to our
          <a href="/">Term of Service</a> and <a href="/">Privacy Policy</a>.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, maxLength } from '@vuelidate/validators'

const formData = ref({
  email: '',
})
const rules = {
  email: {
    required,
    email,
    minLength: minLength(7),
    maxLength: maxLength(256),
  },
}

const v$ = useVuelidate(rules, formData)

const handleSubmit = () => {
  // console.log("Form submitted:", formData.value)
}
</script>

<style scoped>
a {
  text-decoration: underline;
  transition: color 0.15s ease-in-out;
}

a:hover {
  color: var(--primary-color);
}
</style>
