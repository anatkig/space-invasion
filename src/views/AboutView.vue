<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="about">
    <h1>Space Invasion</h1>
    <div class="info">
      <button class="info-item aim">Aim of the Game</button>
      <button class="info-item rules">How to Play</button>
    </div>
    <RouterLink to="/game">
      <button class="info-item play">Play</button>
    </RouterLink>
  </div>
</template>

<style>
.about {
  text-align: center;
  background-color: beige;
  height: 100vh;
}
.about h1 {
  font-weight: 900;
}
.info {
  display: flex;
  justify-content: space-around;
}

.info-item {
  cursor: pointer;
  background-color: black;
  margin: 3%;
  padding: 3%;
  box-shadow: 0 0 3px 3px gray;
  color: white;
  font-weight: 700;
}
.play {
  width: 40%;
  background-color: red;
}
.play a {
  color: white;
  font-weight: 700;
}
</style>
