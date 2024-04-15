import { createPointTemplate } from '../template/point-template.js';
//import { createElement } from '../render.js';
import AbstractView from '../framework/view/abstract-view.js';

export default class PointView extends AbstractView {
  #point = null;
  #destination = null;
  #offers = null;
  #onEditClick = null;

  constructor({ point, destination, offers, onEditClick }) {
    super();
    this.#point = point;
    this.#destination = destination;
    this.#offers = offers;
    this.#onEditClick = onEditClick;

    this.#addPointHandlers();
  }

  get template() {
    return createPointTemplate({
      point: this.#point,
      destination: this.#destination,
      offers: this.#offers
    });
  }

  #addPointHandlers = () => {
    this.element
      .querySelector('.event__rollup-btn')
      .addEventListener('click', this.#editClickHandler);
  };


  #editClickHandler = (evt) => {
    evt.preventDefault();
    this.#onEditClick();
  };


}
