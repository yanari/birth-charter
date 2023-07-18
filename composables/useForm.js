export default function useForm () {
  const latLng = ref();
  const time = ref();
  const date = ref();

  const handleSubmit = async () => {
    console.log('handleSubmit');
    console.log([
      date,
      latLng,
      time.value?.hours,
      time.value?.minutes,
    ]);
  };

  const isDisabled = computed(() => {
    const allInputsChecked = [
      date,
      latLng,
      time.value?.hours,
      time.value?.minutes,
    ].every(value => value != null);
    return !allInputsChecked
  });

  return {
    latLng,
    date,
    time,
    handleSubmit,
    isDisabled,
  };
};
