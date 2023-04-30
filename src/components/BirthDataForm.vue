<script>
import DatePicker from '@vuepic/vue-datepicker';
import Button from './Button.vue';

import '@vuepic/vue-datepicker/dist/main.css';

export default {
  components: { DatePicker, Button },
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
    <input v-model="place" placeholder="Where were you born?"/>
    <DatePicker v-model="date"></DatePicker>
    <Button type="submit">Submit</Button>
  </form>
</template>
<style scoped>
</style>