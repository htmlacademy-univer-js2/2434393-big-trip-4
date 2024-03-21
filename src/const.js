const POINT_COUNT = 5;
const DESTINATION_COUNT = 5;
const OFFER_COUNT = 5;

const MSEC_IN_SEC = 1000;
const SEC_IN_MIN = 60;
const MIN_IN_HOUR = 60;
const HOUR_IN_DAY = 24;

const MSEC_IN_HOUR = MIN_IN_HOUR * SEC_IN_MIN * MSEC_IN_SEC;
const MSEC_IN_DAY = HOUR_IN_DAY * MSEC_IN_HOUR;

const CITIES = [
  'London',
  'Dubai',
  'Moscow',
  'Omsk',
  'Paris',
  'Tokyo',
  'Antalya',
  'Washington',
  'Tyumen',
  'Ekaterinburg'
];

const POINT_FILTERS = [
  'everything',
  'future',
  'present',
  'past',
];

const POINT_SORTS = [
  'day',
  'event',
  'time',
  'price',
  'offers',
];

const POINT_EMPTY = {
  basePrice: 0,
  dateFrom: null,
  dateTo: null,
  destination: null,
  isFavorite: false,
  offers: [],
  type: null,
};

const POINT_OFFERS = [
  'Add luggage',
  'Switch to comfort class',
  'Add meal',
  'Choose seats',
  'Travel by train'
];

const DESCRIPTION = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat.',
  'Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.'
];

const Price = {
  MIN: 1,
  MAX: 1000
};

const Duration = {
  HOUR: 5,
  DAY: 5,
  MIN: 59
};

const POINT_TYPES = [
  'taxi',
  'bus',
  'train',
  'ship',
  'drive',
  'flight',
  'check-in',
  'sightseeing',
  'restaurant'
];

export { MSEC_IN_SEC, MSEC_IN_HOUR, MSEC_IN_DAY, POINT_TYPES, POINT_FILTERS,
  POINT_SORTS, POINT_EMPTY, CITIES, POINT_OFFERS, DESCRIPTION, Price, Duration,
  POINT_COUNT, DESTINATION_COUNT, OFFER_COUNT };

