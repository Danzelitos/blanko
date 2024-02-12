const burger = document.querySelector('.burger-nav');
const closeBtn = document.querySelector('.burger__close');
const burgerMenu = document.querySelector('.burger-navigation');


burger.addEventListener('click', function(){
	burgerMenu.classList.toggle('burger-navigation-open');
})

closeBtn.addEventListener('click', function(){
	burgerMenu.classList.remove('burger-navigation-open');
})