import { createEventListTemplate } from '../template/event-list-template.js';
//import { createElement } from '../render.js';
import AbstractView from '../framework/view/abstract-view.js';
export default class EventListView extends AbstractView {
  get template() {
    return createEventListTemplate();
  }
}
