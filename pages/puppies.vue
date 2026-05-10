<template>
    <Litter :litter="litter"></Litter>
</template>

<script setup>
    import breed from '~/assets/breed.json'
    const litter = [...breed.litters].reverse()[0]
</script>
