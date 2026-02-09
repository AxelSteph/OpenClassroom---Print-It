const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const bannerImg = document.querySelector('.banner-img');
const bannerTagLine = document.querySelector('#banner p');

const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');

let currentIndex = 0;

slides.forEach((slide, index) => {
		const dot = document.createElement('span');
		dot.classList.add('dot');
		if (index === 0) {
			dot.classList.add('dot_selected');
		}			

		dot.addEventListener('click', () => {
			currentIndex = index;
			updateSlide();
		});

		document.querySelector('.dots').appendChild(dot);
});


const dots = document.querySelectorAll('.dot');

function updateSlide() {
	console.log(currentIndex);
	bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
	bannerTagLine.innerHTML = slides[currentIndex].tagLine;

	dots.forEach((dot, index) => {
		if (index === currentIndex) {
			dot.classList.add('dot_selected');
		} else {
			dot.classList.remove('dot_selected');
		}
	});
}

rightArrow.addEventListener('click', () => {
	currentIndex += 1;
	if (currentIndex == slides.length) {
		currentIndex = 0;
	}
	updateSlide();
});

leftArrow.addEventListener('click', () => {
	currentIndex -= 1;
	if (currentIndex < 0) {
		currentIndex = slides.length - 1;
	}
	updateSlide();
});