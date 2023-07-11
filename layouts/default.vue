<script setup>
</script>
<template>
  <div id="root">
    <div class="background-image">
      <img src="~/assets/images/background.jpeg"/>
    </div>
    <main>
      <slot/>
    </main>
  </div>
</template>
<style scoped>
  #root {
    height: 100vh;
    width: 100vw;
    font-weight: normal;
    overflow: auto;
  }

  main {
    text-align: center;
    padding: 2rem;
    max-width: 1280px;
    margin: 0 auto;
  }
  .background-image {
    background-color: rgb(22, 18, 19);
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
  }

  img {
    height: 100%;
    width: 100%;
    background-attachment: fixed;
    object-position: right;
    object-fit: cover;
    overflow: auto;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.6s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>