import { Price, POINT_OFFERS } from '../const.js';
import { getRandomInteger, getRandomValue } from '../utils.js';

function generateOffer () {
  return {
    id: crypto.randomUUID(),
    title: getRandomValue(POINT_OFFERS),
    price: getRandomInteger(Price.MIN, Price.MAX)
  };
}

export { generateOffer };

