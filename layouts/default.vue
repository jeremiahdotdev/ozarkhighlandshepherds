<template>
  <div class="relative min-h-screen overflow-hidden bg-background text-foreground antialiased transition-colors duration-700">
    <div
      class="pointer-events-none absolute inset-0 bg-page-splash-light bg-cover bg-center bg-no-repeat opacity-100 transition-opacity duration-700 ease-in-out dark:opacity-0"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute inset-0 bg-page-splash-dark bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-700 ease-in-out dark:opacity-100"
      aria-hidden="true"
    />
    <NavBar />
    <main class="relative z-10 min-h-[calc(100vh-64px)] pt-0 md:pt-16">
      <NuxtPage />
    </main>
    <NavFooter class="relative z-10" />
  </div>
</template>
