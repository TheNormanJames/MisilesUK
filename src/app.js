// // import {
// //   activeMenu
// // } from './js/modules/active-menu';

// // import "./assets/*.png";
import './scss/style.scss';

// /*===============================================
// =============        Components         =========
// ================================================*/
// // import './js/effects/loader';

const mediaQuery = window.matchMedia('(min-width: 768px)');
// const imgURL = 'https://www.eltiempo.com/infografias/2024/11/MisilesUK/assets/';
const imgURL =
 'https://www.eltiempo.com/infografias/2023/07/museoNacional/assets/';
const imgQuery = '?et07041901';

document.addEventListener('mouseover', e => {
 if (e.target.closest('.cls-10')) {
  console.log('asdf');

  document.getElementById('AlcanceMisil-Hover').classList.add('showHoverSVG');
 }
});
document.addEventListener('mouseout', e => {
 if (e.target.closest('.cls-10')) {
  console.log('asdf');

  document
   .getElementById('AlcanceMisil-Hover')
   .classList.remove('showHoverSVG');
 }
});

document.addEventListener('click', e => {
 if (e.target.closest('g[id*="-Hover"]')) {
  let elementClicked = e.target.closest('g[id*="-Hover"]');
  let elementSearched = document.getElementById(
   elementClicked.id.replace('-Hover', '-Presionado')
  );
  elementSearched.classList.toggle('showSVG');
 }
});

// // /*===============================================
// // //* ScrollAnimation Antes
// // ================================================*/
// const contenedorImgScroll = document.getElementById('contenedorImgScroll');
// const imgScroll = document.getElementById('imgScroll');
// const contenedorTextoScroll = document.querySelector('.contenedorTextoScroll');
// // const imgScrollURL = `https://www.eltiempo.com/infografias/2024/11/MisilesUK/assets/Lanzador_D/lanza-misil0000.png?et11190836`

// // console.log(imgScroll.src);
// // https://www.eltiempo.com/infografias/2024/11/MisilesUK/assets/Lanzador_D/lanza-misil0000.png?et11190836
// const scrollTotalFrames = 74;
// let numeroScroll;

// let contenedorImgScrollBounding_height =
//  contenedorImgScroll.getBoundingClientRect().width / 1.777;
// let heightTotal = (contenedorImgScrollBounding_height / 5) * scrollTotalFrames;

// let numeroCadaCuantoPixeles = parseInt(heightTotal, 10) / scrollTotalFrames;
// contenedorImgScroll.style.height =
//  parseInt(heightTotal + numeroCadaCuantoPixeles * 20, 10) + 'px';

// // preloadImgs(
// //  `${imgURL}Lanzador_D/`,
// //  'lanza-misil',
// //  'png',
// //  scrollTotalFrames,
// //  imgQuery
// // );

// // function preloadImgs(url, nombreImg, extensionImg, numeroImgs, query) {
// //  for (let index = 0; index < numeroImgs; index++) {
// //   let img = new Image();
// //   img.src = `${url}${nombreImg}${index}.${extensionImg}${query}`;
// //   // console.log(img.src);
// //  }
// // }
// const frames3DMuseo = 60;
// document.addEventListener('scroll', e => {
//  let contenedorImgScrollBounding = contenedorImgScroll.getBoundingClientRect();

//  if (contenedorImgScrollBounding.top < 0) {
//   const scrollPosition = Math.abs(contenedorImgScrollBounding.top);

//   // console.log(Math.abs(contenedorImgScrollBounding.top));
//   // console.log(numeroCadaCuantoPixeles);

//   // console.log(
//   //  Math.abs(contenedorImgScrollBounding.top) / numeroCadaCuantoPixeles
//   // );

//   // contenedorImgScroll.offsetTop - contenedorImgScrollBounding.top;
//   if (
//    parseInt(scrollPosition / numeroCadaCuantoPixeles, 10) <= scrollTotalFrames
//   ) {
//    numeroScroll = parseInt(scrollPosition / numeroCadaCuantoPixeles, 10);
//    // console.log(numeroScroll);
//   }
//   if (numeroScroll == 0) {
//    numeroScroll = 1;
//   }
//   if (mediaQuery.matches) {
//    imgScroll.src = `${imgURL}3DMuseoScroll/Vista${numeroScroll}.jpg${imgQuery}`;
//    // imgScroll.src = `${imgURL}/Lanzador_D/lanza-misil${numeroScroll}.png${imgQuery}`;
//   } else {
//    imgScroll.src = `${imgURL}3DMuseoScroll/Vista${numeroScroll}.jpg${imgQuery}`;
//    // imgScroll.src = `${imgURL}/Lanzador_M/lanza-misil${numeroScroll}.png${imgQuery}`;
//   }
//   if (numeroScroll >= scrollTotalFrames) {
//    contenedorTextoScroll.classList.add('show');
//   } else {
//    contenedorTextoScroll.classList.remove('show');
//   }
//  }
// });

