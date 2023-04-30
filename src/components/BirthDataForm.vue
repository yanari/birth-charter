<script>
import DatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

import Button from './Button.vue';
import LocationInput from './LocationInput.vue'

export default {
  components: { DatePicker, Button, LocationInput },
  data() {
    return {
      place: '',
      date: null,
    }
  },
  methods: {
    submit() {
      console.log(this.place);
      console.log(this.date);
    }
  }
}
</script>
<template>
  <form @submit.prevent="submit">
    <LocationInput/>
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