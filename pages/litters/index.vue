<template>
    <Litter :breed="breed"></Litter>
</template>

<script setup lang="ts">
    const { data: appContent } = await useAppContent()
    const breed = computed(() => appContent.value!.breed)
</script>
