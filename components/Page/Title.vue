<template>
    <h1 class="mb-6 max-w-2xl text-4xl font-bold leading-tight text-stone-950 sm:text-5xl dark:text-white">{{ content }}</h1>
</template>
  
<script lang="ts" setup>
    const props = defineProps<{
        content: string
    }>();
</script>
