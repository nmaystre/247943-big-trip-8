
const createEvent = (data) =>
  `<article class="trip-point">
  <i class="trip-icon">${data.type.icon}</i>
  <h3 class="trip-point__title">${data.type.title}</h3>
  <p class="trip-point__schedule">
    <span class="trip-point__timetable">10:00&nbsp;&mdash; 11:00</span>
    <span class="trip-point__duration">1h 30m</span>
  </p>
  <p class="trip-point__price">&euro;&nbsp;${data.price}</p>
  <ul class="trip-point__offers">
    ${data.offers}
  </ul>
</article>`;

export default createEvent;
