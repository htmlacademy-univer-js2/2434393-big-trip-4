function createSortTemplate ({sorts}) {
  return `
<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
${sorts.map((sort) => `
<div class="trip-sort__item  trip-sort__item--${sort}">
  <input id="sort-${sort}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sort}">
  <label class="trip-sort__btn" for="sort-${sort}">${sort}</label>
</div>
`).join('')}
</form>
`;
}

export { createSortTemplate };
