import { defineStore } from 'pinia';

export const useAppStore = defineStore({
  id: 'app',
  state: () => {
    const langCookie = useCookie('siteLang');
    return {
      user: {
        email: null,
        uid: null,
      },
      userInMemory: false,
      siteLang: langCookie.value || 'ru',
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
