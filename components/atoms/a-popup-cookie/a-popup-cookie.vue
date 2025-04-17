<!-- eslint-disable prettier/prettier -->
<template>
  <m-popup :max-width="width" @close-popup="popupIsClosed">
    <div class="a-popup-cookie">
      <h2 class="font-popup-title a-popup-cookie-title">
        {{ $t('popup.cookie_title') }}
      </h2>
      <p class="font-popup-text a-popup-cookie-text">
        {{ $t('popup.cookie_text_1') }}
      </p>
      <p class="font-popup-text a-popup-cookie-text">
        {{ $t('popup.cookie_text_2') }}
      </p>
      <button
        class="a-popup-cookie-button"
        @click.stop="popupIsClosedWithAgreement"
      >
        {{ $t('form.agree') }}
      </button>
    </div>
  </m-popup>
</template>
<script setup>
defineProps({
  width: {
    type: String,
    default: () => {
      return '';
    },
  },
});
const emit = defineEmits(['closePopup', 'closePopupWithAgreement']);

const popupIsClosed = () => {
  emit('closePopup');
};

const popupIsClosedWithAgreement = () => {
  emit('closePopupWithAgreement');
};
</script>
<style lang="scss">
@import './a-popup-cookie.scss';
</style>
