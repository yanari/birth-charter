<script>
export default {}
</script>
<template>
  <hr/>
</template>
<style scoped>
  hr {
    overflow: visible; /* For IE */
    height: 30px;
    border-style: solid;
    border-color: var(--color-heading);
    border-width: 1px 0 0 0;
    border-radius: 20px;
    margin: 2rem 0;
  }

  hr:before { /* Not really supposed to work, but does */
    display: block;
    content: "";
    height: 30px;
    margin-top: -31px;
    border-style: solid;
    border-color: var(--color-heading);
    border-width: 0 0 1px 0;
    border-radius: 20px;
  }
</style>