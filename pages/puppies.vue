<template>
    <Litter :litter="litter">
        <template #footer>
          <div class="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
            <NuxtLink
                to="/litters"
                class="inline-flex w-fit items-center border-b border-primary-border pb-1 font-display text-sm font-bold uppercase tracking-nav text-primary transition hover:border-primary hover:text-primary-strong"
            >
                Past litters
            </NuxtLink>
            <a
                href="https://www.instagram.com/ozarkhighlandshepherds/"
                target="_blank"
                rel="noopener noreferrer"
                class="ml-auto inline-flex w-fit items-center border-b border-primary-border pb-1 text-right font-display text-sm font-bold uppercase tracking-nav text-primary transition hover:border-primary hover:text-primary-strong"
            >
                See more on Insta
            </a>
          </div>
        </template>
    </Litter>
</template>

<script setup lang="ts">
    const { data: appContent } = await useAppContent()
    const litter = computed(() => [...appContent.value!.breed.litters].reverse()[0])
</script>
