<template>
    <div class="flex aspect-square items-center justify-center rounded-[1.25rem] border border-border bg-surface-strong p-5 shadow-icon-panel">
      <NuxtImg :src="src" :alt="site.icon" class="max-h-28 w-full max-w-32 object-contain opacity-90"/>
    </div>
</template>
    
<script lang="ts" setup>    
  const { data: appContent } = await useAppContent()
  const site = computed(() => appContent.value!.site)
  const props = defineProps<{
    src:string,
  }>()
</script>
