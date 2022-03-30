import { defineStore } from "pinia";

export const useLivesStore = defineStore({
  id: "lives",

  state: () => ({
    lives: 3,
  }),

  actions: {
    addLives(num) {
      this.lives += num;
    },

    subtractLives(num) {
      this.lives -= num;
    },
  },
});
