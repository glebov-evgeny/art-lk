// eslint-disable-next-line no-shadow
export default defineNuxtRouteMiddleware(async () => {
  const userInformation = useCookie('userInformation');
  if (!userInformation.value) {
    console.log('clear');
    return navigateTo('/login');
  }
});
