import {size, tlPulse, READ_T1, tl} from '../../_common/js/common.js'



const t1_time = .3

function start(heroFunk) {
	const delay = (location.hostname==='localhost') ? 500 : 0
	setTimeout(()=>{
		tween(heroFunk)	
	}, delay)
}

function tween(heroFunk) {
	
	tl.set('.frame1', {opacity:1})
	// tl.from('.bg', .4, {y:size.h, ease:Power2.easeOut}, .2)


	tl.from('.logo', .3, {opacity:0})
	

	if(heroFunk==='hero_mask'){
		hero_mask()	
	}else{
		hero_swipe()
	}


	
	tl.from('.t1', t1_time, {y:`+=${90}`, opacity:0})

	tl.from('.line', .3, {scaleY:0})
	

	
	
	
	
	tl.add(tlPulse)


}




function hero_swipe(){	
	tl.from('.hero', t1_time, {y:`+=${90}`, opacity:0}, `t1+=${t1_time*.8}`)
}

function hero_mask(){
	const hero = {}
	hero.dom = document.querySelector('.hero')
	hero.w = hero.dom.offsetWidth
	hero.h = hero.dom.offsetHeight
	
	const mask_from = {opacity:0, clip: `rect(${hero.h}px,${hero.w}px,${hero.h}px,0px)`}
	const mask_to = {opacity:1, clip: `rect(0px,${hero.w}px,${hero.h}px,0px)`, ease:Power3.easeOut}
	
	tl.fromTo('.hero', .6, mask_from, mask_to, `t1+=.5`)
}


start('hero_mask')

