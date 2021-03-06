// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/js/util.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;
exports.getAll = getAll;

function get(selector) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return target.querySelector(selector);
}

function getAll(selector) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return target.querySelectorAll(selector);
}
},{}],"src/js/navigation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initNavigation = initNavigation;

var _util = require("./util");

function initNavigation() {
  var navIcons = (0, _util.getAll)('[data-js=nav-icon]');
  var pages = (0, _util.getAll)('[data-js=page]');
  navIcons.forEach(function (icon) {
    icon.addEventListener('click', function () {
      var iconName = icon.dataset.name;
      pages.forEach(function (page) {
        var pageName = page.dataset.name;
        page.classList.toggle('hidden', pageName !== iconName);
      });
      navIcons.forEach(function (oneOfAllIcons) {
        oneOfAllIcons.classList.toggle('nav__icon--active', oneOfAllIcons === icon);
      });
    });
  });
}
},{"./util":"src/js/util.js"}],"src/js/card.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initCards = initCards;
exports.createCard = createCard;
exports.cards = void 0;

var _util = require("./util");

var cards = [{
  question: 'Dies ist unsere Frage Nummer 1',
  answer: 'Dies ist unsere schlaue Antwort',
  tags: ['css', 'html']
}, {
  question: 'Dies ist unsere Frage Nummer 2',
  answer: 'Dies ist unsere schlaue Antwort',
  tags: ['array', 'methods', 'javascript', 'es6']
}, {
  question: 'Dies ist unsere Frage Nummer 3',
  answer: 'Dies ist unsere schlaue Antwort'
}];
exports.cards = cards;

function initCards() {
  cards.forEach(createCard);
}

function createCard() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      question = _ref.question,
      answer = _ref.answer,
      _ref$tags = _ref.tags,
      tags = _ref$tags === void 0 ? [] : _ref$tags;

  var newCard = document.createElement('section');
  newCard.className = 'card s-box p-l-r-20 m-t-b-20 b-4-blue';
  var target = (0, _util.get)('.page__index');
  target.appendChild(newCard);
  var tagList = document.createElement('ul');
  tagList.classList.add('card__tags', 'p-0');
  tags.forEach(function (tag) {
    var listItem = document.createElement('li');
    listItem.innerHTML = tag;
    tagList.appendChild(listItem);
  });
  newCard.innerHTML =
  /*html*/
  "<button data-js=\"bookmark\" class=\"card__bookmark\">\n  <svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  height=\"24\"\n  viewBox=\"0 0 24 24\"\n  width=\"24\"\n  class=\"w-h-60\"\n  >\n  <path d=\"M0 0h24v24H0V0z\" fill=\"none\" />\n  <path\n  d=\"M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z\"\n  fill=\"currentcolor\"\n  />\n  </svg>\n  </button>\n  <h2 class=\"m-t-b-10\">QUESTION:</h2>\n  <p class=\"m-t-b-10\">\n  ".concat(question, "\n  </p>\n  <button class=\"card__button b-4-blue m-10 p-10\">SHOW ANSWER</button>\n  <p class=\"card__answer hidden\">\n  ").concat(answer, "\n  </p>\n  ");
  newCard.appendChild(tagList);
  addToggleLogic(newCard);
  addBookmarkLogic(newCard);
}

function addToggleLogic(card) {
  var textShowAnswer = card.querySelector('.card__answer');
  var buttonShowAnswer = card.querySelector('.card__button');
  buttonShowAnswer === null || buttonShowAnswer === void 0 ? void 0 : buttonShowAnswer.addEventListener('click', function () {
    textShowAnswer.classList.toggle('hidden');
    buttonShowAnswer.textContent = buttonShowAnswer.textContent === 'Hide answer' ? 'Show answer' : 'Hide answer';
  });
}

function addBookmarkLogic(card) {
  var bookmark = card.querySelector('[data-js="bookmark"]');
  bookmark.addEventListener('click', function () {
    return bookmark.classList.toggle('card__bookmark--active');
  });
}
},{"./util":"src/js/util.js"}],"src/js/form.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initFormSubmit = initFormSubmit;

var _util = require("./util");

var _card = require("./card");

function initFormSubmit() {
  var form = (0, _util.get)('form');
  form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (event) {
    event.preventDefault();
    var question = form.question,
        answer = form.answer,
        tags = form.tags;

    _card.cards.push({
      question: question.value,
      answer: answer.value,
      tags: tags.value.split(',').map(function (tag) {
        return tag.trim();
      })
    });

    console.log('card created');
    form.reset();
  });
}
},{"./util":"src/js/util.js","./card":"src/js/card.js"}],"src/js/darkmode.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initDarkmode = initDarkmode;

var _util = require("./util");

function initDarkmode() {
  // Darkmode Switch
  var main = (0, _util.get)('main');
  var header = (0, _util.get)('header');
  var footer = (0, _util.get)('footer');
  var svg = (0, _util.get)('svg');
  var darkmodeSwitch = (0, _util.get)('.button__darkmode'); // Darkmode Switch

  darkmodeSwitch.addEventListener('click', function () {
    main.classList.toggle('darkmode');
    header.classList.toggle('darkmode');
    footer.classList.toggle('darkmode');
    svg.classList.toggle('svg__darkmode');
  });
}
},{"./util":"src/js/util.js"}],"src/js/index.js":[function(require,module,exports) {
"use strict";

var _navigation = require("./navigation");

var _card = require("./card");

var _form = require("./form");

var _darkmode = require("./darkmode");

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    (0, _card.initCards)();
    (0, _navigation.initNavigation)();
    (0, _form.initFormSubmit)();
    (0, _darkmode.initDarkmode)();
  });
});
},{"./navigation":"src/js/navigation.js","./card":"src/js/card.js","./form":"src/js/form.js","./darkmode":"src/js/darkmode.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64064" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/js/index.js"], null)
//# sourceMappingURL=/js.d818e0ef.js.map