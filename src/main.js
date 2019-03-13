import createFilter from './createFilter';
import Event from './Event';
import EditEvent from './EditEvent';
import {
  eventData
} from './eventData';

const filtersContainer = document.querySelector(`.trip-filter`);
filtersContainer.insertAdjacentHTML(`beforeend`, createFilter(`Everything`, true));
filtersContainer.insertAdjacentHTML(`beforeend`, createFilter(`Future`, false));
filtersContainer.insertAdjacentHTML(`beforeend`, createFilter(`Past`, false));

const eventDataGenerated = eventData();
const eventContainer = document.querySelector(`.trip-day__items`);
const eventComponent = new Event(eventDataGenerated);
const editEventComponent = new EditEvent(eventDataGenerated);

eventComponent.onEdit = () => {
  editEventComponent.onSave = (e) => {
    e.preventDefault();
  };
  editEventComponent.render();
  eventContainer.replaceChild(editEventComponent.element, eventComponent.element);
  eventComponent.unrender();
};

eventContainer.appendChild(eventComponent.render());


editEventComponent.onSave = (e) => {
  e.preventDefault();
  eventComponent.render();
  eventContainer.replaceChild(eventComponent.element, editEventComponent.element);
  editEventComponent.unrender();
};
