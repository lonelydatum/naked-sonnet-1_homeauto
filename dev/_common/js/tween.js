import {size} from './common.js'

function start() {
	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})
	tl.from('.bg', .5, {x:-size.w, ease:Power2.easeOut}, .2)

	tl.add('t1')
	const t1_time = .5
	tl.from('.t1', t1_time, {x:`-=${250}`, opacity:0}, 't1')
	tl.from('.hero', t1_time, {x:`-=${250}`, opacity:0}, `t1+=${t1_time*.8}`)

	tl.add('t2', '+=2')
	tl.from('.t2a', .35, {x:`-=${100}`, opacity:0}, 't2')
	tl.from('.t2b', .35, {x:`-=${100}`, opacity:0}, 't2+=.2')

	tl.add('end', '+=.1')
	tl.from('.line', .3, {scaleY:0}, 'end')
	tl.from('.logo', .3, {opacity:0}, 'end')
	tl.from('.cta', .3, {opacity:0, scale:.5}, 'end')


	const tlPulse = new TimelineMax()
	tlPulse.from('.black', 1, {opacity:0, x:"-=0", yoyo:true, repeat:8, repeatDelay:0, ease:Linear.easeNone}, '+=0')
}



export default start

