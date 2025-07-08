<template>
  <div>
    <button class="btn--primary mr-3" @click="open = true">Open Modal 1</button>
    <button class="btn--red mr-3" @click="open2 = true">Open Modal 2</button>
    <button class="btn--green mr-3" @click="open3 = true">Open Modal 3</button>
    <button class="btn--blue" @click="openBody = true">Open Modal Body</button>

    <div
      v-show="open"
      id="modal1"
      class="modal rounded-lg p-4 text-white"
      :class="{ 'bg-slate-700': open }"
    ></div>

    <div
      v-show="open2"
      id="modal2"
      class="modal2 rounded-lg p-4 text-white"
      :class="{ 'bg-slate-700': open2 }"
    ></div>

    <div
      v-show="open3"
      id="modal3"
      class="modal3 rounded-lg p-4 text-white"
      :class="{ 'bg-slate-700': open3 }"
    ></div>

    <Teleport v-if="teleportReady" to="#modal1">
      <div v-if="open">
        <p>Hello from the modal1!</p>
        <button class="rounded-md bg-green-800 px-2 py-1" @click="open = false">
          Close
        </button>
      </div>
    </Teleport>
    <Teleport v-if="teleportReady" to="#modal2">
      <div v-if="open2">
        <p>Hello from the modal2!</p>
        <button
          class="rounded-md bg-orange-800 px-2 py-1"
          @click="open2 = false"
        >
          Close
        </button>
      </div>
    </Teleport>
    <ClientOnly>
      <Teleport to="#modal3">
        <div v-if="open3">
          <p>Hello from the modal3 with client-only!</p>
          <button
            class="rounded-md bg-orange-800 px-2 py-1"
            @click="open3 = false"
          >
            Close
          </button>
        </div>
      </Teleport>
    </ClientOnly>
    <Teleport to="body">
      <div
        v-if="openBody"
        class="modal-body rounded-lg bg-slate-700 p-4 text-white"
      >
        <p>Hello from the modal to body!</p>
        <button
          class="rounded-md bg-orange-800 px-2 py-1"
          @click="openBody = false"
        >
          Close
        </button>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const teleportReady = ref(false)
const open = ref(false)
const open2 = ref(false)
const open3 = ref(false)
const openBody = ref(false)

onMounted(() => {
  teleportReady.value = true
})
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
.modal2 {
  position: fixed;
  z-index: 999;
  top: 40%;
  left: 20%;
  width: 500px;
  margin-left: -150px;
}
.modal3 {
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  width: 500px;
  margin-left: -150px;
}
.modal-body {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 60%;
  width: 400px;
  margin-left: -150px;
}
</style>
