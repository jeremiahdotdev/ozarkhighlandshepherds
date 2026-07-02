<template>
    <nav class="sticky top-0 z-40 min-h-16 w-full border-b border-stone-200/80 bg-white/90 px-4 py-2 shadow-sm backdrop-blur md:fixed dark:border-neutral-800 dark:bg-neutral-950/90 dark:text-neutral-100">
      <div class="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <NuxtLink to="/" class="flex min-w-0 items-center gap-3 text-base font-semibold leading-tight text-stone-900 transition hover:text-emerald-800 md:text-lg dark:text-neutral-50 dark:hover:text-emerald-300">
          <NuxtImg src="/highland.png" :width="44" :height="44" :alt="site.defaultImageAlt" class="h-11 w-11 shrink-0 rounded-full border border-stone-300 object-cover shadow-sm dark:border-neutral-700" format="webp"/>
          <span class="truncate">{{ site.title }}</span>
        </NuxtLink>
        <NavLinkList @linkClicked="closeMenu" class="hidden items-center justify-center gap-1 md:flex" :routes="routes" />
        <button @click="toggleMenu" :aria-label="site.menu" :aria-expanded="isMenuOpen" :class="['z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-stone-50 text-stone-800 transition md:hidden dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100', { 'rotate-90': isMenuOpen }]">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <NavLinkList @linkClicked="closeMenu" :routes="routes" v-if="isMenuOpen" class="absolute left-0 top-full z-30 flex w-full flex-col items-stretch gap-1 border-b border-stone-200 bg-white px-4 py-4 shadow-lg md:hidden dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100" />
    </nav>
  </template>
  
  <script lang="ts" setup>
  import { getRoutes } from '~/globals/routes' 
  const { data: appContent } = await useAppContent()
  const site = computed(() => appContent.value!.site)
  const routes = computed(() => getRoutes(appContent.value!))
  const isMenuOpen = ref(false)

  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
  }

  function closeMenu() {
    isMenuOpen.value = false
  }
</script>

  
