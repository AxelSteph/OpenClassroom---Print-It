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
const dots = document.querySelectorAll('.dot');

const leftArrow = document.querySelector('.prev');
const rightArrow = document.querySelector('.next');

let currentIndex = 0;

rightArrow.addEventListener('click', () => {
	currentIndex += 1;
	if (currentIndex == slides.length) {
		currentIndex = 0;
	}
	console.log(currentIndex);
	bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
	bannerTagLine.innerHTML = slides[currentIndex].tagLine;
});

leftArrow.addEventListener('click', () => {
	currentIndex -= 1;
	if (currentIndex < 0) {
		currentIndex = slides.length - 1;
	}
	console.log(currentIndex);
	bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
	bannerTagLine.innerHTML = slides[currentIndex].tagLine;
});



