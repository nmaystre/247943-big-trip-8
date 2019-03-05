
const createEvent = (data) =>
  `<article class="trip-point">
  <i class="trip-icon">${data.type.icon}</i>
  <h3 class="trip-point__title">${data.type.title}</h3>
  <p class="trip-point__schedule">
    <span class="trip-point__timetable">${data.time.start}&nbsp;&mdash; ${data.time.end}</span>
    <span class="trip-point__duration">${data.time.duration}</span>
  </p>
  <p class="trip-point__price">&euro;&nbsp;${data.price}</p>
  <ul class="trip-point__offers">
    ${data.offers}
  </ul>
</article>`;

export default createEvent;
