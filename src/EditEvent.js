
import Component from './Component';
import flatpickr from 'flatpickr';
import * as moment from 'moment';
import {TRAVEL_WAY_TYPES} from './travelData';


class EditEvent extends Component {

  constructor(data) {
    super();
    this._type = data.type;
    this._icon = data.type.icon;
    this._title = data.type.title;
    this._city = data.city;
    this._cityList = data.cityList;
    this._startTime = data.time.hours[0];
    this._endTime = data.time.hours[1];
    this._price = data.price;
    this._offersEdit = data.offersEdit;
    this._description = data.description;
    this._picture = data.picture;
    this._favorite = data.favorite;

    this._state.action = null;

    this._onSave = null;
    this._onSubmitButtonClick = this._onButtonClick.bind(this);
  }

  set onSave(fn) {
    this._onSave = fn;
  }

  set onReset(fn) {
    this._onReset = fn;
    this._bindedResetedElement = this._onReset.bind(this);
  }

  _onButtonClick(evt) {
    evt.preventDefault();
    const selectedForm = this._element.querySelector(`form`);
    const formData = new FormData(selectedForm);
    const editedData = this._processForm(formData);

    if (typeof this._onSave === `function`) {
      this._onSave(evt, editedData);
    }
    console.log('editedData', editedData);
    this.update(editedData);
  }

  _partialUpdate() {
    this._element.innerHTML = this.template;
  }

  _onChangeAction() {
    this._state.action = !this._state.action;
    this.unbind();
    this._partialUpdate();
    this.bind();
  }

  _processForm(newFormData) {
    const entry = {
      type: {
        title: ``,
        icon: ``
      },
      city: ``,
      cityList: ``,
      picture: ``,
      offers: [],
      offersEdit: ``,
      description: ``,
      day: ``,
      time: {
        start: ``,
        end: ``
      },
      price: ``,
      favorite: false
    };

    const editEventMapper = EditEvent.createMapper(entry);

    for (const pair of newFormData.entries()) {
      const [property, value] = pair;
      if (editEventMapper[property]) {
        editEventMapper[property](value);
      }
    }
    return entry;
  }

  get template() {
    return `<article class="point">
              <form action="" method="get">
                <header class="point__header">
                  <label class="point__date">
                    choose day
                    <input class="point__input" type="text" placeholder="MAR 18" name="day">
                  </label>
                  <div class="travel-way">
                    <label class="travel-way__label" for="travel-way__toggle">${this._icon}</label>
                    <input type="checkbox" class="travel-way__toggle visually-hidden" id="travel-way__toggle">
                    <div class="travel-way__select">
                      <div class="travel-way__select-group">
                        <input class="travel-way__select-input visually-hidden" type="radio" id="travel-way-taxi" name="travel-way"
                          value="taxi" ${this._icon === `taxi` && `checked`}>
                        <label class="travel-way__select-label" for="travel-way-taxi">🚕 taxi</label>
                        <input class="travel-way__select-input visually-hidden" type="radio" id="travel-way-bus" name="travel-way"
                          value="bus" ${this._icon === `bus` && `checked`}>
                        <label class="travel-way__select-label" for="travel-way-bus">🚌 bus</label>
                        <input class="travel-way__select-input visually-hidden" type="radio" id="travel-way-train" name="travel-way"
                          value="train" ${this._icon === `train` && `checked`}>
                        <label class="travel-way__select-label" for="travel-way-train">🚂 train</label>
                        <input class="travel-way__select-input visually-hidden" type="radio" id="travel-way-flight" name="travel-way"
                          value="train" ${this._icon === `flight` && `checked`}>
                        <label class="travel-way__select-label" for="travel-way-flight">✈️ flight</label>
                      </div>
                      <div class="travel-way__select-group">
                        <input class="travel-way__select-input visually-hidden" type="radio" id="travel-way-check-in" name="travel-way"
                          value="check-in" ${this._icon === `check-in` && `checked`}>
                        <label class="travel-way__select-label" for="travel-way-check-in">🏨 check-in</label>
                        <input class="travel-way__select-input visually-hidden" type="radio" id="travel-way-sightseeing" name="travel-way"
                          value="sight-seeing" ${this._icon === `sightseeing` && `checked`}>
                        <label class="travel-way__select-label" for="travel-way-sightseeing">🏛 sightseeing</label>
                      </div>
                    </div>
                  </div>
                  <div class="point__destination-wrap">
                    <label class="point__destination-label" for="destination">${this._title} to</label>
                    <input class="point__destination-input" list="destination-select" id="destination" value="${this._city}" name="destination">
                    <datalist id="destination-select">${this._cityList}</datalist>
                  </div>
                  <label class="point__time">
                    choose time
                    <input class="point__input" type="text" value="${this._endTime} — ${this._startTime}" name="time" placeholder="00:00 — 00:00">
                  </label>
                  <label class="point__price">
                    write price
                    <span class="point__price-currency">€</span>
                    <input class="point__input" type="text" value="${this._price}" name="price">
                  </label>
                  <div class="point__buttons">
                    <button class="point__button point__button--save" type="submit">Save</button>
                    <button class="point__button" type="reset">Delete</button>
                  </div>
                  <div class="paint__favorite-wrap">
                    <input type="checkbox" class="point__favorite-input visually-hidden" id="favorite" name="favorite">
                    <label class="point__favorite" for="favorite">favorite</label>
                  </div>
                </header>
                <section class="point__details">
                  <section class="point__offers">
                    <h3 class="point__details-title">offers</h3>
                    <div class="point__offers-wrap">
                      ${this._offersEdit}
                    </div>
                  </section>
                  <section class="point__destination">
                    <h3 class="point__details-title">Destination</h3>
                    <p class="point__destination-text">${this._description}</p>
                    <div class="point__destination-images">
                    <img src="${this._picture}" alt="picture from place" class="point__destination-image">
                    </div>
                  </section>
                  <input type="hidden" class="point__total-price" name="total-price" value="">
                </section>
              </form>
            </article>`;
  }

