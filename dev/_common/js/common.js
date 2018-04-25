const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}




TweenLite.defaultEase = Power2.easeOut







const tlPulse = new TimelineMax()

// tlPulse.from('.cta img', .3, {scale:.6, opacity:0}, 'go')
// tlPulse.from('.black', .5, {opacity:0, x:"-=0", yoyo:true, repeat:6, repeatDelay:0, ease:Sine.easeInOut}, '+=0')

tlPulse.from('.cta', .3, {opacity:0, scale:.3, ease:Back.easeInOut}, 'end')
tlPulse.from('.black', .3, {x:'+=50', y:'+=50', ease:Power2.easeOut}, '+=.1')


	

const READ_T1 = 1.2

const tl = new TimelineMax()


export {size, tlPulse, READ_T1, tl}