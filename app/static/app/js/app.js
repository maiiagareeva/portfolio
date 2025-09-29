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

const orbs = document.querySelectorAll('.orb');
const orbitCore = document.querySelector('.orbit-core');
const paddingX = 320;
const paddingY = 160;

const centerX = orbitCore.offsetWidth / 2;
const centerY = orbitCore.offsetHeight / 2;

const total = orbs.length;
const perimeter = 2 * (2 * paddingX + 2 * paddingY);
const step = (perimeter / total );

let pos = 0;

orbs.forEach((el, i) => {
  let x, y;
  if (pos < 2 * paddingX) {
    x = centerX - paddingX + pos;
    y = centerY - paddingY;
  } else if (pos < 2 * paddingX + 2 * paddingY) {
    x = centerX + paddingX;
    y = centerY - paddingY + (pos - 2 * paddingX);
  } else if (pos < 4 * paddingX + 2 * paddingY) {
    x = centerX + paddingX - (pos - (2 * paddingX + 2 * paddingY));
    y = centerY + paddingY;
  } else {
    x = centerX - paddingX;
    y = centerY + paddingY - (pos - (4 * paddingX + 2 * paddingY));
  }

  el.style.left = `${x - el.offsetWidth / 2}px`;
  el.style.top = `${y - el.offsetHeight / 2}px`;

  pos += step;
});
