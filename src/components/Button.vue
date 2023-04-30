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
    background-color: var(--button-color);
    border-width: 0;
    cursor: pointer;
    /* border: 2px solid hsla(160, 100%, 37%, 1); */
    border-radius: 2rem;
    color: var(--vt-c-white-soft);
    padding: 1rem 5rem;
    font-size: 2rem;
    transition: background-color .3s;
    text-transform: uppercase;
  }
  
  button:hover,
  button:focus {
    background-color: var(--button-color-hover);
  }
</style>