  bind() {
    this._element.querySelector(`.point__button[type='reset']`)
      .addEventListener(`click`, this._bindedResetedElement);
    this._element.querySelector(`form`)
      .addEventListener(`submit`, this._onSubmitButtonClick);
  }

  initFlatpicr() {
    const dateInput = document.querySelector(`input[name='time']`);
    flatpickr(dateInput, {
      enableTime: true,
      mode: `range`,
      // eslint-disable-next-line camelcase
      time_24hr: true,
      altInput: true,
      altFormat: `H:i`,
      dateFormat: `H:i`,
      defaultDate: [
        moment(this._startTime).format(`H:mm`),
        moment(this._endTime).format(`H:mm`)
      ],
      locale: {
        rangeSeparator: ` - `
      },
    });
  }

  unbind() {
    this._element.querySelector(`.point__button[type='reset']`)
      .removeEventListener(`click`, this._bindedResetedElement);
    this._element.querySelector(`form`)
      .removeEventListener(`submit`, this._onSubmitButtonClick);
  }

  update(data) {

    this._updateTravelWay(this._type);

    // this._icon = data.type.icon;
    // this._title = data.type.title;
    this._city = data.city;
    this._startTime = data.time.start;
    this._endTime = data.time.end;
    this._price = data.price;
    this._offersEdit = data.offersEdit;
    this._description = data.description;
    this._picture = data.picture;
  }

  _updateTravelWay(type) {
    const travelWayIcon = this._element.querySelector(`.travel-way__label`);
    const travelWayText = this._element.querySelector(`.point__destination-label`);
    const travelWayRadio = this._element.querySelector(`#travel-way-${type}`);

    const travelWaySelected = TRAVEL_WAY_TYPES.find((item) => item.title === type);

    travelWayIcon.textContent = travelWaySelected.icon;
    travelWayText.textContent = travelWaySelected.text;
    travelWayRadio.checked = true;
  }

  static createMapper(target) {
    return {
      'travel-way': (value) => {
        target.type.title = value;
        return target.type.title;
      },
      'title': (value) => {
        target.type.title = value;
        return target.type.title;
      },
      'destination': (value) => {
        target.city = value;
        return target.city;
      },
      'time': (value) => {
        target.time.start = value;
        return target.city.start;
      },
      'price': (value) => {
        target.price = value;
        return target.price;
      },
      'favorite': (value) => {
        target.favorite = value === `on`;
        return target.favorite;
      }
    };
  }
}

export default EditEvent;
