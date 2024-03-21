import { getRandomValue, getRandomInteger } from '../utils.js';
import { POINT_TYPES } from '../const.js';
import { generateDestination } from '../mock/destination-mock.js';
import { generateOffer } from '../mock/offer-mock.js';
import { generatePoint } from '../mock/point-mock.js';
import { OFFER_COUNT, DESTINATION_COUNT } from '../const.js';

export default class MockService {
  constructor() {
    this.destinations = this.generateDestinations();
    this.offers = this.generateOffers();
    this.points = this.generatePoints();
  }

  generateDestinations() {
    return Array.from({ length: DESTINATION_COUNT }, () => generateDestination());
  }

  generateOffers() {
    return POINT_TYPES.map((type) => ({
      type,
      offers: Array.from({ length: OFFER_COUNT }, () => generateOffer())
    }));
  }

  generatePoints() {
    return Array.from({ length: 5 }, () => {
      const type = getRandomValue(POINT_TYPES);
      const destination = getRandomValue(this.destinations);
      const hasOffers = getRandomInteger(0, 1);
      const offersByType = this.offers.find((offer) => offer.type === type);
      const offerIds = (hasOffers)
        ? offersByType.offers
          .slice(0, getRandomInteger(0, 5))
          .map((offer) => offer.id)
        : [];

      return generatePoint(type, destination.id, offerIds);
    });
  }

  getDestinations() {
    return this.destinations;
  }

  getOffers() {
    return this.offers;
  }

  getPoints() {
    return this.points;
  }

}
