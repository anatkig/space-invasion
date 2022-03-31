<script setup>
const { text } = defineProps(["text"]);
</script>

<template>
  <div class="modal">
    <div class="control-buttons" v-if="text === 'Start the Game!'">
      <button @click="$emit('flipModal')" class="modal-text">
        {{ text }}
      </button>
    </div>
    <div class="game-over" v-else>{{ text }}</div>
  </div>
</template>

<style>
.modal {
  position: absolute;
  z-index: 1000;
  width: 50%;
  height: 50%;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgb(230, 230, 0);

  box-shadow: 0px 0px 5px 10px rgb(107, 107, 0);

  display: flex;
  justify-content: center;
}
.control-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.modal-text {
  background-color: rgb(200, 200, 0);
  cursor: pointer;
  border-radius: 2%;

  font-size: 2rem;
  font-weight: 900;
  margin: auto;
}
.modal-text:hover {
  background-color: rgb(255, 255, 0);
}
.game-over {
  font-size: 2rem;
  font-weight: 900;
  margin: auto;
}
</style>
