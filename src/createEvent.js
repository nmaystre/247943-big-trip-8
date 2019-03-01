import eventData from './data';

const currentData = eventData();

const createEvent = (currentData) =>
  `<article class="trip-point">
  <i class="trip-icon">🏨</i>
  <h3 class="trip-point__title">${currentData.type.title}</h3>
  <p class="trip-point__schedule">
    <span class="trip-point__timetable">10:00&nbsp;&mdash; 11:00</span>
    <span class="trip-point__duration">1h 30m</span>
  </p>
  <p class="trip-point__price">&euro;&nbsp;20</p>
  <ul class="trip-point__offers">
    <li>
      <button class="trip-point__offer">Add breakfast +&euro;&nbsp;20</button>
    </li>
  </ul>
</article>`;

export default createEvent;
