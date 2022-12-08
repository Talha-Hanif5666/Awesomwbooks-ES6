import { DateTime } from './luxon.js';

const dates = document.querySelector('#date');
const setTime = () => {
  const now = DateTime.now();
  const date = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  dates.textContent = date;
};

setInterval(setTime, 1000);