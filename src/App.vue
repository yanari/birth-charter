<script>
  import { RouterView } from 'vue-router';
  import BackgroundImage from '@/layouts/BackgroundImage.vue';
  export default {
    components: { RouterView, BackgroundImage },
  }
</script>
<template>
  <BackgroundImage/>
  <RouterView v-slot="{ Component }">
    <Transition mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>
<style scoped>
  .v-enter-active,
  .v-leave-active {
    transition: opacity 1.5s ease-in-out;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>
