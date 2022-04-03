<script setup>
import { onMounted, reactive, computed } from "vue";

const { id } = defineProps(["id"]);

const state = reactive({
  invTop: 0,
  randomSize: 0,
  randomCoordinateX: 0,
});
const randomSize = () =>
  (state.randomSize = Math.floor(Math.random() * 30) + 20);

const randomCoordinateX = computed(
  () =>
    (state.randomCoordinateX = Math.floor(
      Math.random() *
        (document.querySelector(".battle-field")?.offsetWidth -
          state.randomSize)
    ))
);

const invTopValue = () => {
  const topMovement = setInterval(() => {
    if (document.querySelector(".pause-button").innerHTML === "Pause") {
      state.invTop += 1;

      if (
        state.invTop + state.randomSize ===
        document.querySelector(".battle-field").offsetHeight
      ) {
        clearInterval(topMovement);
      }
    }
  }, 10);
};

onMounted(() => {
  invTopValue();
  randomSize();
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
    }"
  >
    {{ randomSize.value }}
  </div>
</template>

<style>
.invader {
  position: absolute;
  background-color: yellow;
  border-radius: 50%;
  /* background: linear-gradient(yellow 75%, black 25%); */
}
</style>
