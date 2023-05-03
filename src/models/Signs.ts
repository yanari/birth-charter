// export const Signs = {
//   1: 'Aries',
//   2: 'Taurus',
//   3: 'Gemini',
//   4: 'Cancer',
//   5: 'Leo',
//   6: 'Virgo',
//   7: 'Libra',
//   8: 'Scorpio',
//   9: 'Sagittarius',
//   10: 'Capricorn',
//   11: 'Aquarius',
//   12: 'Pisces',
// };

export const SignsList = {
  1: { name: 'Aries', element: 'fire' },
  2: { name: 'Taurus', element: 'earth' },
  3: { name: 'Gemini', element: 'air' },
  4: { name: 'Cancer', element: 'water' },
  5: { name: 'Leo', element: 'fire' },
  6: { name: 'Virgo', element: 'earth' },
  7: { name: 'Libra', element: 'air' },
  8: { name: 'Scorpio', element: 'water' },
  9: { name: 'Sagittarius', element: 'fire' },
  10: { name: 'Capricorn', element: 'earth' },
  11: { name: 'Aquarius', element: 'air' },
  12: { name: 'Pisces', element: 'water' },
};

export class Sign {
  static get(number: number) {
    return {
      name: SignsList[number].name,
      element: SignsList[number].element,
    } 
  }
}

// export const Elements = {
//   'water': [4, 8, 12],
//   'air': [3, 7, 11],
//   'fire': [1, 5, 9],
//   'earth': [2, 6, 10],
// };

export const Points = {
  2: ['sun', 'moon'],
  1: ['mercury', 'venus', 'mars', 'jupiter', 'saturn'],
}