<template>
  <NuxtLink
    v-if="!route?.disabled"
    :to="route.path"
    class="block rounded-full px-4 py-2 text-sm font-medium text-stone-700 transition hover:bg-emerald-50 hover:text-emerald-800 md:inline-block dark:text-neutral-300 dark:hover:bg-emerald-950/50 dark:hover:text-emerald-200"
    active-class="bg-emerald-700 text-white hover:bg-emerald-700 hover:text-white dark:bg-emerald-500 dark:text-neutral-950 dark:hover:bg-emerald-500 dark:hover:text-neutral-950"
    @click="handleClick"
  >
    {{ route.label }}
  </NuxtLink>
</template>
  
<script lang="ts" setup>
  import { type Route } from '~/types/route'
  const event = "linkClicked"
  const emit = defineEmits([event]); // Define the event
  const handleClick = () => {
    emit(event, true);
  }
  const props = defineProps<{
    route: Route,
  }>()
</script>
