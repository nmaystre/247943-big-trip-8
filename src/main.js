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

eventComponent.onEdit = (data) => {
  const editEventComponent = new EditEvent(data);

  editEventComponent.onSave = (evt) => {
    evt.preventDefault();
    console.log('dfdf');
    eventComponent.render();
    eventContainer.replaceChild(eventComponent.element, editEventComponent.element);
    editEventComponent.unrender();
  };

  editEventComponent.onReset = (evt) => {
    evt.preventDefault();
    eventContainer.removeChild(editEventComponent.element);
    editEventComponent.unrender();
  };
  editEventComponent.render();
  eventContainer.replaceChild(editEventComponent.element, eventComponent.element);
};

eventContainer.appendChild(eventComponent.render());
