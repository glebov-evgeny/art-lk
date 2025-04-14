import { useAppStore } from '~/stores/app';

export default defineNuxtRouteMiddleware(() => {
  const appStore = useAppStore();
  const userInformationCookie = useCookie('userInformation');

  const storeUserInfo = appStore.userInformation;
  const cookieUserInfo = userInformationCookie.value;

  const isAuthorized = storeUserInfo !== null && !!cookieUserInfo;

  if (!isAuthorized) {
    return navigateTo('/login');
  }
});
