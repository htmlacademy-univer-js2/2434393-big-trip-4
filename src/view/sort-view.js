import { createSortTemplate } from '../template/sort-template.js';
import { POINT_SORTS } from '../const.js';
//import { createElement } from '../render.js';
import AbstractView from '../framework/view/abstract-view.js';

export default class SortView extends AbstractView {
  get template() {
    return createSortTemplate({ sorts: POINT_SORTS });
  }
}
