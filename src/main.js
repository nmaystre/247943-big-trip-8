import createFilter from './createFilter';
import {eventData, createEvent} from './createEvent';
import {getRandomNumber} from './util';

const filtersContainer = document.querySelector(`.trip-filter`);
filtersContainer.insertAdjacentHTML(`beforeend`, createFilter(`Everything`, true));
filtersContainer.insertAdjacentHTML(`beforeend`, createFilter(`Future`, false));
filtersContainer.insertAdjacentHTML(`beforeend`, createFilter(`Past`, false));

const renderPoints = (dist, number = 7) => {
  const points = new Array(number)
    .fill()
    .map(createEvent(eventData));
  dist.insertAdjacentHTML(`beforeend`, points.join(``));
};

const tasksContainer = document.querySelector(`.trip-day__items`);
renderPoints(tasksContainer);

filtersContainer.addEventListener(`click`, (evt) => {
  if (evt.target.classList.contains(`trip-filter__item`)) {
    evt.stopPropagation();
    const randomNumber = Math.round(getRandomNumber(0, 10));
    tasksContainer.innerHTML = ``;
    renderPoints(tasksContainer, randomNumber);
  }
});
