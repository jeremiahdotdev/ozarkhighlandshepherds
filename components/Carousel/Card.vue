<template>
  <div class="rounded-lg border border-stone-200 bg-stone-50 p-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-950/60">
    <div class="mb-4 flex items-center justify-between gap-3">
      <p class="text-sm font-semibold uppercase tracking-wide text-emerald-800 dark:text-emerald-300">
        {{ currentIndex + 1 }} / {{ total }}
      </p>
      <div class="flex gap-2">
        <button
          v-for="position in total"
          :key="position"
          class="h-2.5 rounded-full transition-all"
          :class="position - 1 === currentIndex ? 'w-8 bg-emerald-700 dark:bg-emerald-400' : 'w-2.5 bg-stone-300 hover:bg-stone-400 dark:bg-neutral-700 dark:hover:bg-neutral-600'"
          type="button"
          :aria-label="`View item ${position}`"
          @click="emit('select', position - 1)"
        />
      </div>
    </div>
    <div class="flex min-h-40 items-center justify-between gap-3">
      <IconButton :onClick="() => emit('previous')" ariaLabel="Previous">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </IconButton>
      <slot />
      <IconButton :onClick="() => emit('next')" ariaLabel="Next">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </IconButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  currentIndex: number;
  total: number;
}>();

const emit = defineEmits<{
  previous: [];
  next: [];
  select: [index: number];
}>();
</script>
