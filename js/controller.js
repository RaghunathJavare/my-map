'use strict';
import getCity from './getCity.js';
import * as model from './model.js';
import mapView from './views/mapView.js';


const controlMap = async function () {
  // // Get currunt coords
  await model.getCurrentPosition();

  mapView.render(model.state.coords);
  // Get mapView
};
controlMap();

const controlCityMap = async function () {
  const city = getCity.getCityName();
  if (!city) return;
  mapView.spinner();
  mapView.removeEl();
  await model.loadCityMap(city);
  mapView.render(model.state.coords);
};

const init = function () {
  // subscriber
  getCity.addHandlerCity(controlCityMap);
  mapView.renderMark()
};
init();
/*

const mapContainer = document.querySelector('.map--container');
const dataContainer1 = document.querySelector('.data__container--1');
const countryContainer = document.querySelector('.country--container');
const btnGetCity = document.querySelector('.btn__get--city');
const btnCountry = document.querySelector('.btn-country');
const btnWeather = document.querySelector('.btn__country--weather');
const getCityName = document.querySelector('.input__city--form');
const getTaskForm = document.querySelector('.input-task');
const inputTaskContainer = document.querySelector('.task-container');
// Get Time and Date

class GetData {
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

// Country information map

class App {
  // Private filds
  #weatherApiKey = '4df63278af2b102b563c9d0d9924e2e5';
  #geoCodeApiKey = '296bad0f71c64d109beaa43e8c7a1112';
  #map;
  #getDateTimeTaskArr = [];
  #getDateTimeTask;
  #mapEvnet;

  constructor() {
    // Always runs when Class created
    this.#getCuurentPosition();
    this.#getLocalStorage();

    // Events
    btnGetCity.addEventListener('click', this.#getCityMap.bind(this));
    getTaskForm.addEventListener('submit', this.#eventRenderWork.bind(this));
    btnCountry.addEventListener('click', this.#showContryData);
  }

  // Get current position

  #getCuurentPosition() {
    getCityName.focus();
    new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    }).then(data => {
      const { latitude: lat, longitude: lng } = data.coords;
      this.#getMap(lat, lng);
      this.#loadCountry(lat, lng);
    });
  }

  // Request to getting data form external sites

  #getJSON(url) {
    return fetch(url).then(res => {
      if (!res.ok) throw new Error('No found city');
      return res.json();
    });
  }

  // Hidding map
  #mapHidden() {
    mapContainer.innerHTML = '';
    const newMap = document.createElement('div');
    newMap.id = 'map';
    mapContainer.append(newMap);
    getCityName.value = '';
  }

  // Get city map

  #getCityMap(e) {
    e.preventDefault();

    const city = getCityName.value;

    if (!city) {
      alert('Enter city name first');
    } else {
      this.#getJSON(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${
          this.#weatherApiKey
        }`
      )
        .then(data => {
          if (data.length > 0) this.#mapHidden();
          const { lat, lon } = data[0];
          this.#getMap(lat, lon);
          getCityName.value = '';
        })
        .catch(err => {
          console.error(err);
        });
    }
  }

  // Getting map with lat and lon1
  #getMap(lat, lng) {
    this.#map = L.map('map').setView([lat, lng], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>contributors',
    }).addTo(this.#map);
    this.#map.on('click', this.#getMarkerCoords.bind(this));
    this.#getDateTimeTaskArr.forEach(data => this.#renderMarker(data));
  }

  // Render Mark
  #getMarkerCoords(mapEvent) {
    this.#mapEvnet = mapEvent;
    const { lat, lng } = mapEvent.latlng;
    // inputTaskContainer.classList.remove('hide__task--container');
    getTaskForm.focus();
    this.#loadCountry(lat, lng);
    countryContainer.innerHTML = '';
  }

  // Event render work

  #eventRenderWork(e) {
    e.preventDefault();

    const task = getTaskForm.value;
    if (!task) return;
    const { lat, lng } = this.#mapEvnet.latlng;
    // Set data to arr
    this.#getDateTimeTask = new GetData(task, [lat, lng]);
    this.#getDateTimeTaskArr.push(this.#getDateTimeTask);
    getTaskForm.value = '';
    this.#renderWorks(this.#getDateTimeTask);

    // Render marker to map
    this.#renderMarker(this.#getDateTimeTask);

    // Set to local storage
    this.#setToLocalStorage();
  }

  // Rendering works
  #renderWorks(data) {
    const html = `
    <div class=" alert container-fluid tasks mt-4">
        <div class="work-container">
            <p style="text-align:left;">${data.date}</p>
            <h4>${data.task}</h4>
        </div>
        <div class="btn__close">
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><span
                    class="material-symbols-outlined">
                </span></button>
        </div>

    </div>

    `;
    dataContainer1.insertAdjacentHTML('beforeend', html);
    inputTaskContainer.classList.add('hide__task--container');
  }

  #renderMarker(data) {
    L.marker(data.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxwidth: 100,
          minwidth: 70,
          autoClose: false,
          closeOnClick: false,
          className: `task-popup`,
        })
      )
      .setPopupContent(`${data.task}`)
      .openPopup();
  }

  #setToLocalStorage() {
    localStorage.setItem('task', JSON.stringify(this.#getDateTimeTaskArr));
  }

  #getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('task'));
    if (!data) return;

    this.#getDateTimeTaskArr = data;
    this.#getDateTimeTaskArr.forEach(data => this.#renderWorks(data));
  }

  // Load country data
  #loadCountry(lat, lng) {
    this.#getJSON(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&format=json&apiKey=${
        this.#geoCodeApiKey
      }`
    )
      .then(data => {
        const [res] = data.results;
        return this.#getJSON(`
      https://restcountries.com/v3.1/name/${res.country}`);
      })
      .then(data => this.#renderCountry(data));
  }

  //  Render country
  #renderCountry(data) {
    // countryContainer.classList.add('hide-containers');
    countryContainer.innerHTML = '';

    const { svg } = data[0].flags;

    const [currencieObj] = Object.values(data[0].currencies);

    const { name } = currencieObj;

    // Get language
    const languageObj = Object.values(data[0].languages);

    const [countryLang] = languageObj;

    const html = `
        <article class="country">
            <img class="country__img" src="${svg}" />
            <div class="country__data">
                <h3 class="country__name">${data[0].cca3}</h3>
                <h4 class="country__region">${data[0].region}</h4>
                <p class="country__row"><span>👫</span>${(
                  +data[0].population / 100000000
                ).toFixed(2)}</p>
                <p class="country__row"><span>🗣️</span>${countryLang}</p>
                <p class="country__row"><span>💰</span>${name}</p>
            </div>
        </article>

`;

    countryContainer.insertAdjacentHTML('beforeend', html);
  }

  #showContryData() {
    countryContainer.classList.remove('hide-containers');
  }
  reset() {
    localStorage.removeItem('task');
    location.reload();
  }

  // Load weather
  #loadWeather(data) {}
}

const app = new App();
*/
