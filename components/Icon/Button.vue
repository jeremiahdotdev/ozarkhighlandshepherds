<template>
    <button
      @click="onClick"
      :aria-label="ariaLabel"
      class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2 dark:bg-emerald-500 dark:text-neutral-950 dark:hover:bg-emerald-400 dark:focus:ring-emerald-400 dark:focus:ring-offset-neutral-900"
    >
      <slot />
    </button>
  </template>
  
  <script setup>
  defineProps({
    onClick: Function,
    ariaLabel: String
  })
  </script>
  
