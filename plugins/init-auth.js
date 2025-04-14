import { useAppStore } from '~/store/app';

export default defineNuxtPlugin((nuxtApp) => {
  const appStore = useAppStore();
  appStore.syncUserFromCookie();
});
