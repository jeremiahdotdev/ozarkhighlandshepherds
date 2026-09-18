<template>
    <div class="relative flex aspect-square items-center justify-center overflow-hidden md:p-5">
      <div class="relative w-full max-w-38">
        <div
          :class="['badge-shimmer pointer-events-none absolute inset-0 image-shimmer transition-opacity duration-500', isLoaded ? 'opacity-0' : 'opacity-100']"
          :style="{ '--badge-mask': badgeMask }"
          aria-hidden="true"
        />
        <NuxtImg
          class="badge-art"
          :src="src"
          :alt="site.icon"
          :class="['max-h-32 w-full object-contain opacity-90 transition duration-700 ease-out', isLoaded ? 'image-blur-ready' : 'image-blur-load']"
          loading="lazy"
          decoding="async"
          @load="onLoad"
          @error="onLoad"
        />
      </div>
    </div>
</template>
    
<script lang="ts" setup>    
  const { data: appContent } = await useAppContent()
  const site = computed(() => appContent.value!.site)
  const props = defineProps<{
    src:string,
  }>()
  const badgeMask = computed(() => `url(${JSON.stringify(props.src)})`)
  const isLoaded = ref(false)

  function onLoad() {
    isLoaded.value = true
  }
</script>

<style scoped>
.badge-shimmer {
  -webkit-mask: var(--badge-mask) center / contain no-repeat;
  mask: var(--badge-mask) center / contain no-repeat;
  mask-mode: alpha;
}

.badge-art.image-blur-ready {
  filter: drop-shadow(0 2px 3px rgb(0 0 0 / 80%)) drop-shadow(0 6px 10px rgb(0 0 0 / 65%));
}
</style>
