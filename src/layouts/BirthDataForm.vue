<script>
import DatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

import Button from '@/components/Button.vue';
import LocationInput from '@/components/LocationInput.vue'

import { LatLng } from '@/models/LatLng';

export default {
  components: { DatePicker, Button, LocationInput },
  props: { handleSubmit: Function, isButtonLoading: Boolean },
  data() {
    return {
      latLng: null,
      date: null,
      time: null,
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
      const { hours, minutes } = this.time;

      const fullDateObject = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        hours,
        minutes,
      );


      const fullDate = new Date(fullDateObject);
      const isoDate = fullDate.toISOString();
      
      return isoDate.replace('000Z', '00Z');
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
        placeholder="And time?"
      />
    </div>
    <Button :disabled="isDisabled" type="submit" :isLoading="isButtonLoading">
      Submit
    </Button>
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