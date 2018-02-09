/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const NasaAPI = __webpack_require__(1);
const SoundNASAData = __webpack_require__(3);
const ApiKey = __webpack_require__(5)

const app = function () {
    var venusURL = 'https://images-api.nasa.gov/search?media_type=video&keywords=venus';
    var nasaAPI = new NasaAPI(venusURL);
    nasaAPI.getCollectionURLS();
    var catrionaKey = new ApiKey().getCatrionaKey();
    var mattKey = new ApiKey().getMattKey();
    var soundNasaApi = new SoundNASAData('https://api.nasa.gov/planetary/sounds?q=mars&api_key=' + mattKey);
    soundNasaApi.getData();
}

window.addEventListener('load', app);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const Request = __webpack_require__(2);

const NasaAPI = function (url) {
    this.url = url;
    this.colllectionURLS = [];
}

NasaAPI.prototype.getCollectionURLS = function () {
    var request = new Request(this.url);
    request.getRequest()
}


NasaAPI.prototype.getHrefs = function (searchResults) {
    var hrefs = videos.map(searchResults = searchResults => [searchResults.collection.items.href]);
    return hrefs;
}

// var unconvertedString = searchResults.collection.items[0].href;
// var changedString = unconvertedString.replace(/ /g,"%20");
// console.log(unconvertedString);
// console.log(changedString);

module.exports = NasaAPI;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

const Request = function (url) {
    this.url = url;
}

Request.prototype.getRequest = function(callback) {
    var request = new XMLHttpRequest();
    request.open('GET', this.url);
    request.addEventListener('load', function () {
        if(this.status != 200){
            return;
        }
        const responseBody = JSON.parse(this.responseText);
        callback(responseBody);
    });
    request.send();
}


module.exports = Request;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const Request = __webpack_require__(2);

const SoundNASAData = function(url) {
  this.url = url;
}

SoundNASAData.prototype.getData = function() {
  let request = new Request(this.url);
  request.getRequest(this.showData);
};

SoundNASAData.prototype.showData = function(data) {
  console.log(data.items);
};

module.exports = SoundNASAData;


/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

const APIKey = function(){
  this.catrionaKey = 'QLn3BOptgkNzClciQuNWXzwV0AsUVKOCr01MbgFk';
  this.mattKey = "9AsiGWIMkVlJVOoljVmpT2mNvJNFPHSL1ZdTa74k";
};

APIKey.prototype.getCatrionaKey = function () {
  return this.catrionaKey;
};

APIKey.prototype.getMattKey = function () {
  return this.mattKey;
};

module.exports = APIKey;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map