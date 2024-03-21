import { MSEC_IN_DAY, MSEC_IN_HOUR, Duration } from './const.js';

import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(duration);
dayjs.extend(relativeTime);

const getLastWord = (str) => str.split(' ').pop().toLowerCase();
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const formatStringToDateTime = (datee) => dayjs(datee).format('DD/MM/YY HH:mm'); //поправить
const formatStringToShortDate = (datee) => dayjs(datee).format('MMM DD'); //поправить
const formatStringToTime = (datee) => dayjs(datee).format('HH:mm');

const getPointDuration = (dateFrom, dateTo) => {
  const timeDiff = dayjs(dateTo).diff(dayjs(dateFrom));

  if (timeDiff >= MSEC_IN_DAY) {
    return dayjs.duration(timeDiff).format('DD[D] HH[H] mm[M]');
  } else if (timeDiff >= MSEC_IN_HOUR) {
    return dayjs.duration(timeDiff).format('HH[H] mm[M]');
  }
  return dayjs.duration(timeDiff).format('mm[M]');
};

function getRandomInteger (a = 0, b = 1) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
}

function getRandomValue (items) {
  return items[getRandomInteger(0, items.length - 1)];
}

function getRandomElementsFromArray(arr) {
  const numElements = Math.floor(Math.random() * 5) + 1;
  const shuffledArray = arr.sort(() => Math.random() - 0.5);
  return shuffledArray.slice(0, numElements);
}

let date = dayjs().subtract(getRandomInteger(0, Duration.DAY), 'day').toDate();
const getRandomDate = ({next = false} = {}) => {
  const minsGap = getRandomInteger(0, Duration.MIN);
  const hoursGap = getRandomInteger(1, Duration.HOUR);
  const daysGap = getRandomInteger(0, Duration.DAY);

  if (next) {
    date = dayjs(date)
      .add(minsGap, 'minute')
      .add(hoursGap, 'hour')
      .add(daysGap, 'day')
      .toDate();
  }

  return date;
};

export { getLastWord, capitalize, formatStringToDateTime, formatStringToShortDate,
  formatStringToTime, getPointDuration, getRandomInteger, getRandomValue, getRandomDate,
  getRandomElementsFromArray};
