<script>
  import IconLocation from './icons/IconLocation.vue';
  import { Loader } from '@googlemaps/js-api-loader';
  export default {
    components: { IconLocation },
    props: ['getLatLng'],
    data() {
      return {
        input: '',
        googleApi: null,
        completer: null,
        lat: null,
        lng: null,
      }
    },
    mounted() {
      this.setupGoogleMaps();
    },
    methods: {
      async setupGoogleMaps() {
        const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
        const loader = new Loader({
          apiKey: GOOGLE_MAPS_API_KEY,
          version: 'weekly',
          libraries: ['places']
        });

        this.googleApi = await loader.load();
      },
      autoCompleteResult() {
        const options = {
          fields: ['geometry', 'icon', 'name'],
          types: ['(regions)'],
        };
        this.completer = new this.googleApi.maps.places.Autocomplete(this.$refs.input, options);
      }
    },
    watch: {
      input(value, oldValue) {
        if (value.length > 2 && value != oldValue) {
          this.autoCompleteResult();
        }
        if (value.length === 0) {
          this.getLatLng(null, null);
        }
      },
      completer(autocomplete) {
        autocomplete.addListener('place_changed', () => {
          const place = autocomplete.getPlace();

          const { lat, lng } = place.geometry.location;

          this.getLatLng(lat(), lng());
        });
      }
    }
  }
</script>
<template>
  <div class="location-input">
    <IconLocation class="icon-location"/>
    <input ref="input" v-model="input" placeholder="Where were you born?"/>
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