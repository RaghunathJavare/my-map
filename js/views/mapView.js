import GetDateTask, { mapEvnet } from '../model.js';
import { MAPZOOM } from '../config.js';

class RenderMap {
  _parentElement = document.querySelector('.map-container');
  _taskContainer = document.querySelector('.data__container--1');
  _map;
  _mapEvnet;

  render(coords) {
    this._map = L.map('map').setView(coords, MAPZOOM);
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>contributors',
    }).addTo(this._map);

  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  spinner() {
    const markup = `
    <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
        </div>
   </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  removeEl() {
    this._clear();
    const newMap = document.createElement('div');
    newMap.id = 'map';
    this._parentElement.append(newMap);
  }

}
export default new RenderMap();
