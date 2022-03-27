<script setup>
import { onMounted, reactive } from "vue";

const state = reactive({
  invTop: 0,
  randomSize: 0,
  randomCoordinateX: 0,
});
const randomSize = () =>
  (state.randomSize = Math.floor(Math.random() * 30) + 20);
const randomCoordinateX = () =>
  (state.randomCoordinateX = Math.floor(
    Math.random() *
      (document.querySelector(".battle-field").offsetWidth - state.randomSize)
  ));

const invTopValue = () => {
  const topMovement = setInterval(() => {
    state.invTop += 1;

    if (
      state.invTop + state.randomSize ===
      document.querySelector(".battle-field").offsetHeight
    ) {
      clearInterval(topMovement);
    }
  }, 10);
};

onMounted(() => {
  invTopValue();
  randomCoordinateX();
  randomSize();
});
</script>

<template>
  <div
    class="invador"
    :style="{
      width: state.randomSize + 'px',
      height: state.randomSize + 'px',
      left: state.randomCoordinateX + 'px',
      top: state.invTop + 'px',
    }"
  >
    {{ randomSize.value }}
  </div>
</template>

<style>
.invador {
  position: absolute;
  background-color: yellow;
  border-radius: 50%;
  /* background: linear-gradient(yellow 75%, black 25%); */
}
</style>
