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

var _commonJsCommonJs = require('../../_common/js/common.js');

function start() {
	var tl = new TimelineMax();
	tl.set('.frame1', { opacity: 1 });
	tl.from('.bg', .5, { y: _commonJsCommonJs.size.h, ease: Power2.easeOut }, .2);

	tl.from('.logo', .3, { opacity: 0 }, 'end');

	tl.add('t1', '+=.2');
	tl.from('.t1a', .35, { y: '+=' + 100, opacity: 0 }, 't1');
	tl.from('.t1b', .35, { y: '+=' + 100, opacity: 0 }, 't1+=.2');

	tl.from('.cta', .3, { opacity: 0, scale: .5 }, '+=.5');

	var tlPulse = new TimelineMax();
	tlPulse.from('.black', 1, { opacity: 0, x: "-=0", yoyo: true, repeat: 8, repeatDelay: 0, ease: Linear.easeNone }, '+=0');
}

start();

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
