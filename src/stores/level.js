import { defineStore } from "pinia";

export const useLevelStore = defineStore({
  id: "level",

  state: () => ({
    level: 3,
  }),

  actions: {
    addLevel() {
      this.level += 1;
    },
  },
});
