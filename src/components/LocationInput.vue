<script>
  import IconLocation from './icons/IconLocation.vue';
  export default {
    components: { IconLocation },
    data() {
      return {
        place: '',
      }
    },
    watch: {
      place(data) {
        const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
        if (data.length > 0) {
          fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${data}&types=(cities)&language=pt_BR&key=${GOOGLE_MAPS_API_KEY}`, {headers: {'Access-Control-Allow-Origin': '*'}})
            .then((res) => console.log(res.data))
        }
      }
    }
  }
</script>
<template>
  <div class="location-input">
    <IconLocation class="icon-location"/>
    <input v-model="place" placeholder="Where were you born?"/>
  </div>
</template>
<style scoped>
  .location-input {
    position: relative;
  }
  .icon-location {
    color: #959595;
    /* padding: .75rem; */
    position: absolute;
    left: .75rem;
    width: 1rem;
    height: 1rem;
    pointer-events: none;
  }
  input {
    border: none;
    border-radius: .3rem;
    color: #212121;
    font-size: 1rem;
    line-height: calc(1rem * 1.5);
    outline: none;
    padding: .5rem 1rem .5rem 2.25rem;
    width: 100%;
  }
</style>