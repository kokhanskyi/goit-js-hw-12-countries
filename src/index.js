import './sass/main.scss';
import { alert, error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/Material.css';
import '@pnotify/core/dist/PNotify.css';
import { marckcapCountry } from './tmpl/marckcapCountry';
import { marckcapCountrys } from './tmpl/marckcapCountrys';
const countriesList = document.querySelector('.countries');

const _ = require('lodash');

const inputRef = document.querySelector('.search');
import { fetchCountries } from './fetchCountries';
import { update } from 'lodash';

inputRef.addEventListener('input', _.debounce(onInputSearch, 500));
function onInputSearch(event) {
  const searchQuery = event.target.value;
  if (!searchQuery) return;

  fetchCountries(searchQuery).then(data => {
    const countries = data.length;
    if (countries === 1) {
      updatePage(marckcapCountry(data[0]));
    } else if (countries > 1 && countries < 11) {
      updatePage(marckcapCountrys(data));
    } else {
      error({
        text: 'Notice me, senpai!',
      });
    }
  });
}

function updatePage(data = '') {
  countriesList.innerHTML = data;
}
