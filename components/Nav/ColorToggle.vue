<template>
  <button
    class="relative flex h-9 w-16 items-center rounded-full border border-stone-200 bg-neutral-900 p-1 shadow-inner transition-all duration-300 dark:border-neutral-700"
    :class="{'bg-emerald-600': isSelected, 'bg-neutral-900': !isSelected}"
    type="button"
    aria-label="Toggle color theme"
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
          alt="Moon Icon"
          class="w-4 h-4"
        />
        <NuxtImg
          v-if="isSelected"
          src="/sun.svg"
          alt="Sun Icon"
          class="w-4 h-4"
        />
      </div>
    </div>
  </button>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const isSelected = ref(false)
onMounted(() => {
  isSelected.value = (colorMode.value === "light")
})

const onChange = (value: string) => {
  colorMode.preference = !!value ? "light" : "dark"
}
</script>
