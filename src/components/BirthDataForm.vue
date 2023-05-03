<script>
import DatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

import Button from './Button.vue';
import LocationInput from './LocationInput.vue'

import { LatLng } from '../models/LatLng';

export default {
  components: { DatePicker, Button, LocationInput },
  props: { handleSubmit: Function },
  data() {
    return {
      latLng: null,
      date: null,
      time: null,
      // mock:
      // latLng: new LatLng(-23.4596858, -46.5328559),
      // date: new Date('Mon Mar 03 1997 01:00:00 GMT-0300 (Brasilia Standard Time)'),
      // time: new Object({hours: 1, minutes: 0, seconds: 0}),
    }
  },
  methods: {
    submit() {
      const date = this.formatDate(this.date);

      this.handleSubmit(date, this.latLng);
    },
    getPlace(lat, lng) {
      this.latLng = new LatLng(lat, lng);
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
      
      return `${onlyDate}T${formattedHours}:${formattedMinutes}:00Z`;
    },
  },
  computed: {
    isDisabled() {
      const allInputsChecked = [
        this.date,
        this.latLng,
        this.time?.hours,
        this.time?.minutes,
      ].every(value => value != null);
      return !allInputsChecked
    }
  }
}
</script>
<template>
  <form @submit.prevent="submit">
    <h1>Enter your birth data:</h1>
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
    <Button :disabled="isDisabled" type="submit">Submit</Button>
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