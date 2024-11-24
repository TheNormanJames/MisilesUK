// import {
//   activeMenu
// } from './js/modules/active-menu';

// import "./assets/*.png";
import './scss/style.scss';

/*===============================================
=============        Components         =========
================================================*/
// import './js/effects/loader';

const mediaQuery = window.matchMedia('(min-width: 768px)');
// Slider Variables
let posicionNumero = 0;
const totalSliderItems = document.querySelectorAll(
 '.sliderNNJ .sliderItem'
).length;
const sliderItems = document.querySelector('.sliderItems');

document.addEventListener('click', e => {
 if (e.target.matches('#sliderArrowL')) {
  posicionNumero--;
  if (posicionNumero < 0) {
   posicionNumero = totalSliderItems - 1;
  }
 }
 if (e.target.matches('#sliderArrowR')) {
  posicionNumero++;
  if (totalSliderItems <= posicionNumero) {
   posicionNumero = 0;
  }
 }
 sliderItems.style.translate = `-${posicionNumero}00% 0`;
});
