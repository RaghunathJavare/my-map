// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1Mgbh":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "af599da5850bd9e5";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1GgH0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _getCityJs = require("./getCity.js");
var _getCityJsDefault = parcelHelpers.interopDefault(_getCityJs);
var _modelJs = require("./model.js");
var _mapViewJs = require("./views/mapView.js");
var _mapViewJsDefault = parcelHelpers.interopDefault(_mapViewJs);
"use strict";
const controlMap = async function() {
    // // Get currunt coords
    await _modelJs.getCurrentPosition();
    (0, _mapViewJsDefault.default).render(_modelJs.state.coords);
// Get mapView
};
controlMap();
const controlCityMap = async function() {
    const city = (0, _getCityJsDefault.default).getCityName();
    if (!city) return;
    (0, _mapViewJsDefault.default).spinner();
    (0, _mapViewJsDefault.default).removeEl();
    await _modelJs.loadCityMap(city);
    (0, _mapViewJsDefault.default).render(_modelJs.state.coords);
};
const init = function() {
    // subscriber
    (0, _getCityJsDefault.default).addHandlerCity(controlCityMap);
    (0, _mapViewJsDefault.default).renderMark();
};
init(); /*

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

},{"./getCity.js":"6aAE9","./model.js":"Py0LO","./views/mapView.js":"kRWdp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6aAE9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class GetCity {
    _parentEl = document.querySelector(".search");
    getCityName() {
        const city = this._parentEl.querySelector(".input__city--form").value;
        this._clear();
        return city;
    }
    _clear() {
        return this._parentEl.querySelector(".input__city--form").value = "";
    }
    addHandlerCity(handler) {
        this._parentEl.addEventListener("submit", function(e) {
            e.preventDefault();
            // Publisher
            handler();
        });
    }
}
exports.default = new GetCity();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"Py0LO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "getCurrentPosition", ()=>getCurrentPosition);
parcelHelpers.export(exports, "loadCityMap", ()=>loadCityMap);
var _helperJs = require("./helper.js");
var _configJs = require("./config.js");
const state = {
    coords: [],
    mapCoords: [],
    map: {
        mapEvnet: "",
        GetDateTask: []
    }
};
const getCurrentPosition = async function() {
    const data = await new Promise((resolve, reject)=>{
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    const { latitude: lat, longitude: lon } = data.coords;
    state.coords.push(lat, lon);
};
const loadCityMap = async function(city) {
    try {
        if (!city) return;
        const res = await (0, _helperJs.getJSON)(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${(0, _configJs.WEATHER__APIKEY)}`);
        const { lat, lon } = res[0];
        state.coords = [
            lat,
            lon
        ];
    } catch (err) {
        console.error(err);
    }
};
class GetDateTask {
    constructor(task, coords){
        this.coords = coords;
        this.task = task;
        this.#GetDateAndTime();
    }
    #GetDateAndTime() {
        const local = navigator.language;
        let options = {
            dateStyle: "medium",
            timeStyle: "short"
        };
        this.date = new Intl.DateTimeFormat(local, options).format(new Date());
    }
}
exports.default = new GetDateTask();

},{"./helper.js":"6fitd","./config.js":"4Wc5b","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6fitd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getJSON", ()=>getJSON);
const getJSON = async function(url) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        if (!res.ok) throw new Error("could not found city map try once again");
        return data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Wc5b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WEATHER__APIKEY", ()=>WEATHER__APIKEY);
parcelHelpers.export(exports, "GEOCODE__APIKEY", ()=>GEOCODE__APIKEY);
parcelHelpers.export(exports, "NAVIGATIOR__LANG", ()=>NAVIGATIOR__LANG);
parcelHelpers.export(exports, "MAPZOOM", ()=>MAPZOOM);
const WEATHER__APIKEY = `4df63278af2b102b563c9d0d9924e2e5`;
const GEOCODE__APIKEY = `296bad0f71c64d109beaa43e8c7a1112`;
const NAVIGATIOR__LANG = navigator.language;
const MAPZOOM = 14;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kRWdp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _modelJs = require("../model.js");
var _modelJsDefault = parcelHelpers.interopDefault(_modelJs);
var _configJs = require("../config.js");
class RenderMap {
    _parentElement = document.querySelector(".map-container");
    _taskContainer = document.querySelector(".data__container--1");
    _map;
    _mapEvnet;
    render(coords) {
        this._map = L.map("map").setView(coords, (0, _configJs.MAPZOOM));
        L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>contributors'
        }).addTo(this._map);
    }
    _clear() {
        this._parentElement.innerHTML = "";
    }
    spinner() {
        const markup = `
    <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
        </div>
   </div>`;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    removeEl() {
        this._clear();
        const newMap = document.createElement("div");
        newMap.id = "map";
        this._parentElement.append(newMap);
    }
}
exports.default = new RenderMap();

},{"../model.js":"Py0LO","../config.js":"4Wc5b","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["1Mgbh","1GgH0"], "1GgH0", "parcelRequirea4d9")

//# sourceMappingURL=index.850bd9e5.js.map
