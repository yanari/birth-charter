export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig();
  const params = new URLSearchParams({

  }).toString();
  const response = await $fetch(runtimeConfig.apiUrl + '?' + params);
  console.log(response);
  return response;
});