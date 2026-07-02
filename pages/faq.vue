<template>
  <Page :image="faq.image" :isFlipped="true">
    <PageTitle :content="faq.title"/>
    <PageText :content="faq.content"/>
  </Page>
</template>
  
<script lang="ts" setup>
  const { data: appContent } = await useAppContent()
  const faq = computed(() => appContent.value!.faq)
</script>
