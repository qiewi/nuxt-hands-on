<template>
  <main class="app-main">
    <div class="container mx-auto py-8">
      <h1 class="mb-6 text-3xl font-semibold">Contact Us</h1>
      <div class="lg:text-lg">
        <p class="mb-4">If you have any questions, feel free to reach out!</p>
        <UForm
          :schema="schema"
          :state="form"
          class="grid gap-4 md:grid-cols-2 lg:gap-8"
          @submit.prevent="handleSubmit"
        >
          <UFormField label="First Name" name="FirstName">
            <!-- <label class="mb-2 block" for="name">First Name:</label> -->
            <UInput
              id="name"
              v-model="form.FirstName"
              type="text"
              class="w-full"
              size="lg"
              name="FirstName"
              required
            />
          </UFormField>
          <UFormField label="Last Name" name="LastName">
            <!-- <label class="mb-2 block" for="lastName">Last Name:</label> -->
            <UInput
              id="lastName"
              v-model="form.LastName"
              type="text"
              size="lg"
              class="w-full"
              name="LastName"
              required
            />
          </UFormField>
          <UFormField label="Subject" name="Subject">
            <!-- <label class="mb-2 block" for="subject">Subject:</label> -->
            <USelect
              id="subject"
              v-model="form.Subject"
              :items="subjects"
              size="lg"
              class="w-full"
              name="Subject"
              required
            />
          </UFormField>
          <UFormField label="Work Email" name="WorkEmail">
            <label class="mb-2 block" for="email">Work Email:</label>
            <UInput
              id="email"
              v-model="form.WorkEmail"
              type="email"
              size="lg"
              class="w-full"
              name="WorkEmail"
              required
            />
          </UFormField>
          <UFormField label="Mobile Phone" name="MobilePhone">
            <!-- <label class="mb-2 block" for="phone">Mobile Phone:</label> -->
            <UInput
              id="phone"
              v-model="form.MobilePhone"
              type="tel"
              size="lg"
              class="w-full"
              name="MobilePhone"
              required
            />
          </UFormField>
          <UFormField label="Message" name="Message">
            <!-- <label class="mb-2 block" for="message">Message:</label> -->
            <UTextarea
              id="message"
              v-model="form.Message"
              class="w-full"
              size="lg"
              name="Message"
              required
            />
          </UFormField>
          <div>
            <UButton
              type="submit"
              class="w-full justify-center"
              size="lg"
              :loading="!!isLoading"
            >
              Submit
            </UButton>
          </div>
        </UForm>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'
const toast = useToast()

const validation = {
  FirstName: z.string().min(4, 'First name is required Cuk'),
  LastName: z.string().min(4, 'Last name is required'),
  Subject: z.string().min(4, 'Subject is required'),
  MobilePhone: z.string().min(4, 'Mobile phone is required'),
  WorkEmail: z.string().email('Invalid email'),
  Message: z.string().min(4, 'Message is required'),
}

const schema = z.object(validation)
type Schema = z.output<typeof schema>
const form = reactive<Partial<Schema>>({
  FirstName: 'Dhika',
  LastName: 'Rid',
  Subject: 'Career Opportunities',
  WorkEmail: 'dhik@suit.com',
  MobilePhone: '081931717101',
  Message: 'Career Opportunities',
})
const isLoading = ref(false)

const subjects = [
  {
    label: 'Start New Project',
    value: 'Start New Project',
  },
  {
    label: 'Media Inquiries',
    value: 'Media Inquiries',
  },
  {
    label: 'Career Opportunities',
    value: 'Career Opportunities',
  },
]

async function handleSubmit(event: FormSubmitEvent<Schema>) {
  isLoading.value = true
  const formData = {
    data: form,
  }
  await useFetch('/api/app/contacts', {
    method: 'POST',
    body: JSON.stringify(formData),
  }).then(res => {
    isLoading.value = false
    const isError = res.error.value

    if (isError) {
      toast.add({
        title: 'Error',
        description: res.statusMessage,
        icon: 'i-lucide-alert-triangle',
        color: 'warning',
      })
    } else {
      toast.add({
        title: 'Success',
        description: res.statusMessage,
        icon: 'i-lucide-alert-triangle',
        color: 'success',
      })
    }
  })

  // const data = await response.json()
  // console.log('Form submitted successfully:', data)
}
</script>
