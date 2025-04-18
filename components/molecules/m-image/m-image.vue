<template>
  <section
    class="m-image"
    :style="{ background: `url(${image}), rgb(1 50 86)` }"
  ></section>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss">
@import 'm-image';
</style>
