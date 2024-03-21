import { createPointEditTemplate } from '../template/point-edit-template.js';
import { createElement } from '../render.js';
import { POINT_EMPTY } from '../const.js';

export default class PointEditView {
  constructor({ point = POINT_EMPTY, destination, offers }){
    this.point = point;
    this.destination = destination;
    this.offers = offers;
  }

  getTemplate() {
    return createPointEditTemplate({
      point: this.point,
      destination: this.destination,
      offers: this.offers
    });
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
