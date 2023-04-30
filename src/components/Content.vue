<script>
import Button from './Button.vue';
import BirthDataForm from './BirthDataForm.vue';

export default {
  data() {
    return {
      title: 'Calculate your dominant element!',
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
  <main>
    <template v-if="began">
      <BirthDataForm />
    </template>
    <template v-else>
      <Button @onClick="begin">Begin</Button>
    </template>
  </main>
</template>
<style scoped>
  
</style>