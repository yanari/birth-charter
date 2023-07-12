export default defineEventHandler(async (event) => {
  await useStorage().removeItem('chart:data');
  return null;
});