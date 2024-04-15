import { createFilterTemplate } from '../template/filter-tempalte.js';
//import { createElement } from '../render.js';
import { POINT_FILTERS } from '../const.js';
import AbstractView from '../framework/view/abstract-view.js';
export default class FilterView extends AbstractView{
  get template() {
    return createFilterTemplate({filters: POINT_FILTERS});
  }
}
