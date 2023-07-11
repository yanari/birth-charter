export default defineEventHandler(async (event) => {
  const data = await useStorage().getItem('chart:data');
  if (data) {
    return data;
  }
  return {};
});