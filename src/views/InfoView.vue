<script setup>
const { pageContent } = defineProps(["pageContent"]);
</script>

<template>
  <div class="aim">
    <h1>{{ pageContent.title }}</h1>
    <div class="content" v-html="pageContent.content"></div>
  </div>
</template>
