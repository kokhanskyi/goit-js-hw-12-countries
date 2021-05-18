export const marckcapCountry = ({ flag, capital, population, languages, name }) => {
  const lang = languages.map(name => {
    return `<li>${name}
    </li>`;
  });
  return `
    <li>
    <img src ='${flag}' alt='${name}' >
    <p>Capital: ${capital}</p>
    <p>Population: ${population}</p>
    <p>Languages: ${name}</p>
    </li>
    `;
};
