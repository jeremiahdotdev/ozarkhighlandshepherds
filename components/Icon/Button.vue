<template>
    <button
      @click="onClick"
      :aria-label="ariaLabel"
      class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-button transition hover:bg-primary-strong focus:outline-none focus:ring-2 focus:ring-primary-hover focus:ring-offset-2 focus:ring-offset-background"
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
  
