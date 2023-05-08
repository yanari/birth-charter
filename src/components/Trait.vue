<script>
export default {
  props: ['trait']
}
</script>
<template>
  <li>
    <span>
     {{ trait }}
    </span>
  </li>
</template>
<style scoped>
  li {
    border-radius: 16px;
    background-color: red;
    padding: .25rem .5rem;
    display: inline-block;
    list-style: none;
    /* margin: .5rem; */
  }
</style>