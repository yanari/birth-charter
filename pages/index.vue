<script setup>
const { data } = await useFetch('/api/local');
const began = ref(false);

const begin = () => {
  const runtimeConfig = useRuntimeConfig();
  began.value = true;
  console.log(runtimeConfig.apiUrl);
};
{/* <BirthDataForm
    key="form"
    v-if="began"
    :handleSubmit="onSubmit"
    :isButtonLoading="loading"
  /> */}
</script>
<template>
  <Transition mode="out-in">
    <div v-if="began">
      began!
    </div>
    <div key="start-button" v-else>
      <h1>Calculate the dominant element in your birth chart!</h1>
      <Button @onClick="begin">Begin</Button>
    </div>
  </Transition>
</template>
<style scoped>
  /* we will explain what these classes do next! */
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>