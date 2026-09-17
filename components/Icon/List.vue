<template>
   <div class="mx-auto grid w-full max-w-lg grid-cols-3 items-center gap-4">
        <Icon v-for="icon of icons" :key="icon" :src="icon" />
   </div>
</template>
    
<script lang="ts" setup>    
    const props = defineProps<{
      icons:string[],
    }>()
</script>
