import './index.css';


const burger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__nav');
const headerContainer = document.querySelector('.header__container');

burger.addEventListener('click', () => {
  console.log('click');
  burger.classList.toggle('active');
  headerMenu.classList.toggle('active');
  headerContainer.classList.toggle('active');
  document.body.classList.toggle('body_locked');
});