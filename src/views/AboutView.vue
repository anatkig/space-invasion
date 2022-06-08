<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
  <div class="about">
    <h1>Space Invasion</h1>
    <div class="info">
      <RouterLink to="/aim"
        ><button class="info-item">Aim of the Game</button></RouterLink
      >

      <RouterLink to="/rules">
        <button class="info-item">How to Play</button></RouterLink
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
  font-size: 3rem;
  font-weight: 700;
  top: 10%;
  box-shadow: 0 0 5px 3px rgb(255, 3, 3);
  text-shadow: 0 -1px 1px rgb(0, 0, 0), 0 1px 1px rgb(0, 0, 0);
  color: rgb(250, 96, 96);
  background-color: rgb(216, 216, 192);
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
.info-item:hover {
  box-shadow: 0 0 6px 6px gray;
}
.info a {
  all: unset;
}
.play {
  width: 40%;
  background-color: red;
  padding: 20px;
  top: 25%;
  font-weight: 700;
  font-size: 2rem;
}
</style>
