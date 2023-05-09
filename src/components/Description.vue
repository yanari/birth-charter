<script>
import Trait from './Trait.vue';
export default {
  props: ['set'],
  components: { Trait },
}
</script>
<template>
  <div class="description">
    <div class="element-description" v-for="element in set">
      <h3 :style="{color: element.color}">{{ element.name }}</h3>
      <p>{{ element.description }}</p>
      <ul>
        <Trait
          v-for="value in element.traits"
          :trait="value"
          :color="element.color"
        />
      </ul>
    </div>
  </div>
</template>
<style scoped>
  .description {
    text-align: start;
    margin: 2rem 0;
  }

  .element-description {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  ul > li {
    margin: 0 .5rem .5rem 0;
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
</style>