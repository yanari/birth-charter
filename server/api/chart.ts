export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const runtimeConfig = useRuntimeConfig();
  const params = new URLSearchParams(body).toString();
  const response = await $fetch(runtimeConfig.apiUrl + '?' + params);
  console.log(response);
  return response;
});