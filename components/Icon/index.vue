<template>
    <div class="flex aspect-square items-center justify-center rounded-lg border border-stone-200 bg-stone-50 p-5 dark:border-neutral-800 dark:bg-neutral-950/60">
      <NuxtImg :src="src" alt="Icon" class="max-h-28 w-full max-w-32 object-contain opacity-90"/>
    </div>
</template>
    
<script lang="ts" setup>    
  const props = defineProps<{
    src:string,
  }>()
</script>
