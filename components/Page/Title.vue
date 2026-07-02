<template>
    <h1 class="mb-6 max-w-2xl font-display text-[2.85rem] font-normal leading-none tracking-[-0.03em] text-foreground border-b border-primary-border sm:text-[3.5rem]">{{ content }}</h1>
</template>
  
<script lang="ts" setup>
    const props = defineProps<{
        content: string
    }>();
</script>
