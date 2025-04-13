import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'user-store',
  state: () => {
    return {
      email: null,
      uid: null,
    };
  },

  actions: {
    setUser(email, uid) {
      this.email = email;
      this.uid = uid;
    },
  },
});
