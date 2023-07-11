export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  await useStorage().setItem('chart:data', body);
  return {};
});