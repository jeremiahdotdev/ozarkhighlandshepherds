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
import { toLitterSlug } from "~/utils/litterSlug";

const route = useRoute();
const { data: appContent } = await useAppContent();
const slug = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug;
const litter = computed(() =>
  appContent.value!.breed.litters.find((item) => item.puppies?.length && toLitterSlug(item.name) === slug)
);

if (!litter.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Litter not found",
  });
}
</script>
