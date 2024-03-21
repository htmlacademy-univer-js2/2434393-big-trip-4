import { capitalize } from '../utils.js';

function createFilterTemplate ({filters}) {
  return `
  <form class="trip-filters" action="#" method="get">
    ${filters.map((filter) => `
      <div class="trip-filters__filter">
        <input id="filter-${filter}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filter}">
        <label class="trip-filters__filter-label" for="filter-${filter}">${capitalize(filter)}</label>
      </div>
    `).join('')}
    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>
  `;
}

export { createFilterTemplate };
