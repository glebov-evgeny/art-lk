import { defineStore } from 'pinia';

export const useAppStore = defineStore({
  id: 'app',
  state: () => {
    const langCookie = useCookie('siteLang');
    const themeCookie = useCookie('siteTheme');
    return {
      user: {
        email: null,
        uid: null,
      },
      userInMemory: false,
      siteLang: langCookie.value || 'ru',
      siteTheme: themeCookie.value || 'day',
    };
  },

  actions: {
    setUser(email, uid) {
      this.user.email = email;
      this.user.uid = uid;
    },
    setLang(lang) {
      const localeCookie = useCookie('siteLang');
      localeCookie.value = lang;
      this.siteLang = lang;
    },
    setTheme(theme) {
      const themeCookie = useCookie('siteTheme');
      themeCookie.value = theme;
      this.siteTheme = theme;
    },
    setUserInMemory(value = true) {
      this.userInMemory = value;
    },
    syncUserFromCookie() {
      const userInformation = useCookie('userInformation');
      if (userInformation.value) {
        this.setUserInMemory(true);
      } else {
        this.setUserInMemory(false);
      }
    },
  },
});
