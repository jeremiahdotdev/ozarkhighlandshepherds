<template>
    <footer class="border-t border-stone-200 bg-white py-5 text-sm text-stone-600 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-400">
        <div class="mx-auto max-w-7xl px-4 text-center">
            <p>&copy; {{ new Date().getFullYear() }} {{ en.copyright }}</p>
        </div>
    </footer>
</template>

<script lang="ts" setup>
    import en from '~/assets/en.json';
</script>
