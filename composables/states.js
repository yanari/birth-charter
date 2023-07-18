import useForm from '~/composables/useForm';

export const useLoading = () => useState('isLoading', () => false);

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