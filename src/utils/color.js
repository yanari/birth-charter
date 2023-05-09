export const isColorLight = (rgbColor) => {
  const parsedRGB = rgbColor.replace(/[rgb|(|)| ]/g, '');
  const [red, green, blue] = parsedRGB.split(',');

  const calc = (0.299 * red + 0.587 * green + 0.114 * blue);
  const perceptiveLuminance = 1 - calc / 255;
  console.log(perceptiveLuminance);
  return perceptiveLuminance < 0.5;
}