<template>
  <div class="relative min-h-screen overflow-hidden bg-background text-foreground antialiased transition-colors duration-700">
    <div
      :class="['pointer-events-none absolute inset-0 z-0 image-shimmer transition-opacity duration-700', areBackgroundsLoaded ? 'opacity-0' : 'opacity-100']"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute inset-0 opacity-100 transition-opacity duration-700 ease-in-out dark:opacity-0"
      aria-hidden="true"
    >
      <NuxtImg
        src="/bg/bg-light.png"
        alt=""
        loading="lazy"
        decoding="async"
        format="webp"
        :class="['h-full w-full object-cover transition duration-1000 ease-out', isLightBgLoaded ? 'opacity-100 image-blur-ready' : 'opacity-0 image-blur-load']"
        @load="onLightBgLoad"
        @error="onLightBgLoad"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-[#f7f1e8b8] to-[#e8dbc9d6]" />
    </div>
    <div
      class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 ease-in-out dark:opacity-100"
      aria-hidden="true"
    >
      <NuxtImg
        src="/bg/bg-dark.png"
        alt=""
        loading="lazy"
        decoding="async"
        format="webp"
        :class="['h-full w-full object-cover transition duration-1000 ease-out', isDarkBgLoaded ? 'opacity-100 image-blur-ready' : 'opacity-0 image-blur-load']"
        @load="onDarkBgLoad"
        @error="onDarkBgLoad"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-[#14110fc2] to-[#0f0d0be0]" />
    </div>
    <NavBar />
    <main class="relative z-10 min-h-[calc(100vh-64px)] pt-0 md:pt-16">
      <NuxtPage />
    </main>
    <NavFooter class="relative z-10" />
  </div>
</template>

<script setup lang="ts">
const isLightBgLoaded = ref(false)
const isDarkBgLoaded = ref(false)

const areBackgroundsLoaded = computed(() => isLightBgLoaded.value && isDarkBgLoaded.value)

function onLightBgLoad() {
  isLightBgLoaded.value = true
}

function onDarkBgLoad() {
  isDarkBgLoaded.value = true
}
</script>
