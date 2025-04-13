<template>
  <main class="s-main">
    <s-about />
    <s-moc />
    <s-popup-cookie
      v-if="popupCookieIsShow"
      @close-popup="closePopupCookie"
      @close-popup-with-agreement="setArgeementOnCookie"
    />
  </main>
</template>
<script setup>
const popupCookieIsShow = ref(false);
const userAgreeCookie = useCookie('userAgreeCookie', {
  default: () => null,
  watch: 'shallow',
});

const closePopupCookie = () => {
  popupCookieIsShow.value = false;
};

const setArgeementOnCookie = () => {
  popupCookieIsShow.value = false;
  const userChoice = {
    cookie: 'ok',
    maxAge: 60 * 60 * 24 * 7,
  };
  userAgreeCookie.value = userChoice;
};

const getInformationFromCookie = async () => {
  if (!userAgreeCookie.value) {
    setTimeout(() => {
      popupCookieIsShow.value = true;
    }, 2000);
  }
};

onMounted(() => {
  getInformationFromCookie();
});
</script>
