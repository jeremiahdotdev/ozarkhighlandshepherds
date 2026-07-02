<template>
    <Page :image="contact.image" :isFlipped="false">
        <PageTitle :content="contact.title"/>
        <PageText :content="contact.content"/>
    </Page>
</template>

<script lang="ts" setup>
const { data: appContent } = await useAppContent()
const contact = computed(() => appContent.value!.contact)
</script>
  
