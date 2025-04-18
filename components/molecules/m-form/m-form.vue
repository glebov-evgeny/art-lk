<!-- eslint-disable prettier/prettier -->
<template>
  <form class="m-form" @submit.prevent="sendForm">
    <slot />
    <button type="submit" class="m-form-button">{{ button }}</button>
  </form>
</template>
<script setup>
defineProps({
  button: {
    type: String,
    default: () => {
      return '';
    },
  },
});
const emit = defineEmits(['sendForm']);
const sendForm = () => {
  emit('sendForm');
};
</script>
<style lang="scss">
@import './m-form.scss';
</style>
