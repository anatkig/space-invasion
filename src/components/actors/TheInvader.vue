<script setup>
import { onMounted, reactive } from 'vue';
import { useLevelStore } from '../../stores/level';

const level = useLevelStore().$state.level;

const { id, randomSize, randomCoordinateX } = defineProps([
  'id',
  'randomSize',
  'randomCoordinateX',
  'borderRadius',
  'backgroundColor'
]);

const state = reactive({
  invTop: 0,
  randomSize: randomSize,
  randomCoordinateX: randomCoordinateX,
  speed: Math.floor(30/level + 20)
});

const invTopValue = () => {
  const topMovement = setInterval(() => {
    if (document.querySelector('.pause-button').innerHTML === 'Pause') {
      state.invTop += 1;

      if (
        state.invTop + state.randomSize ===
        document.querySelector('.battle-field').offsetHeight
      ) {
        clearInterval(topMovement);
      }
    }
  }, state.speed);
};

onMounted(() => {
  invTopValue();
});
</script>

<template>
  <div
    :id="id"
    class="invader"
    :style="{
      width: state.randomSize + 'px',
      height: state.randomSize + 'px',
      left: randomCoordinateX + 'px',
      top: state.invTop + 'px',
      backgroundColor: backgroundColor,
      borderRadius: borderRadius +'%'
    }"
  />
</template>

<style>
.invader {
  position: absolute;
  /* background: linear-gradient(yellow 75%, black 25%); */
}
</style>
