import EventListView from '../view/event-list-view.js';
import PointView from '../view/point-view.js';
import PointEditView from '../view/point-edit-view.js';
import SortView from '../view/sort-view.js';
import { render, replace } from '../framework/render.js';
import { isEscapeKey } from '../utils.js';

export default class TripPresenter {
  #eventListComponent = new EventListView();
  #sortComponent = new SortView();
  #container = null;
  #destinationsModel = null;
  #offersModel = null;
  #pointsModel = null;
  #points = [];

  constructor({container, destinationsModel, offersModel, pointsModel}) {
    this.#container = container;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
    this.#pointsModel = pointsModel;
    this.#points = [...this.#pointsModel.getAll()];
  }

  init () {
    this.#renderTrip();
  }

  #renderTrip = () => {
    render(this.#sortComponent, this.#container);
    render(this.#eventListComponent, this.#container);
    this.#points.forEach((point) => this.#renderPoint(point));
  };

  #renderPoint = (point) => {
    const pointComponent = new PointView({
      point,
      destination: this.#destinationsModel.getById(point.destination),
      offers: this.#offersModel.getByType(point.type),
      onEditClick: onEditPointClick,
    });

    const editPointComponent = new PointEditView({
      point,
      destination: this.#destinationsModel.getById(point.destination),
      offers: this.#offersModel.getByType(point.type),
      onEditReset: onEditPointReset,
      onEditSubmit: onEditPointSubmit,
    });

    const switchToEditForm = () =>
      replace(editPointComponent, pointComponent);

    const switchToPoint = () =>
      replace(pointComponent, editPointComponent);

    const onDocumentEscKeydown = (evt) => {
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        switchToPoint();
        document.removeEventListener('keydown', onDocumentEscKeydown);
      }
    };

    function onEditPointClick() {
      switchToEditForm();
      document.addEventListener('keydown', onDocumentEscKeydown);
    }

    function onEditPointReset() {
      switchToPoint();
      document.removeEventListener('keydown', onDocumentEscKeydown);
    }

    function onEditPointSubmit() {
      switchToPoint();
      document.removeEventListener('keydown', onDocumentEscKeydown);
    }

    render(pointComponent, this.#eventListComponent.element);
  };
}
