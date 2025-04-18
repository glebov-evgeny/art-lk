import { useAppStore } from '~/store/app';

export default defineNuxtPlugin(() => {
  const appStore = useAppStore();
  appStore.syncUserFromCookie();
});
