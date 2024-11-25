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

// document.addEventListener('mouseover', e => {
//  if (e.target.closest('.cls-10')) {
//   console.log('asdf');

//   document.getElementById('AlcanceMisil-Hover').classList.add('showHoverSVG');
//  }
// });
// document.addEventListener('mouseout', e => {
//  if (e.target.closest('.cls-10')) {
//   console.log('asdf');

//   document
//    .getElementById('AlcanceMisil-Hover')
//    .classList.remove('showHoverSVG');
//  }
// });

document.addEventListener('click', e => {
 if (e.target.closest('g[id*="-Hover"]')) {
  let elementClicked = e.target.closest('g[id*="-Hover"]');
  let elementSearched = document.getElementById(
   elementClicked.id.replace('-Hover', '-Presionado')
  );
  elementSearched.classList.toggle('showSVG');
 }
});
