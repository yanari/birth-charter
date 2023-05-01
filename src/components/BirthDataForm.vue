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
      hour: null,
    }
  },
  methods: {
    submit() {
      // console.log(this.formatDate(this.date));
      console.log(this.latitude, this.longitude);
    },
    getPlace(lat, lng) {
      this.latitude = lat;
      this.longitude = lng;
    },
    previewFormat(date) {
      const formatted = date.toLocaleDateString(navigator.language)
      return formatted;
    }
    // formatDate(date) {
    //   const dateObject = new Date(date);
    //   const isoDate = dateObject.toISOString();
    //   // const formmatedDate = isoDate.replace('.000Z', '.00Z');
    //   return isoDate.replace('.000Z', '.00Z');
    // },
  },
}
</script>
<template>
  <form @submit.prevent="submit">
    <LocationInput :getLatLng="getPlace"/>
    <div class="date-time">
      <DatePicker
        v-model="date"
        :enable-time-picker="false"
        :format="previewFormat"
        placeholder="Which day?"
      />
      <DatePicker
        v-model="hour"
        time-picker
        placeholder="What about the time?"
      />
    </div>
    <Button type="submit">Submit</Button>
  </form>
</template>
<style scoped>
  form > * {
    margin-bottom: .5rem;
  }

  /* form > .date-time {
    display: flex;
    margin-bottom: 1rem;
  } */

  /* form > .date-time > :first-child {
    margin-right: 1rem;
  } */

  /* form .dp__input {
    padding-top: 7px;
    padding-bottom: 7px;
  } */
</style>