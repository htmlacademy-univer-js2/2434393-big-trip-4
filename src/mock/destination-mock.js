import { DESCRIPTION, CITIES, DESTINATION_COUNT } from '../const.js';
import { getRandomValue, getRandomInteger, getRandomElementsFromArray } from '../utils.js';


function generateDestination () {
  return {
    id: crypto.randomUUID,
    description: getRandomElementsFromArray(DESCRIPTION),
    name: getRandomValue(CITIES),
    pictures: Array.from({length: getRandomInteger(0, DESTINATION_COUNT)}, ()=>({
      src: `https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,
      description: getRandomValue(DESCRIPTION)
    }))
  };
}

export { generateDestination };
