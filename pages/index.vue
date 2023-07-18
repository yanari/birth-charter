<script setup>
import { useLoading } from '~/composables/states';

const hasBegan = ref(false);
const isLoading = useLoading();

const begin = () => {
  hasBegan.value = true;
  $fetch('/api/local', {method: 'DELETE'});
};

</script>
<template>
  <Transition mode="out-in">
    <div v-if="hasBegan">
      <Form
        key="form"
        v-if="hasBegan"
        :isButtonLoading="isLoading"
      />
    </div>
    <div key="start-button" v-else>
      <h1>Calculate the dominant element in your birth chart!</h1>
      <Button @onClick="begin">Begin</Button>
    </div>
  </Transition>
</template>
<style scoped>
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>