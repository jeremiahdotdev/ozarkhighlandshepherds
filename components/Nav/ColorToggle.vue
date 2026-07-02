<template>
  <button
    class="relative flex h-9 w-16 items-center rounded-full border border-stone-200 bg-neutral-900 p-1 shadow-inner transition-all duration-300 dark:border-neutral-700"
    :class="{'bg-emerald-600': isSelected, 'bg-neutral-900': !isSelected}"
    type="button"
    :aria-label="site.themeToggle"
    :aria-pressed="isSelected"
    @click="isSelected = !isSelected; onChange(isSelected)"
  >
    <div
      class="flex h-7 w-7 items-center justify-center rounded-full transition-transform duration-300 ease-in-out"
      :class="{'translate-x-7': isSelected, 'translate-x-0': !isSelected}"
    >
      <div
        class="flex h-7 w-7 items-center justify-center rounded-full shadow-sm"
        :class="{'bg-neutral-700': !isSelected, 'bg-white': isSelected}"
      >
        <NuxtImg
          v-if="!isSelected"
          src="/moon.svg"
          :alt="site.moonIconAlt"
          class="w-4 h-4"
        />
        <NuxtImg
          v-if="isSelected"
          src="/sun.svg"
          :alt="site.sunIconAlt"
          class="w-4 h-4"
        />
      </div>
    </div>
  </button>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const { data: appContent } = await useAppContent()
const isSelected = ref(false)
const site = computed(() => appContent.value!.site)
onMounted(() => {
  isSelected.value = (colorMode.value === "light")
})

const onChange = (value: boolean) => {
  colorMode.preference = !!value ? "light" : "dark"
}
</script>
