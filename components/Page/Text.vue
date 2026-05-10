<template>
    <div v-html="parsedContent" class="page-copy flex flex-col gap-5" />
</template>
  
<script lang="ts" setup>
  import { parseMarkdown } from "~/composables/parseMarkdown.ts"
  const props = defineProps<{
    content: string[];
  }>();
  
  const parsedContent = parseMarkdown(props.content);
</script>

<style scoped>
.page-copy :deep(p) {
  margin: 0;
}

.page-copy :deep(strong) {
  color: rgb(28 25 23);
  font-weight: 700;
}

.dark .page-copy :deep(strong) {
  color: rgb(245 245 245);
}

.page-copy :deep(a) {
  color: rgb(4 120 87);
  font-weight: 600;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
}

.page-copy :deep(a:hover) {
  color: rgb(6 95 70);
}
</style>
  
