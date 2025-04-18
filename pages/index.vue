<template>
  <div class="s-layout-wrapper">
    <main class="s-main">
      <s-nav v-model="activeItem" :nav-items="navItems" />
      <div class="s-main-content">
        <Transition name="fade" mode="out-in">
          <component :is="currentComponent" />
        </Transition>
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
import { useAppStore } from '~/store/app';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const authStore = useAppStore();

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

const activeItem = ref(authStore.siteTab);

const navItems = computed(() => [
  {
    title: t('header.main'),
    class: 'main',
    icon: 'mdi-home',
  },
  {
    title: t('header.arts'),
    class: 'arts',
    icon: 'mdi-palette',
  },
  {
    title: t('header.settings'),
    class: 'settings',
    icon: 'mdi-cog',
  },
  {
    title: t('header.user'),
    class: 'user',
    icon: 'mdi-account-circle-outline',
  },
]);

const componentMap = {
  main: defineAsyncComponent(
    () => import('@/components/sections/s-home/s-home.vue'),
  ),
  arts: defineAsyncComponent(
    () => import('@/components/sections/s-arts/s-arts.vue'),
  ),
  settings: defineAsyncComponent(
    () => import('@/components/sections/s-settings/s-settings.vue'),
  ),
  user: defineAsyncComponent(
    () => import('@/components/sections/s-profile/s-profile.vue'),
  ),
};

const currentComponent = computed(() => componentMap[activeItem.value]);

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

watch(activeItem, (newTab) => {
  authStore.setTab(newTab);
});

onMounted(() => {
  getInformationFromCookie();
});
</script>
