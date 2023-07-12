export const useLoading = () => useState('isLoading', () => false);

export const useForm = () => {
  // const {
  //   latLng,
  //   time,
  //   date,
  // } = reactive({
  //   latLng: new LatLng(0, 0),
  //   time: {
  //     hours: new Date().getHours(),
  //     minutes: new Date().getMinutes()
  //   },
  //   date: new Date(),
  // });
  const latLng = ref();
  const time = ref();
  const date = ref();

  // const isLoading = useLoading();

  const handleSubmit = async () => {
    console.log('handleSubmit');
    console.log([
      date,
      latLng,
      time.hours,
      time.minutes,
    ]);
  };

  const isDisabled = computed(() => {
    const allInputsChecked = [
      date,
      latLng,
      time.hours,
      time.minutes,
    ].every(value => value != null);
    return !allInputsChecked
  });

  return { latLng, date, time, handleSubmit, isDisabled };
};

export const useFormatDate = () => {
  const { time, date } = useForm();
  const { hours, minutes } = time;
  const fullDateObject = new Date(
    date?.getFullYear(),
    date?.getMonth(),
    date?.getDate(),
    hours,
    minutes,
  );
  const fullDate = new Date(fullDateObject);
  const isoDate = fullDate.toISOString();
  return isoDate.replace('000Z', '00Z');
};

// export const useSubmit = () => {
//   const {
//     latLng,
//     date,
//     time,
//   } = useForm();

//   // const isLoading = useLoading();
//   // const formattedDate = useFormatDate();
  
//   // isLoading.value = true;
//   // const data = {
//   //   date: formattedDate,
//   //   lat: latLng.value.lat,
//   //   lng: latLng.value.lng,
//   // };
//   // const params = new URLSearchParams(JSON.stringify(data)).toString();

//   // const runtimeConfig = useRuntimeConfig();
//   // const response = await useFetch(runtimeConfig.apiUrl + '?' + params);

//   // console.log('data:', response.data)

//   // $fetch('/api/local', {method: 'POST', body: response.data});
//   // // this.$router.push('/result');
//   // isLoading.value = false;

//   const isDisabled = computed(() => {
//     const allInputsChecked = [
//       date.value,
//       latLng.value,
//       time.value.hours,
//       time.value.minutes,
//     ].every(value => value != null);
//     return !allInputsChecked
//   });

//   const handleSubmit = async () => {
//     console.log('handleSubmit');
//     console.log([
//       date.value,
//       latLng.value,
//       time.value.hours,
//       time.value.minutes,
//     ]);
//   };

//   return {
//     isDisabled,
//     handleSubmit,
//   };
// };