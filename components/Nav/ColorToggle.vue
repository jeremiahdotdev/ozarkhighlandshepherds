<template>
  <button
    type="button"
    class="inline-flex flex-row items-center p-1.5 justify-center gap-2 tracking-nav text-foreground-secondary transition-colors duration-200 border-b border-transparent hover:border-primary-border hover:text-primary-hover"
    @click="onChange()"
  >
    <svg
      :aria-label="site.sunIconAlt"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="1.5"
      :class="['transition-colors duration-200', { 'text-primary': isSelected }]"
      :style="{ width: `${iconSize * 1.2}px`, height: `${iconSize * 1.2}px` }"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
      />
    </svg>
    /
    <svg
      :aria-label="site.moonIconAlt"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="1.5"
      :class="['transition-colors duration-200', { 'text-primary': !isSelected }]"
      :style="{ width: `${iconSize}px`, height: `${iconSize}px` }"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
      />
    </svg>
  </button>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const { data: appContent } = await useAppContent()
const site = computed(() => appContent.value!.site)
const isSelected = computed(() => colorMode.value === 'light')
let themeFadeTimeout: ReturnType<typeof setTimeout> | number | null = null
const iconSize = 15;

const runThemeFade = () => {
  if (!import.meta.client) {
    return
  }

  document.documentElement.classList.add('theme-fade')

  if (themeFadeTimeout) {
    clearTimeout(themeFadeTimeout)
  }

  themeFadeTimeout = window.setTimeout(() => {
    document.documentElement.classList.remove('theme-fade')
    themeFadeTimeout = null
  }, 750)
}

const onChange = (value?: boolean) => {
  if (value === undefined) {
    value = !isSelected.value
  }
  if (value === isSelected.value) {
    return
  }
  runThemeFade()
  colorMode.preference = value ? 'light' : 'dark'
}

onBeforeUnmount(() => {
  if (!themeFadeTimeout || !import.meta.client) {
    return
  }

  clearTimeout(themeFadeTimeout)
  document.documentElement.classList.remove('theme-fade')
})
</script>
