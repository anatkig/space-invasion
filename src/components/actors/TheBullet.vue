<script setup>
import { onMounted, reactive, computed } from 'vue';
import { useBulletsStore } from '../../stores/bullets.js';
import { useInvadersStore } from '../../stores/invaders.js';
import { useBulletsLeftStore } from '../../stores/bulletsLeft';
import { useInvadersDestroyedStore } from '../../stores/invadersDestroyed.js';
import { useLevelStore } from '../../stores/level.js';

const bulletsStore = useBulletsStore();
const invadersStore = useInvadersStore();
const bulletsLeftStore = useBulletsLeftStore();
const invadersDestroyedStore = useInvadersDestroyedStore();
const levelStore = useLevelStore();

const { coordinateX, id } = defineProps(['coordinateX', 'id']);
const bullTop = reactive({
  bullTop: document.querySelector('.battle-field').offsetHeight - 60
});

onMounted(() => {
  bulletLogic();
});



const bulletLogic = () => {
  const fieldWidth = document.querySelector('.battle-field')?.offsetWidth;
  const coordinateXInPX = Math.round(fieldWidth/100*coordinateX);
  const topMovement = setInterval(() => {
    bullTop.bullTop -= 3;

    const invaders = computed(() =>
      Array.from(document.querySelectorAll('.invader'))
    );
     invaders.value.forEach((invader) => {
        if (
          bullTop.bullTop >= invader.offsetTop &&
          bullTop.bullTop <= invader.offsetTop + invader.offsetHeight &&
          coordinateXInPX >= invader.offsetLeft &&
          coordinateXInPX <= invader.offsetLeft + invader.offsetWidth
        ) {
          bulletsStore.removeBullet(id);
          invadersStore.removeInvader(invader.id);
          invadersDestroyedStore.addInvadersDestroyed(1);
          if (invadersDestroyedStore.$state.invadersDestroyed % 10 === 0) {
            levelStore.addLevel();
            bulletsLeftStore.addBulletsLeft(100);
          }
  }});

    if (bullTop.bullTop <= -10) {
      clearInterval(topMovement);
      bulletsStore.removeBullet(id);
    }
  }, 1);
};
</script>

<template>
  <div
    :id="id"
    class="bullet"
    :style="{ top: bullTop.bullTop + 'px', left: coordinateX + '%' }"
  ></div>
</template>

<style>
.bullet {
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: pink;
  transform: translateX(-50%);
}
</style>
