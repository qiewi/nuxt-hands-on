<template>
  <main class="app-main">
    <div class="block-padding container h-full">
      <h1 class="mb-8 text-3xl">Scan AR</h1>
      <UButton
        class="mb-4"
        :class="{ 'bg-primary': showAR }"
        @click="showAR = !showAR"
        >{{ showAR ? 'Hide AR' : 'Show AR' }}
      </UButton>
      <div v-if="showAR" class="ar-container relative z-0 h-full">
        <a-scene
          mindar-image="imageTargetSrc: https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.4/examples/image-tracking/assets/card-example/card.mind;"
          color-space="sRGB"
          renderer="colorManagement: true, physicallyCorrectLights"
          vr-mode-ui="enabled: false"
          device-orientation-permission-ui="enabled: false"
        >
          <a-assets>
            <img id="card" src="/assets/card.png" />
            <a-asset-item
              id="avatarModel"
              src="/assets/scene.gltf"
            ></a-asset-item>
          </a-assets>

          <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>
          <a-entity mindar-image-target="targetIndex: 0">
            <a-plane
              src="#card"
              position="0 0 0"
              height="0.552"
              width="1"
              rotation="0 0 0"
            ></a-plane>
            <a-gltf-model
              rotation="0 0 0 "
              position="0 0 0.1"
              scale="0.005 0.005 0.005"
              src="#avatarModel"
              animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate"
            ></a-gltf-model>
            <!-- <a-plane
              color="blue"
              opaciy="0.5"
              position="0 0 0"
              height="0.552"
              width="1"
              rotation="0 0 0"
            ></a-plane> -->
          </a-entity>
        </a-scene>
      </div>
    </div>
    <img id="card2" src="/assets/card.png" />
  </main>
</template>

<script setup>
definePageMeta({ auth: false })

const showAR = ref(false)

onMounted(() => {
  // if (process.client) showAR.value = true
})
</script>

<style>
html.a-fullscreen .a-canvas,
.ar-container video {
  position: fixed !important;
  width: 100% !important;
  height: 100% !important;
  top: 0 !important;
  left: 0 !important;
}
</style>
