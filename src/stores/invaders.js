import { defineStore } from 'pinia';

export const useInvadersStore = defineStore({
  id: 'invaders',
  state: () => ({
    invaders: []
  }),

  actions: {
    addInvader(invader) {
      this.invaders = [...this.invaders, invader];
    },
    updateInvaderPositionX(positionX, id) {
      const currentInvader = this.invaders.find((invader) => invader.id === id);
      currentInvader.positionX = positionX;
    },

    removeInvader(invaderId) {
      this.invaders = [
        ...Array.from(this.invaders).filter(
          (invader) => invader.id !== Number(invaderId)
        )
      ];
    },
    removeAllInvaders() {
      this.invaders = [];
    }
  }
});
