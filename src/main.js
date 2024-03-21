import TripInfoView from './view/trip-info-view.js';
import FilterView from './view/filter-view.js';
import TripPresenter from './presenter/trip-presenter.js';
import DestinationsModel from './model/destinations-model.js';
import OffersModel from './model/offers-model.js';
import PointsModel from './model/points-model.js';
import MockService from './service/mock-service.js';
import { render, RenderPosition } from './render.js';

const bodyElement = document.querySelector('body');
const tripInfoElement = bodyElement.querySelector('.trip-main');
const filterElement = tripInfoElement.querySelector('.trip-controls__filters');
const eventListElement = bodyElement.querySelector('.trip-events');
const service = new MockService();
const destinationsModel = new DestinationsModel({service});
const offersModel = new OffersModel({service});
const pointsModel = new PointsModel({service});

const tripPresenter = new TripPresenter({
  container: eventListElement,
  destinationsModel,
  offersModel,
  pointsModel
});


render(new TripInfoView(), tripInfoElement, RenderPosition.AFTERBEGIN);
render(new FilterView(), filterElement);
tripPresenter.init();


