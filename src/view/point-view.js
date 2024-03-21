import { createPointTemplate } from '../template/point-template.js';
import { createElement } from '../render.js';

export default class PointView {
  constructor({ point, destination, offers}){
    this.point = point;
    this.destination = destination;
    this.offers = offers;
  }

  getTemplate() {
    return createPointTemplate({
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
