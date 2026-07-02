<template>
  <Page :image="home.image" :isFlipped="false">
    <PageTitle :content="home.title"/>
    <PageText :content="home.content"/>
    <IconList :icons="['/custom_akc.svg','/breeding_rights.svg', '/vet_checked.svg']"/>
  </Page>
</template>
  
<script lang="ts" setup>
  const { data: appContent } = await useAppContent()
  const home = computed(() => appContent.value!.home)
</script>
