import { render, RenderPosition } from '../framework/render.js';
import PointsListView from '../view/points-list-view.js';
import SortingView from '../view/sorting-view.js';
import NoPointView from '../view/no-point-view.js';
import PointPresenter from './point-presenter.js';
import { updateItem } from '../utils/common.js';
import { SortType, sorting } from '../utils/sorting.js';

export default class BoardPresenter {

  #tripContainer = null;
  #pointsModel = null;
  #boardPoints = null;

  #noPointComponent = new NoPointView();
  #sortComponent = new SortingView();
  #pointListComponent = new PointsListView();

  #pointPresenter = new Map();
  #currentSortType = SortType.DAY;
  #sourcedBoardPoints = [];

  constructor(tripContainer, pointsModel) {
    this.#tripContainer = tripContainer;
    this.#pointsModel = pointsModel;
  }

  init() {

    this.#boardPoints = [...this.#pointsModel.points];

    this.#sourcedBoardPoints = [...this.#pointsModel.points];

    if (this.#boardPoints.length === 0) {
      this.#renderNoPoints();
    }
    else {
      this.#renderSort();
      this.#renderPointList();
    }
  }

  #handleModeChange = () => {
    this.#pointPresenter.forEach((presenter) => presenter.resetView());
  };

  #handlePointChange = (updatedPoint) => {
    this.#boardPoints = updateItem(this.#boardPoints, updatedPoint);
    this.#sourcedBoardPoints = updateItem( this.#sourcedBoardPoints, updatedPoint);
    this.#pointPresenter.get(updatedPoint.id).init(updatedPoint);
  };

  #sortPoint = (sortType) => {
    sorting[sortType](this.#boardPoints);
    this.#currentSortType = sortType;
  };

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#sortPoint(sortType);
    this.#clearPointList();
    this.#renderPointList();
  };

  #renderSort = () => {
    sorting[SortType.DAY](this.#boardPoints);
    render(this.#sortComponent, this.#tripContainer, RenderPosition.AFTERBEGIN);
    this.#sortComponent.setSortTypeChangeHandler(this.#handleSortTypeChange);
  };

  #renderPoint = (point) => {
    const pointPresenter = new PointPresenter(this.#pointListComponent.element, this.#pointsModel, this.#handlePointChange, this.#handleModeChange);
    pointPresenter.init(point);
    this.#pointPresenter.set(point.id, pointPresenter);
  };

  #renderPoints = (from, to) => {
    this.#boardPoints
      .slice(from, to)
      .forEach((point) => this.#renderPoint(point));
  };

  #renderNoPoints = () => {
    render(this.#noPointComponent, this.#tripContainer, RenderPosition.AFTERBEGIN);
  };

  #clearPointList = () => {
    this.#pointPresenter.forEach((presenter) => presenter.destroy());
    this.#pointPresenter.clear();
  };

  #renderPointList = () => {
    render(this.#pointListComponent, this.#tripContainer);
    this.#renderPoints(0, this.#boardPoints.length);
  };
}

