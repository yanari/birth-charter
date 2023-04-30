<script>
import Button from './Button.vue';
import BirthDataForm from './BirthDataForm.vue';

export default {
  data() {
    return {
      title: 'Calculate the dominant element in your birth chart!',
      began: false,
    };
  },
  methods: {
    begin() {
      this.title = 'Enter your birth data:';
      this.began = true;
    }
  },
  components: { Button, BirthDataForm }
}
</script>
<template>
  <h1>{{ title }}</h1>
  <template v-if="began">
    <BirthDataForm />
  </template>
  <template v-else>
    <Button @onClick="begin">Begin</Button>
  </template>
</template>
<style scoped>
  h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
</style>