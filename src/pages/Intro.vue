<script>
import Button from '../components/Button.vue';
import BirthDataForm from '../components/BirthDataForm.vue';

export default {
  data() {
    return {
      began: false,
    };
  },
  methods: {
    begin() {
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
      this.$router.push('/result');
    },
  },
  components: { Button, BirthDataForm }
}
</script>
<template>
  <main>
    <Transition mode="out-in">
      <BirthDataForm key="form" v-if="began" :handleSubmit="onSubmit" />
      <div key="start-button" v-else>
        <h1>Calculate the dominant element in your birth chart!</h1>
        <Button @onClick="begin">Begin</Button>
      </div>
    </Transition>
  </main>
</template>
<style scoped>
  /* we will explain what these classes do next! */
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>