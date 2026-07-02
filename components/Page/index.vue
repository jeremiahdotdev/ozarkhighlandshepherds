<template>
  <section class="min-h-[calc(100vh-64px)] px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
    <div class="mx-auto grid max-w-[90rem] overflow-hidden rounded-[2rem] border border-border-muted bg-surface shadow-card ring-1 ring-surface-ring backdrop-blur-[1px] lg:min-h-[calc(100vh-64px-4rem)] lg:grid-cols-2">
      <div class="relative min-h-72 w-full overflow-hidden bg-surface-media lg:min-h-full" :class="[{'lg:order-2': isFlipped}]">
        <NuxtImg 
          :src="image" 
          :alt="imageAlt"
          class="h-full min-h-72 w-full object-cover lg:absolute lg:inset-0 lg:min-h-full"
          sizes="100vw lg:50vw"
          format="webp"
         />
        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-overlay via-transparent to-transparent lg:bg-gradient-to-r lg:from-overlay-wide lg:via-transparent lg:to-transparent" />
      </div>
  
      <div class="flex w-full items-center justify-center px-6 py-10 sm:px-10 lg:px-14 lg:py-16 lg:px-18">
        <div class="w-full max-w-xl text-base leading-8 text-foreground-secondary sm:text-lg">
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
