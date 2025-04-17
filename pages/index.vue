<template>
  <div class="s-layout-wrapper">
    <main class="s-main">
      <s-nav />
      <div class="s-main-content">
        <s-moc />
      </div>
      <a-popup-cookie
        v-if="popupCookieIsShow"
        :width="480"
        @close-popup="closePopupCookie"
        @close-popup-with-agreement="setArgeementOnCookie"
      />
    </main>
  </div>
</template>
<script setup>
definePageMeta({
  middleware: 'auth',
});

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
