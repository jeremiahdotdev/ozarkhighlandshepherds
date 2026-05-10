<template>
    <div v-html="parsedContent" class="flex flex-col gap-5" />
</template>
  
<script lang="ts" setup>
  import { parseMarkdown } from "~/composables/parseMarkdown.ts"
  const props = defineProps<{
    content: string[];
  }>();
  
  const parsedContent = parseMarkdown(props.content);
</script>
  
