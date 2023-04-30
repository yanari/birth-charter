<script>
 export default {
  emits: ['onClick']
 }
</script>
<template>
  <button @click="$emit('onClick')">
    <slot></slot>
  </button>
</template>
<style scoped>
  button {
    appearance: none;
    background-color: #712F79;
    border-width: 0;
    /* border: 2px solid hsla(160, 100%, 37%, 1); */
    border-radius: 2rem;
    color: white;
    padding: 1rem 3rem;
    font-size: 1.5rem;
    transition: background-color .2s;
  }
  
  button:hover,
  button:focus {
    background-color: #63216B;
  }
</style>