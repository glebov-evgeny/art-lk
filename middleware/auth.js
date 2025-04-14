import { useAppStore } from '~/store/app';

export default defineNuxtRouteMiddleware(() => {
  const appStore = useAppStore();
  const userInformationCookie = useCookie('userInformation');

  const storeUserInMemory = appStore.userInMemory;
  const cookieUserInfo = userInformationCookie.value;

  const isAuthorized = storeUserInMemory && !!cookieUserInfo;

  if (!isAuthorized) {
    return navigateTo('/login');
  }
});
