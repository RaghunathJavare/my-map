import { getJSON } from './helper.js';
import { WEATHER__APIKEY } from './config.js';

export const state = {
  coords: [],
  mapCoords: [],
  map: {
    mapEvnet: '',
    GetDateTask: [],
  },
};

export const getCurrentPosition = async function () {
  const data = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
  const { latitude: lat, longitude: lon } = data.coords;
  state.coords.push(lat, lon);
};

export const loadCityMap = async function (city) {
  try {
    if (!city) return;
    const res = await getJSON(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${WEATHER__APIKEY}`
    );
    const { lat, lon } = res[0];
    state.coords = [lat, lon];
  } catch (err) {
    console.error(err);
  }
};



class GetDateTask {
  constructor(task, coords) {
    this.coords = coords;
    this.task = task;
    this.#GetDateAndTime();
  }

  #GetDateAndTime() {
    const local = navigator.language;
    let options = {
      dateStyle: 'medium',
      timeStyle: 'short',
    };
    this.date = new Intl.DateTimeFormat(local, options).format(new Date());
  }
}
export default new GetDateTask();
