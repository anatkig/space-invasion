import { defineStore } from "pinia";

export const useInvadersStore = defineStore({
  id: "invaders",
  state: () => ({
    invaders: [],
  }),

  actions: {
    addInvader(invader) {
      this.invaders = [...this.invaders, invader];
    },
    removeInvader(invaderId) {
      this.invaders = [
        ...Array.from(this.invaders).filter(
          (invader) => invader.id !== Number(invaderId)
        ),
      ];
    },
  },
});
