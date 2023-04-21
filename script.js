const image = document.querySelector('.disappear');
const menu = document.querySelector('.menu');

window.addEventListener('scroll', function() {
	const distance = menu.getBoundingClientRect().top;
	
	if (distance < 50) {
		image.style.opacity = 0;
	} else {
		image.style.opacity = 1;
	}
});
