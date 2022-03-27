<script setup></script>

<template>
  <div class="machine-gun">
    <div class="barrel"></div>
    <div class="foundation"></div>
  </div>
</template>

<style>
.machine-gun {
  width: 70px;
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translate(-50% 0);
}

.barrel {
  margin: auto;
  width: 20px;
  height: 50px;
  background-color: gray;
}
.foundation {
  width: 70px;
  height: 10px;
  color: red;
  background-color: gray;
}
</style>
