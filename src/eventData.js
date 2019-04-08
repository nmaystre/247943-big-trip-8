import {
  getRandomNumber,
  getSeveralItems,
  getRandomTime
} from './util.js';

const eventTypeData = [{
  title: `Taxi`,
  icon: `🚕`
},
{
  title: `Bus`,
  icon: `🚌`
},
{
  title: `Train`,
  icon: `🚂`
},
{
  title: `Ship`,
  icon: `🛳️`
},
{
  title: `Transport`,
  icon: `🚊`
},
{
  title: `Drive`,
  icon: `🚗`
},
{
  title: `Flight`,
  icon: `✈️`
},
{
  title: `Check-in`,
  icon: `🏨`
},
{
  title: `Sightseeing`,
  icon: `🏛️`
},
{
  title: `Restaurant`,
  icon: `🍴`
}
];

const eventOffersData = [
  `Add luggage`,
  `Switch to comfort class`,
  `Add meal`,
  `Choose seats`
];

const eventCityData = new Set([
  `London`,
  `Paris`,
  `New York`,
  `Warsaw`,
  `Maracaibo`,
  `Ho Chi Minh City`,
  `New York`,
]);

const eventDescriptionData = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];

const getEventDataType = () => {
  return eventTypeData[Math.floor(getRandomNumber(1, eventTypeData.length))];
};
const getEventCity = () => {
  return [...eventCityData][Math.floor(getRandomNumber(1, [...eventCityData].length))];
};
const getEventCityList = () => {
  return [...eventCityData].map((element) => `<option value="${element}">${element}</option>`).join(``);
};
const getEventPicture = () => {
  return `//picsum.photos/100/100?r=${Math.random()}`;
};
const getOffers = () => {
  const amount = getRandomNumber(0, 2);
  const offers = getSeveralItems(eventOffersData, amount);
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
  return getSeveralItems(eventDescriptionData, getRandomNumber(1, 3)).join(` `);
};

const getEventTimings = () => {
  const start = getRandomTime();
  const duration = Math.floor(getRandomNumber(0, 600));
  const end = start.clone().add(duration, `minutes`);
  return {
    start: start.format(`hh:mm`),
    duration: Math.floor(duration / 60) + `h ` + (duration % 60) + `m`,
    end: end.format(`hh:mm`)
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
