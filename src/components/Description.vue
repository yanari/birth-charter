<script>
import Trait from './Trait.vue';
export default {
  props: ['set'],
  components: { Trait },
  mounted() {
  },
}
</script>
<template>
  <div class="description">
    <div v-for="element in set">
      <h3>{{ element.name }}</h3>
      <p>{{ element.description }}</p>
      <ul>
        <Trait v-for="value in element.traits" :trait="value"/>
      </ul>
    </div>
  </div>
</template>
<style scoped>
  .description {
    text-align: start;
    margin-bottom: 3rem;
  }

  p {
    margin-bottom: 1rem;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  ul > li {
    margin: 0 .5rem .5rem 0;
  }

  h3 {
    font-size: 2rem;
  }
</style>