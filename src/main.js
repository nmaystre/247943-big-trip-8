import createFilter from './createFilter';
import Event from './Event';
import EditEvent from './EditEvent';
import {
  eventData
} from './dataEvent';

const filtersContainer = document.querySelector(`.trip-filter`);
filtersContainer.insertAdjacentHTML(`beforeend`, createFilter(`Everything`, true));
filtersContainer.insertAdjacentHTML(`beforeend`, createFilter(`Future`, false));
filtersContainer.insertAdjacentHTML(`beforeend`, createFilter(`Past`, false));

// const renderPoints = (dist, number = 7) => {
//   const points = new Array(number)
//     .fill(``)
//     .map(() => createEvent(eventData()));
//   dist.innerHTML = ``;
//   dist.insertAdjacentHTML(`beforeend`, points.join(``));
// };

const eventDataGenerated = eventData();
const eventContainer = document.querySelector(`.trip-day__items`);
const eventComponent = new Event(eventDataGenerated);
const editEventComponent = new EditEvent(eventDataGenerated);

eventContainer.appendChild(eventComponent.render());

eventComponent.onEdit = () => {
  editEventComponent.onSave = () => {};
  editEventComponent.render();
  eventContainer.replaceChild(editEventComponent.element, eventComponent.element);
  eventComponent.unrender();
};

editEventComponent.onSave = () => {
  eventComponent.render();
  eventContainer.replaceChild(eventComponent.element, editEventComponent.element);
  editEventComponent.unrender();
};

// eventComponent.onEdit = () => {
//   eventComponent.appendChild(editEventComponent.render());
// };


// renderPoints(tasksContainer);

// filtersContainer.addEventListener(`click`, (evt) => {
//   if (evt.target.classList.contains(`trip-filter__item`)) {
//     evt.stopPropagation();
//     const randomNumber = Math.round(getRandomNumber(0, 10));
//     renderPoints(tasksContainer, randomNumber);
//   }
// });
