document.addEventListener('DOMContentLoaded', () => {

  const burger = document.querySelector('.burger');

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active');
  });

});



const root = document.documentElement;
const darkBackgraund = '#2b2b2b';
const lightBackgraund = '#fafafa';

const button = document.querySelector('.header__burger');

button.addEventListener('click', () => {
  root.style.setProperty('--team-backgraund', lightBackgraund);

});
