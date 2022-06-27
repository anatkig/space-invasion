<script setup>
import { onMounted, reactive } from 'vue';

const { id, randomSize, randomCoordinateX } = defineProps([
  'id',
  'randomSize',
  'randomCoordinateX'
]);

const state = reactive({
  invTop: 0,
  randomSize: randomSize,
  randomCoordinateX: randomCoordinateX,
  speed: 30
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
      top: state.invTop + 'px'
    }"
  />
</template>

<style>
.invader {
  position: absolute;
  background-color: yellow;
  border-radius: 50%;
  /* background: linear-gradient(yellow 75%, black 25%); */
}
</style>
