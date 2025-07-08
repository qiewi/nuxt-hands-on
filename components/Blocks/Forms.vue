<template>
  <section class="block-forms py-6 sm:py-8 lg:py-12">
    <!-- <pre><code>{{ props.data }}</code></pre> -->
    <div class="container lg:max-w-4xl lg:px-16">
      <h1 class="mb-6 text-3xl font-semibold">
        {{ props.data.Title }}
      </h1>
      <UForm
        :schema="schema"
        :state="form"
        class="grid gap-4 md:grid-cols-2 lg:gap-8"
        @submit.prevent="handleSubmit"
      >
        <UFormField
          v-for="(field, i) in props.data.Fields"
          :key="i + field.id"
          :label="field.Label"
          :name="rmSpace(field.Label)"
        >
          <!-- <label class="mb-2 block" :for="field.Name">{{ field.Label }}</label> -->
          <UInput
            v-if="field.Type === 'Text'"
            :id="field.Name"
            v-model.trim="form[rmSpace(field.Label)]"
            type="text"
            size="lg"
            class="w-full"
            :required="field.Required"
          />
          <UInput
            v-else-if="field.Type === 'Email'"
            :id="field.Name"
            v-model.trim="form[rmSpace(field.Label)]"
            type="email"
            size="lg"
            class="w-full"
            :required="field.Required"
          />
          <UInput
            v-else-if="field.Type === 'Tel'"
            :id="field.Name"
            v-model.trim="form[rmSpace(field.Label)]"
            type="tel"
            size="lg"
            class="w-full"
            :required="field.Required"
          />
          <UTextarea
            v-else-if="field.Type === 'Textarea'"
            :id="field.Name"
            v-model.trim="form[rmSpace(field.Label)]"
            class="w-full"
            size="lg"
            :required="field.Required"
          />
          <USelect
            v-else-if="field.Type === 'Select'"
            :id="field.Name"
            v-model.trim="form[rmSpace(field.Label)]"
            :items="field.Options"
            size="lg"
            class="w-full"
            :required="field.Required"
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
  </section>
</template>

<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
})

const toast = useToast()
const isLoading = ref(false)

const rmSpace = (str: string) => str.replace(/\s+/g, '')

const validationRules = {}
const formState = {}

// console.log({ data: props.data.Fields })
props.data.Fields.forEach(field => {
  const key = field.Label.replace(/\s+/g, '')
  validationRules[key] =
    field.Type === 'Email'
      ? z.string().email('Invalid email')
      : z.string().min(1, field.Validations)

  formState[key] = ''
})

// console.log({ validationRules })

const schema = z.object(validationRules)

type Schema = z.output<typeof schema>
const form = reactive<Partial<Schema>>(formState)

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
