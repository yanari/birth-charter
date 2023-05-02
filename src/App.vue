<script>
  import Content from './components/Content.vue';
  export default {
    components: {
      Content,
    }
  }
</script>
<template>
  <main>
    <Transition>
      <Content />
    </Transition>
  </main>
</template>
<style scoped>
  main {
    text-align: center;
  }
</style>
