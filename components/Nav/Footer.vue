<template>
    <footer class="border-t border-border-muted backdrop-blur py-5 text-sm text-foreground-secondary">
        <div class="relative mx-auto max-w-7xl px-4 text-center">
            <p>&copy; {{ new Date().getFullYear() }} {{ site.copyright }}</p>
            <a
              href="https://jeremiah.dev"
              target="_blank"
              rel="noreferrer"
              class="mt-3 inline-block text-xs font-medium tracking-subtle text-foreground-muted transition hover:text-primary sm:absolute sm:bottom-0 sm:right-4 sm:mt-0"
            >
              jeremiah.dev
            </a>
        </div>
    </footer>
</template>

<script lang="ts" setup>
    const { data: appContent } = await useAppContent()
    const site = computed(() => appContent.value!.site)
</script>
