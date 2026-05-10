<template>
   <div class="mt-8 grid grid-cols-3 items-center gap-4 border-t border-stone-200 pt-6 dark:border-neutral-800">
        <Icon v-for="icon of icons" :key="icon" :src="icon" />
   </div>
</template>
    
<script lang="ts" setup>    
    const props = defineProps<{
      icons:string[],
    }>()
</script>
