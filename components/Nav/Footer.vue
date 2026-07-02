<template>
    <footer class="border-t border-stone-200 bg-white py-5 text-sm text-stone-600 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-400">
        <div class="relative mx-auto max-w-7xl px-4 text-center">
            <p>&copy; {{ new Date().getFullYear() }} {{ site.copyright }}</p>
            <a
              href="https://jeremiah.dev"
              target="_blank"
              rel="noreferrer"
              class="mt-3 inline-block text-xs font-medium text-stone-500 transition hover:text-emerald-700 dark:text-neutral-500 dark:hover:text-emerald-300 sm:absolute sm:bottom-0 sm:right-4 sm:mt-0"
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
