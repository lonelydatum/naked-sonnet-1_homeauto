import {size} from '../../_common/js/common.js'


function start() {
	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})
	tl.from('.bg', .5, {y:size.h, ease:Power2.easeOut}, .2)

	
	
	
	tl.from('.logo', .3, {opacity:0}, 'end')

	tl.add('t1', '+=.2')
	tl.from('.t1a', .35, {y:`+=${100}`, opacity:0}, 't1')
	tl.from('.t1b', .35, {y:`+=${100}`, opacity:0}, 't1+=.2')

	
	
	
	tl.from('.cta', .3, {opacity:0, scale:.5}, '+=.5')


	const tlPulse = new TimelineMax()
	tlPulse.from('.black', 1, {opacity:0, x:"-=0", yoyo:true, repeat:8, repeatDelay:0, ease:Linear.easeNone}, '+=0')
}



start()

