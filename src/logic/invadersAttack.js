import { computed } from 'vue';

const invadersAttack = (
  invadersStore,
  modalText,
  modal,
  lives,
  bulletsLeft,
  invadersDestroyed,
  startPauseResume,
  level
) => {
  level.resetLevel();
  lives.resetLives();
  invadersStore.removeAllInvaders();
  bulletsLeft.resetBulletsLeft();
  invadersDestroyed.resetInvadersDestroyed();

  const invaderCycle = setInterval(
    () => {
      if (startPauseResume.value === 'Pause') {
        invadersStore.addInvader({
          id: Date.now()
        });
        const invaders = computed(() =>
          Array.from(document.querySelectorAll('.invader'))
        );
        if (
          invaders.value.some((invader) => {
            return (
              invader.offsetHeight + invader.offsetTop ===
              document.querySelector('.battle-field').offsetHeight
            );
          })
        ) {
          if (lives.$state.lives > 1) {
            lives.subtractLives(1);
            invadersStore.removeAllInvaders();
            modalText.value = 'One life has been taken!';
            modal.value = !modal.value;
            setTimeout(() => {
              modal.value = !modal.value;
            }, 3000);
          } else {
            clearInterval(invaderCycle);
            lives.subtractLives(1);
            modalText.value = 'Game Over!';
            modal.value = !modal.value;
            startPauseResume.value = 'Restart';
          }
        }
      }
    },
    level.$state.level ? 2000 / level.$state.level : 2000
  );
};

export default invadersAttack;
