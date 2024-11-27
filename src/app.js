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
const imgURL = 'https://www.eltiempo.com/infografias/2024/11/MisilesUK/assets/';
const imgQuery = '?et07041901';

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

/*===============================================
//* ScrollAnimation
================================================*/
const contenedorImgScroll = document.getElementById('contenedorImgScroll');
const imgScroll = document.getElementById('imgScroll');
const contenedorTextoScroll = document.querySelector('.contenedorTextoScroll');
// const imgScrollURL = `https://www.eltiempo.com/infografias/2024/11/MisilesUK/assets/Lanzador_D/lanza-misil0000.png?et11190836`

// console.log(imgScroll.src);
// https://www.eltiempo.com/infografias/2024/11/MisilesUK/assets/Lanzador_D/lanza-misil0000.png?et11190836
const scrollTotalFrames = 74;
let numeroScroll;

let contenedorImgScrollBounding_height =
 contenedorImgScroll.getBoundingClientRect().width / 1.777;
let heightTotal = (contenedorImgScrollBounding_height / 5) * scrollTotalFrames;

let numeroCadaCuantoPixeles = parseInt(heightTotal, 10) / scrollTotalFrames;
contenedorImgScroll.style.height =
 parseInt(heightTotal + numeroCadaCuantoPixeles * 20, 10) + 'px';

preloadImgs(
 `${imgURL}Lanzador_D/`,
 'lanza-misil',
 'png',
 scrollTotalFrames,
 imgQuery
);

function preloadImgs(url, nombreImg, extensionImg, numeroImgs, query) {
 for (let index = 0; index < numeroImgs; index++) {
  let img = new Image();
  img.src = `${url}${nombreImg}${index}.${extensionImg}${query}`;
  // console.log(img.src);
 }
}
document.addEventListener('scroll', e => {
 let contenedorImgScrollBounding = contenedorImgScroll.getBoundingClientRect();

 if (contenedorImgScrollBounding.top < 0) {
  const scrollPosition = Math.abs(contenedorImgScrollBounding.top);

  // console.log(Math.abs(contenedorImgScrollBounding.top));
  // console.log(numeroCadaCuantoPixeles);

  // console.log(
  //  Math.abs(contenedorImgScrollBounding.top) / numeroCadaCuantoPixeles
  // );

  // contenedorImgScroll.offsetTop - contenedorImgScrollBounding.top;
  if (
   parseInt(scrollPosition / numeroCadaCuantoPixeles, 10) <= scrollTotalFrames
  ) {
   numeroScroll = parseInt(scrollPosition / numeroCadaCuantoPixeles, 10);
   console.log(numeroScroll);
  }
  if (numeroScroll == 0) {
   numeroScroll = 1;
  }
  if (mediaQuery.matches) {
   imgScroll.src = `${imgURL}/Lanzador_D/lanza-misil${numeroScroll}.png${imgQuery}`;
  } else {
   imgScroll.src = `${imgURL}/Lanzador_M/lanza-misil${numeroScroll}.png${imgQuery}`;
  }
  if (numeroScroll >= scrollTotalFrames) {
   contenedorTextoScroll.classList.add('show');
  } else {
   contenedorTextoScroll.classList.remove('show');
  }
 }
});
