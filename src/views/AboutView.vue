<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="about">
    <h1>Space Invasion</h1>
    <div class="info">
      <RouterLink to="/aim"
        ><button class="info-item aim">Aim of the Game</button></RouterLink
      >

      <RouterLink to="/rules">
        <button class="info-item rules">How to Play</button></RouterLink
      >
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
  top: 10%;
  box-shadow: 0 0 5px 3px rgb(255, 3, 3);
  text-shadow: 0 -5px 7px red;
}
.info {
  display: flex;
  justify-content: space-around;
  top: 25%;
}

.info-item {
  cursor: pointer;
  background-color: black;
  margin: 3%;
  padding: 10px;
  box-shadow: 0 0 3px 3px gray;
  color: white;
  font-weight: 700;
}
.info a {
  all: unset;
}
.play {
  width: 40%;
  background-color: red;
  padding: 20px;
  top: 25%;
}
.play a {
  color: white;
  font-weight: 700;
}
</style>
