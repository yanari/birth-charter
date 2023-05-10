<script>
import Button from '@/components/Button.vue';
import BirthDataForm from '@/layouts/BirthDataForm.vue';
import { LocalStore } from '@/utils/localStorage';

export default {
  data() {
    return {
      began: false,
      loading: false,
    };
  },
  methods: {
    begin() {
      this.began = true;
      LocalStore.removeData();
    },
    async onSubmit(date, latLng) {
      this.loading = true;
      const params = new URLSearchParams({
        time: date,
        latitude: latLng.lat,
        longitude: latLng.lng,
      }).toString();
      const response = await fetch(import.meta.env.VITE_API_URL + '?' + params);

      const jsonData = await response.json();

      LocalStore.setData(jsonData);
      this.$router.push('/result');
    },
  },
  components: { Button, BirthDataForm },
}
</script>
<template>
  <main>
    <Transition mode="out-in">
      <BirthDataForm
        key="form"
        v-if="began"
        :handleSubmit="onSubmit"
        :isButtonLoading="loading"
      />
      <div key="start-button" v-else>
        <h1>Calculate the dominant element in your birth chart!</h1>
        <Button @onClick="begin">Begin</Button>
      </div>
    </Transition>
  </main>
</template>
<style scoped>
  main {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
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