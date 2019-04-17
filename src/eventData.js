import {
  getRandomNumber,
  getSeveralItems,
  getRandomTime
} from './util.js';

import {TRAVEL_WAY_TYPES, TRAVEL_OFFERS, TRAVEL_CITIES, TRAVEL_DESCRIPTIONS} from './travelData';


const getEventDataType = () => {
  return TRAVEL_WAY_TYPES[Math.floor(getRandomNumber(1, TRAVEL_WAY_TYPES.length))];
};
const getEventCity = () => {
  return [...TRAVEL_CITIES][Math.floor(getRandomNumber(1, [...TRAVEL_CITIES].length))];
};
const getEventCityList = () => {
  return [...TRAVEL_CITIES].map((element) => `<option value="${element}">${element}</option>`).join(``);
};
const getEventPicture = () => {
  return `//picsum.photos/100/100?r=${Math.random()}`;
};
const getOffers = () => {
  const amount = getRandomNumber(0, 2);
  const offers = getSeveralItems(TRAVEL_OFFERS, amount);
  const array = [];
  for (let offer of offers) {
    let item = {
      title: offer,
      price: Math.floor(getRandomNumber(10, 30)),
      id: offer.replace(/ /g, `-`).toLowerCase()
    };
    array.push(item);
  }
  return array;
};

const offersArray = getOffers();

const getEventOffers = () => {
  return offersArray.map((element) => `<li><button class="trip-point__offer">${element.title} + &euro;&nbsp;${element.price}</button></li>`).join(``);
};
const getEditEventOffers = () => {
  return offersArray.map((element) => `
  <input class="point__offers-input visually-hidden" type="checkbox" id="${element.id}" name="offer" value="${element.id}">
  <label for="${element.id}" class="point__offers-label">
    <span class="point__offer-service">${element.title}</span> + €<span class="point__offer-price">${element.price}</span>
  </label>`).join(``);
};

const getEventDescription = () => {
  return getSeveralItems(TRAVEL_DESCRIPTIONS, getRandomNumber(1, 3)).join(` `);
};

const getEventTimings = () => {
  const start = getRandomTime();
  const duration = Math.floor(getRandomNumber(0, 600));
  const end = start.clone().add(duration, `minutes`);
  return {
    hours: [start.format(`hh:mm`), end.format(`hh:mm`)],
    duration: Math.floor(duration / 60) + `h ` + (duration % 60) + `m`
  };
};

const eventData = () => ({
  type: getEventDataType(),
  city: getEventCity(),
  cityList: getEventCityList(),
  picture: getEventPicture(),
  offers: getEventOffers(),
  offersEdit: getEditEventOffers(),
  description: getEventDescription(),
  day: `add later`,
  time: getEventTimings(),
  price: Math.floor(getRandomNumber(0, 100)),
  favorite: false
});

export {
  eventData
};
