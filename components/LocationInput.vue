<script setup>
const props = defineProps({
  getLatLng: Function,
});
const input = ref('');
const completer = ref(null);
const lat = ref(null);
const lng = ref(null);
const api = ref(null);

onMounted(() => {
  const options = {
    fields: ['geometry', 'icon', 'name'],
    types: ['(regions)'],
  };

  completer.value = new google.maps.places.Autocomplete(input.value, options);
});

</script>
<template>
  <div class="location-input">
    <IconsLocation class="icon-location"/>
    <input
      ref="input"
      placeholder="Where were you born?"
    />
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