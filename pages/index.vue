<template>
  <Page :image="home.image" :isFlipped="false">
    <PageTitle :content="home.title"/>
    <PageText :content="home.content"/>
    <IconList :icons="['/icons/badges/custom_akc.svg','/icons/badges/breeding_rights.svg', '/icons/badges/vet_checked.svg']"/>
  </Page>
</template>
  
<script lang="ts" setup>
  const { data: appContent } = await useAppContent()
  const home = computed(() => appContent.value!.home)
</script>
