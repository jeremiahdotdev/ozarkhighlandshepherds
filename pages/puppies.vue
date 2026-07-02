<template>
    <Litter :litter="litter"></Litter>
</template>

<script setup lang="ts">
    const { data: appContent } = await useAppContent()
    const litter = computed(() => [...appContent.value!.breed.litters].reverse()[0])
</script>
