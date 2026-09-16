<template>
    <Litter :litter="litter">
        <template #footer>
            <NuxtLink
                to="/litters"
                class="inline-flex w-fit items-center border-b border-primary-border pb-1 font-display text-sm font-bold uppercase tracking-nav text-primary transition hover:border-primary hover:text-primary-strong"
            >
                Past litters
            </NuxtLink>
        </template>
    </Litter>
</template>

<script setup lang="ts">
    const { data: appContent } = await useAppContent()
    const litter = computed(() => [...appContent.value!.breed.litters].reverse()[0])
</script>
