<template>
  <Page :image="home.image" :isFlipped="false">
    <template #title>
      <PageTitle :content="home.title"/>
    </template>
    <PageText :content="home.content"/>
    <template #image-overlay>
      <IconList :icons="['/icons/badges/custom_akc.svg','/icons/badges/breeding_rights.svg', '/icons/badges/vet_checked.svg']"/>
    </template>
  </Page>
</template>
  
<script lang="ts" setup>
  const { data: appContent } = await useAppContent()
  const home = computed(() => appContent.value!.home)
</script>
