(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power2.easeOut;

var tlPulse = new TimelineMax();
tlPulse.add('go');
tlPulse.from('.cta img', .3, { scale: .6, opacity: 0 }, 'go');
tlPulse.from('.black', .5, { opacity: 0, x: "-=0", yoyo: true, repeat: 6, repeatDelay: 0, ease: Sine.easeInOut }, '+=0');

setTimeout(function () {
	// TweenMax.to('.cta', .1, {scale:.501})
}, 2000);

var READ_T1 = 1.2;

var tl = new TimelineMax();

exports.size = size;
exports.tlPulse = tlPulse;
exports.READ_T1 = READ_T1;
exports.tl = tl;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _commonJs = require('./common.js');

var t1_time = .5;

function start(heroFunk) {
	var delay = location.hostname === 'localhost' ? 500 : 0;
	setTimeout(function () {
		tween(heroFunk);
	}, delay);
}

function tween(heroFunk) {
	_commonJs.tl.set('.frame1', { opacity: 1 });

	_commonJs.tl.from('.bg', .5, { x: -_commonJs.size.w, ease: Power2.easeOut }, .2);
	_commonJs.tl.from('.logo', .3, { opacity: 0 });

	if (heroFunk === 'hero_mask') {
		hero_mask();
	} else {
		hero_swipe();
	}

	_commonJs.tl.from('.t1', t1_time, { x: '-=' + 250, opacity: 0 });
	_commonJs.tl.from('.cta', .6, { opacity: 0, scale: .3 }, 'end');
	_commonJs.tl.add(_commonJs.tlPulse);
	// tl.gotoAndPlay('end')
}

function hero_swipe() {
	_commonJs.tl.from('.hero', t1_time, { x: '-=' + 250, opacity: 0 }, 't1+=' + t1_time * .8);
}

function hero_mask() {

	var hero = {};
	hero.dom = document.querySelector('.hero');
	hero.w = hero.dom.offsetWidth;
	hero.h = hero.dom.offsetHeight;

	var mask_from = { opacity: 0, clip: 'rect(0px,' + 0 + 'px,' + hero.h + 'px,0px)' };
	var mask_to = { opacity: 1, clip: 'rect(0px,' + hero.w + 'px,' + hero.h + 'px,0px)', ease: Power3.easeOut };

	_commonJs.tl.fromTo('.hero', .7, mask_from, mask_to, 't1+=.5');
}

exports['default'] = start;
module.exports = exports['default'];

},{"./common.js":1}],3:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _commonJsTween_onlineJs = require('../../_common/js/tween_online.js');

var _commonJsTween_onlineJs2 = _interopRequireDefault(_commonJsTween_onlineJs);

(0, _commonJsTween_onlineJs2['default'])('hero_mask');

},{"../../_common/js/tween_online.js":2}]},{},[3])


//# sourceMappingURL=main.js.map