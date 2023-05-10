<script>
  import { RouterView } from 'vue-router';
  export default {
    components: { RouterView },
  }
</script>
<template>
  <img src="@/assets/background.jpeg"/>
  <RouterView></RouterView>
</template>
<style scoped>
  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-attachment: fixed;
    z-index: -1;
    overflow: auto;
    object-position: right;
    object-fit: cover;
  }
</style>
