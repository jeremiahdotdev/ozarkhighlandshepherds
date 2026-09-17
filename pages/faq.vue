<template>
  <Page :image="faq.image" :isFlipped="true">
    <template #title>
      <PageTitle :content="faq.title"/>
    </template>
    <PageText :content="faq.content"/>
  </Page>
</template>
  
<script lang="ts" setup>
  const { data: appContent } = await useAppContent()
  const faq = computed(() => appContent.value!.faq)
</script>
