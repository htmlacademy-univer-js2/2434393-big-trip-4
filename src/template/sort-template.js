function createSortTemplate ({sorts}) {
  return `
<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
${sorts.map(({ type, isDisabled }) => `
      <div class="trip-sort__item  trip-sort__item--${type}">
        <input id="sort-${type}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${type}" ${isDisabled ? 'disabled' : ''}>
        <label class="trip-sort__btn" for="sort-${type}">${type}</label>
`).join('')}
</form>
`;
}

export { createSortTemplate };
