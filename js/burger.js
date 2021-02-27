let burgerIcon = document.querySelector('.menu__burger');
let burgerMenu = document.querySelector('.menu__list');
let burgerBackground = document.querySelector('.menu');
let body = document.querySelector('.body');
burgerIcon.addEventListener("click", function (e) {
	burgerIcon.classList.toggle('_active-btn');
	burgerMenu.classList.toggle('_active-btn');
	burgerBackground.classList.toggle('_active-btn');
});