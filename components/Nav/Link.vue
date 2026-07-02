<template>
  <NuxtLink
    v-if="!route?.disabled"
    :to="route.path"
    class="font-display font-bold block border-b border-transparent px-3 py-2 text-xs tracking-nav text-foreground-secondary transition-colors duration-200 hover:border-primary-border hover:text-primary-hover md:inline-block"
    active-class="border-primary-border text-primary hover:border-primary-border hover:text-primary"
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
