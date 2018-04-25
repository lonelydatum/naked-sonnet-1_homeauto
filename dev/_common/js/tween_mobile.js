import {size, tlPulse, READ_T1, tl} from './common.js'


function start() {	
	tl.set('.frame1', {opacity:1})
	// tl.from('.bg', .3, {y:size.h, ease:Power2.easeOut}, .2)
	
	tl.from('.logo', .3, {opacity:0}, 'end')

	tl.add('t1', '+=.2')
	tl.from(['.t1a', '.t1b'], .35, {y:`+=${100}`, opacity:0}, 't1')
	// tl.from('.t1b', .35, {y:`+=${100}`, opacity:0}, 't1+=.2')

	
	tl.add(tlPulse)
	

}



export default start

