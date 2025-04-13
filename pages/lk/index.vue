<template>
  <main class="s-main">
    <s-lk />
    <s-loader-fast />
  </main>
</template>

<script setup>
definePageMeta({
  middleware: ['auth'],
});
</script>
