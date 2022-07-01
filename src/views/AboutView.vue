<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>

  <div class="about view-style">
    <h1>Space Invasion</h1>
    <div class="main-button-container">
      <RouterLink to="/game">
        <button class="info-item play">Play</button>
      </RouterLink>

      <div class="info">
        <RouterLink to="/aim"><button class="info-item">Aim of the Game</button></RouterLink>

        <RouterLink to="/rules">
          <button class="info-item">How to Play</button>
        </RouterLink>
        <RouterLink to="/hall">
          <button class="info-item">Hall of Records</button>
        </RouterLink>
      </div>

    </div>
  </div>
</template>

<style>
.about {
  text-align: center;
  max-height: 100vh;
  box-sizing: border-box;
}

.view-style {
  background-color: beige;
  height: 100vh;
}

.main-button-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10% 0;
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
  position: static;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.info-item {
  cursor: pointer;
  background-color: black;
  margin: 1%;
  padding: 10px;
  box-shadow: 0 0 3px 3px gray;
  color: white;
  font-size: 1.1rem;
  font-weight: 700;
  position: static;
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
