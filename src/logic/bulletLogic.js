import { computed } from "vue";

const bulletLogic = (
  bulletsStore,
  invadersStore,
  bullTop,
  invadersDestroyed
) => {
  const topMovement = setInterval(() => {
    bullTop.bullTop -= 1;
    const bullets = computed(() =>
      Array.from(document.querySelectorAll(".bullet"))
    );
    const invaders = computed(() =>
      Array.from(document.querySelectorAll(".invader"))
    );

    bullets.value.forEach((bullet) =>
      invaders.value.forEach((invader) => {
        if (
          bullet.offsetTop >= invader.offsetTop &&
          bullet.offsetTop <= invader.offsetTop + invader.offsetHeight &&
          bullet.offsetLeft >= invader.offsetLeft &&
          bullet.offsetLeft <= invader.offsetLeft + invader.offsetWidth
        ) {
          bulletsStore.removeBullet(bullet.id);
          invadersStore.removeInvader(invader.id);
          invadersDestroyed.addInvadersDestroyed(1);
        }
      })
    );

    if (bullTop.bullTop <= -10) {
      clearInterval(topMovement);
      bullets.value.length && bulletsStore.removeBullet(bullets.value[0].id);
    }
  }, 10);
};

export default bulletLogic;
