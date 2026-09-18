<template>
    <div class="relative flex aspect-square items-center justify-center overflow-hidden md:p-5">
      <div
        :class="['pointer-events-none absolute inset-0 image-shimmer transition-opacity duration-500', isLoaded ? 'opacity-0' : 'opacity-100']"
        aria-hidden="true"
      />
      <NuxtImg
        class="badge-art"
        :src="src"
        :alt="site.icon"
        :class="['max-h-28 w-full max-w-32 object-contain opacity-90 transition duration-700 ease-out', isLoaded ? 'image-blur-ready' : 'image-blur-load']"
        loading="lazy"
        decoding="async"
        @load="onLoad"
        @error="onLoad"
      />
    </div>
</template>
    
<script lang="ts" setup>    
  const { data: appContent } = await useAppContent()
  const site = computed(() => appContent.value!.site)
  const props = defineProps<{
    src:string,
  }>()
  const isLoaded = ref(false)

  function onLoad() {
    isLoaded.value = true
  }
</script>

<style scoped>
.badge-art.image-blur-ready {
  filter: drop-shadow(0 2px 3px rgb(0 0 0 / 80%)) drop-shadow(0 6px 10px rgb(0 0 0 / 65%));
}
</style>
