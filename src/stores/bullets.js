import { defineStore } from 'pinia';

export const useBulletsStore = defineStore({
  id: 'bullets',
  state: () => ({
    bullets: []
  }),

  actions: {
    addBullet(bullet) {
      this.bullets = [...this.bullets, bullet];
    },
    removeBullet(bulletId) {
      this.bullets = [
        ...Array.from(this.bullets).filter(
          (bullet) => bullet.id !== Number(bulletId)
        )
      ];
    },
    resetBullets() {
      this.bullets = [];
    }
  }
});
