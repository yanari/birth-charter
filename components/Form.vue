<script setup>
import LatLng from '~/composables/LatLng.ts';
import DatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const props = defineProps({
  isButtonLoading: Boolean,
});

const flow = ref(['year', 'month', 'calendar']);

const {
  latLng,
  time,
  date,
  handleSubmit,
  isDisabled,
} = useForm();

const getPlace = (lat, lng) => {
  latLng.value = new LatLng(lat, lng);
};

const previewFormat = () => {
  console.log(date.value);
  const formatted = date.value?.toLocaleDateString(navigator.language)
  return formatted;
};

</script>
<template>
  <form @submit.prevent="handleSubmit">
    <h1>Enter your birth data:</h1>
    <LocationInput :getLatLng="getPlace"/>
    <div class="date-time">
      <DatePicker
        v-model="date"
        auto-apply
        placeholder="Which day?"
        :flow="flow"
        :format="previewFormat"
        :enable-time-picker="false"
      >
        <template #calendar-icon>
          
        </template>
      </DatePicker>
      <DatePicker
        v-model="time"
        time-picker
        placeholder="And time?"
      />
    </div>
    <Button
      :disabled="isDisabled"
      :isLoading="isButtonLoading"
      type="submit"
    >
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