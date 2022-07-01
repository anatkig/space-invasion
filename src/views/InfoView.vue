<script setup>
import { RouterLink } from 'vue-router';
const { pageContent } = defineProps(['pageContent']);
</script>

<template>
  <div class="aim view-style">
    <div>
      <RouterLink to="/">
        <div class="arrow" />
        <h2>To the Main Page</h2>
      </RouterLink>
    </div>

    <h1>{{ pageContent.title }}</h1>
    <div class="content" v-html="pageContent.content"></div>
  </div>
</template>

<style>
.aim {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
}

.arrow {
  width: 20px;
  height: 20px;
  display: inline-block;
  border-left: solid 1px black;
  border-bottom: solid 1px black;
  transform: rotate(45deg);
}

h2 {
  display: inline-block;
  text-decoration: underline;
}

.content {
  margin: 3%;
}
</style>
