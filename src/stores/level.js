import { defineStore } from 'pinia';

export const useLevelStore = defineStore({
  id: 'level',

  state: () => ({
    level: 0
  }),

  actions: {
    addLevel() {
      this.level += 1;
    },
    resetLevel() {
      this.level = 0;
    }
  }
});
