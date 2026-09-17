<template>
    <Page :image="contact.image" :isFlipped="false">
        <template #title>
            <PageTitle :content="contact.title"/>
        </template>
        <PageText :content="contact.content"/>
    </Page>
</template>

<script lang="ts" setup>
const { data: appContent } = await useAppContent()
const contact = computed(() => appContent.value!.contact)
</script>
  
