<template>
  <h1>result</h1>
  <button @click="callApi">set item</button>
  <p>{{ result }}</p>
</template>
<script setup>
const result = ref(null);
const callApi = () => {
  const { data } = useFetch('api/chart');
  result.value = data;
  useFetch('api/local', {method: 'POST', body: data});
};
</script>