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
    border-radius: 2rem;
    color: var(--color-heading);
    padding: 1rem 5rem;
    font-size: 2rem;
    transition: background-color .3s;
    text-transform: uppercase;
  }

  button:disabled,
  button[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  button:hover:enabled,
  button:focus:enabled {
    background-color: var(--button-color-hover);
  }
</style>