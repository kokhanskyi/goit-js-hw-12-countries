const JSON_BASE_URL = 'https://restcountries.eu/rest/v2/name/';
export const fetchCountries = searchQuery => {
  return fetch(JSON_BASE_URL + searchQuery)
    .then(response => response.json())
    .catch(err => {
      console.log(err);
    });
};
