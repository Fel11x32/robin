const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
});


const links = document.querySelectorAll('.photography__nav button');

const imageSets = {
	italy: [
		"img/photography/italy/1.jpeg",
		"img/photography/italy/2.jpeg",
		"img/photography/italy/3.jpeg",
		"img/photography/italy/4.jpeg",
	],
	australia: [
		"img/photography/australia/1.jpeg",
		"img/photography/australia/1.jpeg",
		"img/photography/australia/1.jpeg",
		"img/photography/australia/1.jpeg",
	],
	india: [
		"img/photography/india/1.jpeg",
		"img/photography/india/1.jpeg",
		"img/photography/india/1.jpeg",
		"img/photography/india/1.jpeg",
	],
	brazil: [
		"img/photography/brazil/1.jpeg",
		"img/photography/brazil/1.jpeg",
		"img/photography/brazil/1.jpeg",
		"img/photography/brazil/1.jpeg",
	]
};

links.forEach(link => {
	link.addEventListener('click', (e) => {
		e.preventDefault();

		links.forEach(btn => btn.classList.remove('photography__button_active'));
		link.classList.add('photography__button_active');

		const category = e.target.getAttribute('data-category');
		const newImages = imageSets[category];
		const imageContainer = document.querySelector('.photography__img');

		imageContainer.innerHTML = '';

		newImages.forEach(src => {
			const img = document.createElement('img');
			img.src = src;
			img.alt = 'Image';
			imageContainer.appendChild(img);
		});
	});
});