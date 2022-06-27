<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>

    <div>
      <RouterLink to="/">
        <div class="arrow" />
        <h2>To the Main Page</h2>
      </RouterLink>
    </div>

</template>
<style>
.arrow {
  width: 20px;
  height: 20px;
  display: inline-block;
  border-left: solid 1px black;
  border-bottom: solid 1px black;
  transform: rotate(45deg);
}
</style>