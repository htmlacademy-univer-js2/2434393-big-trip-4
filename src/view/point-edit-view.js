import { createPointEditTemplate } from '../template/point-edit-template.js';
//import { createElement } from '../render.js';
import { POINT_EMPTY } from '../const.js';
import AbstractView from '../framework/view/abstract-view.js';

export default class PointEditView extends AbstractView {
  #point = null;
  #destination = null;
  #offers = null;
  #onEditReset = null;
  #onEditSubmit = null;

  constructor({ point = POINT_EMPTY, destination, offers, onEditReset, onEditSubmit }){
    super();
    this.#point = point;
    this.#destination = destination;
    this.#offers = offers;
    this.#onEditReset = onEditReset;
    this.#onEditSubmit = onEditSubmit;

    this.#addEditPointHandlers();
  }

  #addEditPointHandlers = () => {
    this.element
      .querySelector('.event__rollup-btn')
      .addEventListener('click', this.#resetClickHandler);
    this.element
      .querySelector('form')
      .addEventListener('submit', this.#submitClickHandler);
  };

  #resetClickHandler = (evt) => {
    evt.preventDefault();
    this.#onEditReset();
  };

  #submitClickHandler = (evt) => {
    evt.preventDefault();
    this.#onEditSubmit();
  };

  get template() {
    return createPointEditTemplate({
      point: this.#point,
      destination: this.#destination,
      offers: this.#offers,
    });
  }
}
