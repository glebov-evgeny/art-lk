<template>
  <section
    class="m-image"
    :style="{ backgroundImage: `url(${image})` }"
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
