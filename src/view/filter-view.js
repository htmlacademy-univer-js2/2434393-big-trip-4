import { createFilterTemplate } from '../template/filter-tempalte.js';
import { createElement } from '../render.js';
import { POINT_FILTERS } from '../const.js';

export default class FilterView {
  getTemplate() {
    return createFilterTemplate({filters: POINT_FILTERS});
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
