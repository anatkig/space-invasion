import { computed } from "vue";

const invadersAttack = (
  invadersStore,
  modalText,
  modal,
  lives,
  bulletsLeft
) => {
  lives.resetLives();
  invadersStore.removeAllInvaders();
  bulletsLeft.resetBulletsLeft();
  invadersStore.resetInvadersDestroyed();

  const invaderCycle = setInterval(() => {
    invadersStore.addInvader({
      id: Date.now(),
    });
    const invaders = computed(() =>
      Array.from(document.querySelectorAll(".invader"))
    );
    if (
      invaders.value.some((invader) => {
        return (
          invader.offsetHeight + invader.offsetTop ===
          document.querySelector(".battle-field").offsetHeight
        );
      })
    ) {
      if (lives.$state.lives > 1) {
        lives.subtractLives(1);
        invadersStore.removeAllInvaders();
      } else {
        clearInterval(invaderCycle);
        lives.subtractLives(1);
        modalText.value = "Game Over!";
        modal.value = !modal.value;
      }
    }
  }, 1000);
};

export default invadersAttack;
