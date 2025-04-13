<template>
  <main class="s-main">
    <s-admin />
  </main>
</template>

<script setup>
definePageMeta({
  middleware: ['auth'],
});
</script>
