import {
  createEvent
} from './createEvent';

class Event {
  constructor(data) {
    this._data = data;
    this._icon = data.type.icon;
    this._title = data.type.title;
    this._startTime = data.time.start;
    this._endTime = data.time.end;
    this._durationTime = data.time.duration;
    this._price = data.price;
    this._offers = data.offers;
    this._offersEdit = data.offersEdit;
    this._element = null;
    this._state = {};
  }

  get element() {
    return this._element;
  }

  set onEdit(fn) {
    this._onEdit = fn;
  }

  get template() {
    return `<article class="trip-point">
              <i class="trip-icon">${this._icon}</i>
              <h3 class="trip-point__title">${this._title}</h3>
              <p class="trip-point__schedule">
                <span class="trip-point__timetable">${this._startTime}&nbsp;&mdash; ${this._endTime}</span>
                <span class="trip-point__duration">${this._durationTime}</span>
              </p>
              <p class="trip-point__price">&euro;&nbsp;${this._price}</p>
              <ul class="trip-point__offers">
              ${this._offers}
              </ul>
            </article>`;
  }

  bind() {
    this._element.addEventListener(`click`, this._onEdit.bind(this, this._data));
  }

  render() {
    this._element = createEvent(this.template);
    this.bind();
    return this._element;
  }

  update() {
    if (this._state.isEdit) {
      return this._element.classList.add(`trip-point--edit`);
    } else {
      return this._element.classList.remove(`trip-point--edit`);
    }
  }

  unbind() {
    // Удаление обработчиков
  }

  unrender() {
    this.unbind();
    this._element = null;
  }
}

export default Event;
