<template>
  <section class="min-h-[calc(100vh-64px)] bg-stone-50 dark:bg-neutral-950">
    <div class="mx-auto grid max-w-[90rem] overflow-hidden bg-white shadow-sm ring-1 ring-stone-200 md:min-h-[calc(100vh-64px)] md:grid-cols-2 dark:bg-neutral-900 dark:ring-neutral-800">
      <div class="relative min-h-72 w-full overflow-hidden bg-stone-200 md:min-h-full dark:bg-neutral-800" :class="[{'md:order-2': isFlipped}]">
        <NuxtImg 
          :src="image" 
          :alt="imageAlt"
          class="h-full min-h-72 w-full object-cover md:absolute md:inset-0 md:min-h-full"
          sizes="100vw md:50vw"
          format="webp"
         />
        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent md:bg-gradient-to-r md:from-black/10 md:to-transparent" />
      </div>
  
      <div class="flex w-full items-center justify-center px-5 py-10 sm:px-8 md:px-12 md:py-16 lg:px-16">
        <div class="w-full max-w-xl text-base leading-8 text-stone-700 sm:text-lg dark:text-neutral-300">
          <slot></slot>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script lang="ts" setup>
const props = defineProps<{ image: string, imageAlt?: string, isFlipped?: boolean }>();
const { data: appContent } = await useAppContent()
const imageAlt = computed(() => props.imageAlt ?? appContent.value!.site.defaultImageAlt)
</script>
