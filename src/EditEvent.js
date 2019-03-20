import {
  createEditEvent
} from './createEditEvent';

import Component from './Component';


class EditEvent extends Component {

  constructor(data) {
    super();
    this._icon = data.type.icon;
    this._title = data.type.title;
    this._city = data.city;
    this._startTime = data.time.start;
    this._endTime = data.time.end;
    this._price = data.price;
    this._offersEdit = data.offersEdit;
    this._description = data.description;
    this._picture = data.picture;
  }

  set onSave(fn) {
    this._onSave = fn;
  }

  set onReset(fn) {
    this._onReset = fn;
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
                          value="taxi">
                        <label class="travel-way__select-label" for="travel-way-taxi">🚕 taxi</label>

                        <input class="travel-way__select-input visually-hidden" type="radio" id="travel-way-bus" name="travel-way"
                          value="bus">
                        <label class="travel-way__select-label" for="travel-way-bus">🚌 bus</label>

                        <input class="travel-way__select-input visually-hidden" type="radio" id="travel-way-train" name="travel-way"
                          value="train">
                        <label class="travel-way__select-label" for="travel-way-train">🚂 train</label>

                        <input class="travel-way__select-input visually-hidden" type="radio" id="travel-way-flight" name="travel-way"
                          value="train" checked>
                        <label class="travel-way__select-label" for="travel-way-flight">✈️ flight</label>
                      </div>

                      <div class="travel-way__select-group">
                        <input class="travel-way__select-input visually-hidden" type="radio" id="travel-way-check-in" name="travel-way"
                          value="check-in">
                        <label class="travel-way__select-label" for="travel-way-check-in">🏨 check-in</label>

                        <input class="travel-way__select-input visually-hidden" type="radio" id="travel-way-sightseeing" name="travel-way"
                          value="sight-seeing">
                        <label class="travel-way__select-label" for="travel-way-sightseeing">🏛 sightseeing</label>
                      </div>
                    </div>
                  </div>

                  <div class="point__destination-wrap">
                    <label class="point__destination-label" for="destination">${this._title} to</label>
                    <input class="point__destination-input" list="destination-select" id="destination" value="${this._city}" name="destination">
                    <datalist id="destination-select">
                      <option value="airport"></option>
                      <option value="Geneva"></option>
                      <option value="Chamonix"></option>
                      <option value="hotel"></option>
                    </datalist>
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
      .addEventListener(`click`, this._onReset.bind(this));
    this._element.querySelector(`.point__button--save`)
      .addEventListener(`click`, this._onSave.bind(this));
  }

  unbind() {
    // Удаление обработчиков
  }
}

export default EditEvent;