// const preloadImages = im_url => {
//  let img = new Image();
//  // img.src = im_url;
//  img.src = `${imgURL}3DMuseoScroll/Vista${im_url}.jpg${imgQuery}`;
// };
// for (let i = 0; i < frames3DMuseo; i++) {
//  preloadImages(i);
// }

// // // MuseoNacional
// // const ImagenContenedorScroll = document.getElementById('imgScroll3DMuseo');
// // const frames3DMuseo = 60;
// // const velocidadFrames = 5;
// // const ContenedorImagenQueCambia = document.getElementById(
// //  'imgScroll3DMuseo-sticky'
// // );
// // const imagenQueCambia = document.getElementById('imgScroll3DMuseo-Img');
// // const imagenQueCambia_Height =
// //  imagenQueCambia.getBoundingClientRect().width / 1.33;
// // const ImagenContenedorScroll_Alto = imagenQueCambia_Height / velocidadFrames;
// // ImagenContenedorScroll.style.minHeight = `${
// //  ImagenContenedorScroll_Alto * frames3DMuseo + imagenQueCambia_Height * 4.5
// // }px`;

// // // const areasHoverPisos = [
// // //  'contenedorPisos-piso1_area',
// // //  'contenedorPisos-piso2_area',
// // //  'contenedorPisos-piso3_area',
// // // ];

// // window.addEventListener('scroll', e => {
// //  // * BoxRecorrido
// //  // const boxRecorrido = (document.getElementById(
// //  //  'box-recorrido'
// //  // ).style.width = `${(window.scrollY * 100) / document.body.scrollHeight}vw`);
// //  // boxRecorrido.style.width =
// //  // console.log((window.scrollY * 100) / document.body.scrollHeight);

// //  // Otro
// //  const altoContenidoTop = ImagenContenedorScroll.getBoundingClientRect().top;
// //  if (altoContenidoTop < 0) {
// //   const scrollPos = window.scrollY - ImagenContenedorScroll.offsetTop;
// //   const numScroll = parseInt(scrollPos / ImagenContenedorScroll_Alto, 10);
// //   // console.log(altoContenidoTop, 'altoContenidoTop');
// //   // console.log(scrollPos, 'scrollPos');
// //   // console.log(ImagenContenedorScroll_Alto, 'ImagenContenedorScroll_Alto');
// //   // console.log(numScroll, 'numScroll');
// //   // console.log(window.scrollY, 'window.scrollY');
// //   if (numScroll > 1 && numScroll < frames3DMuseo + 1) {
// //    imagenQueCambia.src = `${imgURL}3DMuseoScroll/Vista${numScroll}.jpg${imgQuery}`;
// //    ContenedorImagenQueCambia.classList.remove('imagenQueCambiaTransition');
// //    document
// //     .querySelector('.contenedorPisos')
// //     .classList.remove('contenedorPisos-show');
// //    contenedorPisosMovilLinks.style.display = 'none';

// //    contenedorPisosMovilLinks360Block(false);
// //    showContenedorAreasPisos();
// //    colorTextoBotonesPisos();

// //    // document.querySelector('.contenedorAreasPisos').style.display = 'none';
// //   } else if (numScroll >= 60 && numScroll < 85) {
// //    // imagenQueCambia.src = `${imgURL}3DMuseoScroll/Vista${frames3DMuseo}.jpg${imgQuery}`;
// //    // ultimaImagenMuseoScroll(frames3DMuseo);
// //    ContenedorImagenQueCambia.classList.add('imagenQueCambiaTransition');
// //    document
// //     .querySelector('.contenedorPisos')
// //     .classList.add('contenedorPisos-show');
// //    // imagenQueCambia.src = `${imgURL}3DMuseoScroll/Vista${frames3DMuseo}.jpg${imgQuery}`;
// //   } else if (numScroll >= 85) {
// //    imagenQueCambia.src = `${imgURL}3DMuseoScroll/Vista${frames3DMuseo}.jpg${imgQuery}`;
// //    showContenedorAreasPisos();
// //    colorTextoBotonesPisos();

// //    contenedorPisosMovilLinks.style.display = 'none';
// //    contenedorPisosMovilLinks360Block(false);
// //   } else {
// //    imagenQueCambia.src = `${imgURL}3DMuseoScroll/Vista1.jpg${imgQuery}`;
// //    contenedorPisosMovilLinks.style.display = 'none';
// //    contenedorPisosMovilLinks360Block(false);
// //   }
// //  }
// // });
