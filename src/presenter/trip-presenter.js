import EventListView from '../view/event-list-view.js';
import PointView from '../view/point-view.js';
import PointEditView from '../view/point-edit-view.js';
import SortView from '../view/sort-view.js';

import { render } from '../render.js';

export default class TripPresenter {
  eventListComponent = new EventListView();

  constructor({container, destinationsModel, offersModel, pointsModel}) {
    this.container = container;
    this.destinationsModel = destinationsModel;
    this.offersModel = offersModel;
    this.pointsModel = pointsModel;
  }

  init () {
    this.points = [...this.pointsModel.getAll()];
    const pointEdit = this.points[0];

    render(new SortView(), this.container);
    render(this.eventListComponent, this.container);
    render(
      new PointEditView({
        point: pointEdit,
        destination: this.destinationsModel.getById(pointEdit.destination),
        offers: this.offersModel.getByType(pointEdit.type),
      }),
      this.eventListComponent.getElement()
    );
    for (let i = 1; i < this.points.length; i++) {
      const point = this.points[i];
      render(
        new PointView({
          point,
          destination: this.destinationsModel.getById(point.destination),
          offers: this.offersModel.getByType(point.type),
        }),
        this.eventListComponent.getElement()
      );
    }
  }
}
