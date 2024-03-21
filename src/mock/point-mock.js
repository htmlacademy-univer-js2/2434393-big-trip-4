import { Price } from '../const.js';
import { getRandomDate, getRandomInteger } from '../utils.js';

function generatePoint (type, destinationId, offerIds) {
  return {
    id: crypto.randomUUID(),
    basePrice: getRandomInteger(Price.MIN, Price.MAX),
    dateFrom: getRandomDate(),
    dateTo: getRandomDate({next: true}),
    destination: destinationId,
    isFavorite: !!getRandomInteger(0,1),
    offers: offerIds,
    type

  };
}

export { generatePoint };
