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
      time: {
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
      },
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
    previewFormat(date) {
      const formatted = date.toLocaleDateString(navigator.language)
      return formatted;
    },
    formatDate(date) {
      const fullDateObject = new Date(date);
      const onlyDate = fullDateObject.toISOString().split('T')[0];

      const { hours, minutes } = this.time;

      const formattedHours = `${hours}`.padStart(2, '0');
      const formattedMinutes = `${minutes}`.padStart(2, '0');
      
      return `${onlyDate}T${formattedHours}:${formattedMinutes}:00.00Z`;
    },
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
        v-model="time"
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

  form > .date-time {
    display: flex;
    margin-bottom: 1rem;
  }

  form > .date-time > :first-child {
    margin-right: .5rem;
  }

  form .dp__input {
    padding-top: 7px;
    padding-bottom: 7px;
  }
</style>