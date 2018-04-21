(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power2.easeOut;

exports.size = size;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _commonJs = require('./common.js');

function start() {
	var tl = new TimelineMax();
	tl.set('.frame1', { opacity: 1 });
	tl.from('.bg', .5, { x: -_commonJs.size.w, ease: Power2.easeOut }, .2);

	tl.add('t1');
	var t1_time = .5;
	tl.from('.t1', t1_time, { x: '-=' + 250, opacity: 0 }, 't1');
	tl.from('.hero', t1_time, { x: '-=' + 250, opacity: 0 }, 't1+=' + t1_time * .8);

	tl.add('t2', '+=2');
	tl.from('.t2a', .35, { x: '-=' + 100, opacity: 0 }, 't2');
	tl.from('.t2b', .35, { x: '-=' + 100, opacity: 0 }, 't2+=.2');

	tl.add('end', '+=.1');
	tl.from('.line', .3, { scaleY: 0 }, 'end');
	tl.from('.logo', .3, { opacity: 0 }, 'end');
	tl.from('.cta', .3, { opacity: 0, scale: .5 }, 'end');

	var tlPulse = new TimelineMax();
	tlPulse.from('.black', 1, { opacity: 0, x: "-=0", yoyo: true, repeat: 8, repeatDelay: 0, ease: Linear.easeNone }, '+=0');
}

exports['default'] = start;
module.exports = exports['default'];

},{"./common.js":1}],3:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _commonJsTweenJs = require('../../_common/js/tween.js');

var _commonJsTweenJs2 = _interopRequireDefault(_commonJsTweenJs);

(0, _commonJsTweenJs2['default'])();

},{"../../_common/js/tween.js":2}]},{},[3])


//# sourceMappingURL=main.js.map
