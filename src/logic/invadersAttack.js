import { computed } from 'vue';

const invadersAttack = (
  invadersStore,
  modalText,
  modal,
  lives,
  bulletsLeft,
  bulletsStore,
  invadersDestroyed,
  startPauseResume,
  level
) => {
  level.resetLevel();
  lives.resetLives();
  invadersStore.removeAllInvaders();
  bulletsLeft.resetBulletsLeft();
  invadersDestroyed.resetInvadersDestroyed();
  bulletsStore.resetBullets();

  const invaderCycle = setInterval(
    () => {
      if (startPauseResume.value === 'Pause') {
        const randomSize = Math.floor(Math.random() * 30) + 20;
        const randomCoordinateX = Math.floor(
          Math.random() *
            (document.querySelector('.battle-field')?.offsetWidth - randomSize)
        );
         const borderRadius = Math.floor(level.$state.level%6*10);
         const backgroundColors = ["green","yellow","blue","orange","red"]
        invadersStore.addInvader({
          id: Date.now(),
          randomSize: randomSize,
          randomCoordinateX: randomCoordinateX,
          borderRadius:borderRadius,
          backgroundColor: backgroundColors[level.$state.level%4]
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

            const recordInfo = {
              time: new Date().getDate(),
              level: level.$state.level,
              invadersKilled: invadersDestroyed.$state.invadersDestroyed

            }

            const records = JSON.parse(localStorage.getItem("records"));

            if(!records) {
            localStorage.setItem("records",JSON.stringify([recordInfo]))
            } else {
              const recordsTotal = [...records, recordInfo].sort((a,b)=>a.level-b.level);
              localStorage.setItem("records", JSON.stringify(recordsTotal.slice(0,10)));
            }
          }
        }
      }
    },
    2000
  );
};

export default invadersAttack;
