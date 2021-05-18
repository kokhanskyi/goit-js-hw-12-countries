export const marckcapCountrys = arr => {
  return arr.map(({ name }) => `<li>${name}</li>`).join('');
};
