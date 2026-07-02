<template>
    <nav class="sticky top-0 z-40 min-h-16 w-full border-b border-border-muted bg-surface-nav px-4 py-2 text-foreground shadow-nav backdrop-blur md:fixed">
      <div class="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <NuxtLink to="/" class="flex min-w-0 items-center gap-3 text-base leading-tight text-foreground transition hover:text-primary md:text-lg">
          <span class="relative inline-flex h-11 w-11 shrink-0 overflow-hidden rounded-full border border-border-strong shadow-brand">
            <span
              :class="['pointer-events-none absolute inset-0 image-shimmer transition-opacity duration-500', isLogoLoaded ? 'opacity-0' : 'opacity-100']"
              aria-hidden="true"
            />
            <NuxtImg
              src="/favicon.png"
              :width="44"
              :height="44"
              :alt="site.defaultImageAlt"
              :class="['h-11 w-11 object-cover transition duration-700 ease-out', isLogoLoaded ? 'image-blur-ready' : 'image-blur-load']"
              format="webp"
              loading="lazy"
              decoding="async"
              @load="onLogoLoad"
              @error="onLogoLoad"
            />
          </span>
          <span class="truncate font-display text-[1rem] font-normal tracking-display md:text-[1.2rem] lg:text-[1.5rem]">{{ site.title }}</span>
        </NuxtLink>
        <NavLinkList @linkClicked="closeMenu" class="hidden items-center justify-center gap-1 md:flex" :routes="routes" />
        <button @click="toggleMenu" :aria-label="site.menu" :aria-expanded="isMenuOpen" :class="['z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background-secondary text-foreground transition md:hidden', { 'rotate-90': isMenuOpen }]">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <NavLinkList @linkClicked="closeMenu" :routes="routes" v-if="isMenuOpen" class="absolute left-0 top-full z-30 flex w-full flex-col items-stretch gap-1 border-b border-border bg-surface-nav px-4 py-4 shadow-xl md:hidden" />
    </nav>
  </template>
  
  <script lang="ts" setup>
  import { getRoutes } from '~/globals/routes' 
  const { data: appContent } = await useAppContent()
  const site = computed(() => appContent.value!.site)
  const routes = computed(() => getRoutes(appContent.value!))
  const isMenuOpen = ref(false)
  const isLogoLoaded = ref(false)

  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
  }

  function closeMenu() {
    isMenuOpen.value = false
  }

  function onLogoLoad() {
    isLogoLoaded.value = true
  }
</script>

  
