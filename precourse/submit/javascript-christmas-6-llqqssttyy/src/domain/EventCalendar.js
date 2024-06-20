import { FRIDAY, SATURDAY, SPECIAL_DATES } from '../constants/calendar.js';
import { EVENT_PERIOD } from '../constants/event.js';
import { ALL_EVENTS } from './Events.js';

class EventCalendar {
  #year;

  #month;

  #date;

  #availableEvents;

  constructor(year, month, date) {
    this.#year = year;
    this.#month = month;
    this.#date = date;
    this.#availableEvents = {};
  }

  async setAvailableEvents({ totalPrice, orderCategories }) {
    const state = this.#getState(totalPrice, orderCategories);

    await Object.values(ALL_EVENTS).forEach((event) => {
      const { name, getBenefit } = event.getEvent();

      if (event.isEventAvailable(state))
        this.#availableEvents[name] = getBenefit;
    });
  }

  #getState(totalPrice, orderCategories) {
    return {
      isWeekend: this.#isWeekend(),
      isSpecialDate: this.#isSpecialDate(),
      isChristmasPeriod: this.#isChristmasPeriod(),
      totalPrice,
      orderCategories,
    };
  }

  #isWeekend() {
    const dayOfWeek = new Date(
      `${this.#year}-${this.#month}-${this.#date}`,
    ).getDay();
    return dayOfWeek === FRIDAY || dayOfWeek === SATURDAY;
  }

  #isSpecialDate() {
    return SPECIAL_DATES.includes(this.#date);
  }

  #isChristmasPeriod() {
    const { startDate, endDate } = EVENT_PERIOD;
    return this.#date >= startDate && this.#date <= endDate;
  }

  get availableEvents() {
    return this.#availableEvents;
  }
}

export default EventCalendar;
