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
    },
    async onSubmit(date, latLng) {
      const params = new URLSearchParams({
        time: date,
        latitude: latLng.lat,
        longitude: latLng.lng,
      }).toString();
      const response = await fetch('http://localhost:3000/horoscope?' + params);
      const jsonData = await response.json();
      console.log(jsonData);
    },
  },
  components: { Button, BirthDataForm }
}
</script>
<template>
  <h1>{{ title }}</h1>
  <template v-if="began">
    <BirthDataForm :handleSubmit="onSubmit" />
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