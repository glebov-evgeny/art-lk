<template>
  <main class="s-main-login">
    <m-image :image="backgroundImage" />
    <s-login />
  </main>
</template>
<script setup>
const backgroundImage = ref('/images/login/login.png');

definePageMeta({
  layout: 'login',
});
</script>
