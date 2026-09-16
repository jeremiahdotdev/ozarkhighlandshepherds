<template>
  <div class="rounded-[1.5rem] border border-border bg-surface-soft p-5 shadow-panel">
    <div v-if="showControls" class="mb-4 flex items-center justify-between gap-3">
      <p class="text-sm font-semibold uppercase tracking-metric text-primary-hover">
        {{ currentIndex + 1 }} / {{ total }}
      </p>
      <div class="flex gap-2">
        <button
          v-for="position in total"
          :key="position"
          class="h-2.5 rounded-full transition-all"
          :class="position - 1 === currentIndex ? 'w-8 bg-primary-hover' : 'w-2.5 bg-border hover:bg-border-strong'"
          type="button"
          :aria-label="`${viewItemLabel} ${position}`"
          @click="emit('select', position - 1)"
        />
      </div>
    </div>
    <div
      class="flex items-center gap-3"
      :class="showControls ? 'min-h-28 justify-between sm:min-h-40' : 'justify-center'"
    >
      <IconButton v-if="showControls" :onClick="() => emit('previous')" :ariaLabel="previousLabel">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </IconButton>
      <slot />
      <IconButton v-if="showControls" :onClick="() => emit('next')" :ariaLabel="nextLabel">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </IconButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  currentIndex: number;
  total: number;
  previousLabel: string;
  nextLabel: string;
  viewItemLabel: string;
}>();

const emit = defineEmits<{
  previous: [];
  next: [];
  select: [index: number];
}>();

const showControls = computed(() => props.total > 1);
</script>
