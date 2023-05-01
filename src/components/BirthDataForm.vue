<script>
import DatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

import Button from './Button.vue';
import LocationInput from './LocationInput.vue'

export default {
  components: { DatePicker, Button, LocationInput },
  data() {
    return {
      latitude: null,
      longitude: null,
      date: null,
    }
  },
  methods: {
    submit() {
      console.log(this.formatDate(this.date));
      console.log(this.latitude, this.longitude);
    },
    getPlace(lat, lng) {
      this.latitude = lat;
      this.longitude = lng;
    },
    formatDate(date) {
      const dateObject = new Date(date);
      const isoDate = dateObject.toISOString();
      // const formmatedDate = isoDate.replace('.000Z', '.00Z');
      return isoDate.replace('.000Z', '.00Z');
    },
  },
}
</script>
<template>
  <form @submit.prevent="submit">
    <LocationInput :getLatLng="getPlace"/>
    <DatePicker v-model="date" placeholder="When?"></DatePicker>
    <Button type="submit">Submit</Button>
  </form>
</template>
<style scoped>
  form > * {
    margin-bottom: .5rem;
  }

  form > :last-child {
    margin-top: 1rem;
  }
</style>