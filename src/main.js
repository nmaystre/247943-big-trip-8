import createFilter from './createFilter';
import Event from './Event';
import EditEvent from './EditEvent';
import flatpickr from "flatpickr";

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

  editEventComponent.onSave = (evt, newObject) => {
    evt.preventDefault();

    // замена переменных
    eventDataGenerated.type.icon = newObject.type.icon;
    eventDataGenerated.destination = newObject.destination;
    eventDataGenerated.time.start = newObject.time.start;
    eventDataGenerated.price = newObject.price;
    eventDataGenerated.favorite = newObject.favorite;
    // update
    eventComponent.update(eventDataGenerated);
    console.log(eventDataGenerated); // почему-то не срабатывает!

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

  flatpickr(`input[name='time']`, {enableTime: true, noCalendar: true, altInput: true, altFormat: `h:m – h:m`, dateFormat: `h:m - h:m`});

};

eventContainer.appendChild(eventComponent.render());
