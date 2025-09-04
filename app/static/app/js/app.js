const swiperText = new Swiper('.swiper', {
	speed: 1600,
	mousewheel: { },
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
	navigation: {
		prevEl: '.swiper-button-prev',
		nextEl: '.swiper-button-next'
	},
	keyboard: {
		enabled: true,
		onlyInViewport: false
	}
});



// 3D Scroll

let zSpacing = -1000,
		lastPos = zSpacing / 5,
		$frames = document.getElementsByClassName('frame'),
		frames = Array.from($frames),
		zVals = []

window.onscroll = function() {

	let top = document.documentElement.scrollTop,
			delta = lastPos - top //такой хак

	lastPos = top

	frames.forEach(function(n, i) {
		zVals.push((i * zSpacing) + zSpacing) // двигается по убыванию + пространство до первого кадра
		zVals[i] += delta * -2 // speed of scroll
		let frame = frames[i],
				transform = `translateZ(${zVals[i]}px)`,
				opacity = zVals[i] < Math.abs(zSpacing) / 1.5 ? 1 : 0
		frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
	})

}

window.scrollTo(0, 1)