import {
  createEvent
} from './createEvent';

import {
  eventData
} from './dataEvent';
// import {
//   EditEvent
// } from './EditEvent';

class Event {
  constructor(data) {
    this._icon = data.type.icon;
    this._title = data.type.title;
    this._startTime = data.time.start;
    this._endTime = data.time.end;
    this._durationTime = data.time.duration;
    this._price = data.price;
    this._offers = data.offers;

    this._element = null;
    this._state = {
      isEdit: false
    };
  }

  _onEditTitleClick() {
    this._state.isEdit = !this._state.isEdit;
    this.update();
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
    // не понимаю что тут нужно прибиндидить, ведь клик можеть быть по всей карточке. Биндить клик к этой карточке?
    // this._element.addEventListener(`click`, this.bind(this));
    this._element.querySelector(`.trip-point__title`)
      .addEventListener(`click`, this._onEditTitleClick.bind(this));
  }

  render() {
    this._element = createEvent(this.template);
    this.bind();
    return this._element;
  }

  update() {
    if (this._state.isEdit) {
      this._element.classList.add(`trip-point--edit`);
      const tasksContainer = document.querySelector(`.trip-day__items`);
      const firstEvent = new Event(eventData());
      firstEvent.render(tasksContainer);
    }
    return this._element.classList.remove(`trip-point--edit`);
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
