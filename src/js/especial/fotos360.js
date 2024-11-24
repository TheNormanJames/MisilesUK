import { salaData } from '../data/dataSalas';

/* Fotos 360 */
const imgURL = 'https://www.eltiempo.com/infografias/2024/11/MisilesUK/assets/';
// const imgURL = './assets/';
const imgQuery = '?et090212';
const nombreInventado = 'nombreInventado';
const mediaQuery = window.matchMedia('(min-width: 1000px)');
const foto360ContainerContent = document.getElementById(
 'foto360Container-content'
);
let botonSala7 = document.createElement('button');

export function exportFotos360JS(exportFotos360JSData, dataItems) {
 let validadorAppend;
 let idHotsPots = 0;
 let dataGrande = [];
 const { img, titulo, decriptionBox, mapaMuseo, hotSpotsData } =
  exportFotos360JSData;

 // console.log(titulo, 'titulo');
 // console.log(decriptionBox, 'decriptionBoxFotos360');
 // document.querySelector('.pnlm-author-box').innerHTML = '';

 document.querySelectorAll('.pnlm-author-box').forEach(e => {
  // e.innerHTML = '';
  e.innerHTML = decriptionBox;
 });

 // console.log(mapaMuseo, 'mapaMuseo');
 document.getElementById(
  'foto360Container_mapa'
 ).src = `https://www.eltiempo.com/infografias/2024/11/MisilesUK/assets/pisosMapas/${img}MAPA.png${imgQuery}`;
 dataItems.pitch.forEach((e, i) => {
  dataGrande.push({
   pitch: dataItems.pitch[i],
   yaw: dataItems.yaw[i],
   cssClass: 'custom-hotspot',
   createTooltipFunc: hotspot,
   //- clickHandlerFunc: functionInfo,
   createTooltipArgs: nombreInventado,
   hotSpotId: '123',
  });
 });

 // console.log(dataGrande, 'dataGrande');
 validadorAppend = true;
 let viewer;

 if (exportFotos360JSData.EsSala7) {
  foto360ContainerContent.classList.add('active', 'sala7');
  foto360ContainerContent.querySelector(
   '.foto360Container-content_fecha'
  ).innerHTML = ``;
  foto360ContainerContent.querySelector(
   '.foto360Container-content_titulo'
  ).innerHTML = ``;

  if (mediaQuery.matches) {
   foto360ContainerContent.querySelector(
    '.foto360Container-content_img'
   ).src = `./assets/SALA7-Desktop.svg${imgQuery}`;
   botonSala7.innerHTML = 'Entrar';
   botonSala7.classList.add('botonSala7');
   foto360ContainerContent.appendChild(botonSala7);

   // ).src = `${imgURL}SALA7-Desktop.svg${imgQuery}`;
  } else {
   foto360ContainerContent.querySelector(
    '.foto360Container-content_img'
   ).src = `./assets/SALA7-mobile.svg${imgQuery}`;
   botonSala7.innerHTML = 'Entrar';
   botonSala7.classList.add('botonSala7');
   foto360ContainerContent.appendChild(botonSala7);
  }

  foto360ContainerContent.querySelector(
   '.foto360Container-content_parrafo'
  ).innerHTML = ``;
 }
 if (!exportFotos360JSData.EsTour) {
  viewer = pannellum.viewer('panorama', {
   type: 'equirectangular',
   autoLoad: true,
   hfov: 120,
   title: `${titulo}`,
   author: `${decriptionBox}`,

   // autoRotate: '-3',
   // autoRotateInactivityDelay: 4000,
   // panorama: `./assets/360/${img}.jpg${imgQuery}`,
   panorama: `https://www.eltiempo.com/infografias/2024/11/MisilesUK/assets/360/${img}.jpg${imgQuery}`,
   hotSpots: [...dataGrande],
  });
 } else {
  // setInterval(() => {

  //  console.log('click en flecha');
  //  document.querySelectorAll('.pnlm-author-box').forEach(element => {
  //   element.innerHTML = element.innerHTML.replace('by ', '');
  //   document.getElementById('foto360Container_mapa').src =`${imgURL}pisosMapas/SALA15-${element.previousSibling.textContent.slice(-1)}MAPA.png${imgQuery}`;
  //  }, 300000);

  // })

  viewer = pannellum.viewer('panorama', {
   default: {
    hfov: 120,
    autoLoad: true,
    firstScene: 'sala15',
    author: 'Ser y Hacer',
    sceneFadeDuration: 1000,
   },

   scenes: {
    sala15: {
     title: 'Sala15 -1',
     author: 'Ser y Hacer <p>Las obras cuentan historias<p/>',
     hfov: 120,
     pitch: -3,
     yaw: 80,
     type: 'equirectangular',
     panorama: `./assets/360/SALA15.jpg${imgQuery}`,
     hotSpots: [
      {
       pitch: -17.1,
       yaw: 58,
       type: 'scene',
       text: 'Sala 15 - 2',
       sceneId: 'sala15_2',
      },
      {
       pitch: 6.1,
       yaw: 17.5,
       cssClass: 'custom-hotspot',
       createTooltipFunc: hotspotPiso15,
       createTooltipArgs: 'Baltimore Museum of Art',
      },
     ],
    },

    sala15_2: {
     title: 'Sala 15 -2',
     author: 'Ser y Hacer <p> Las obras son hechas <p/>',
     hfov: 120,
     yaw: 5,
     type: 'equirectangular',
     panorama: `./assets/360/SALA15-2.jpg${imgQuery}`,
     hotSpots: [
      {
       pitch: -17,
       yaw: 90,
       type: 'scene',
       text: 'sala15_3',
       sceneId: 'sala15_3',
       targetYaw: -23,
       targetPitch: 2,
      },
      {
       pitch: -17,
       yaw: 270.1,
       type: 'scene',
       text: 'sala15',
       sceneId: 'sala15',
       targetYaw: -23,
       targetPitch: 2,
      },
      {
       pitch: 6.1,
       yaw: 30.5,
       cssClass: 'custom-hotspot',
       createTooltipFunc: hotspotPiso15,
       createTooltipArgs: 'Baltimore Museum of Art',
      },
     ],
    },
    sala15_3: {
     title: 'Sala 15 -3',
     author: 'Ser y Hacer <p> Las obras tienen historia(s)<p/>',
     hfov: 120,
     yaw: 5,
     type: 'equirectangular',
     panorama: `./assets/360/SALA15-3.jpg${imgQuery}`,
     hotSpots: [
      {
       pitch: -17,
       yaw: 90,
       type: 'scene',
       text: 'sala15_2',
       sceneId: 'sala15_2',
       targetYaw: -23,
       targetPitch: 2,
      },
      {
       pitch: -17,
       yaw: 270.1,
       type: 'scene',
       text: 'sala15_4',
       sceneId: 'sala15_4',
       targetYaw: -23,
       targetPitch: 2,
      },
      {
       pitch: 6.1,
       yaw: 340.5,
       cssClass: 'custom-hotspot',
       createTooltipFunc: hotspotPiso15,
       createTooltipArgs: 'Baltimore Museum of Art',
      },
     ],
    },
    sala15_4: {
     title: 'Sala 15 -4',
     author: 'Ser y Hacer',
     hfov: 120,
     yaw: 5,
     type: 'equirectangular',
     panorama: `./assets/360/SALA15-4.jpg${imgQuery}`,
     hotSpots: [
      {
       pitch: -17,
       yaw: 130,
       type: 'scene',
       text: 'sala15_3',
       sceneId: 'sala15_3',
       targetYaw: -23,
       targetPitch: 2,
      },
      {
       pitch: 0.1,
       yaw: 234.5,
       cssClass: 'custom-hotspot',
       createTooltipFunc: hotspotPiso15,
       createTooltipArgs: 'Baltimore Museum of Art',
      },
     ],
    },
   },
  });
 }

 function deleteBy(params) {
  document.querySelectorAll('.pnlm-author-box').forEach(element => {
   element.innerHTML = element.innerHTML.replace('by ', '');
  });
 }

 deleteBy();
 // automatizarZoomOut();
 // Hot spot creation function
 function hotspot(hotSpotDiv, args) {
  if (validadorAppend) {
   hotSpotDiv.innerHTML = '';
   validadorAppend = false;
  }
  hotSpotDiv.classList.add('custom-tooltip');
  var span = document.createElement('span');
  span.innerHTML = args;
  hotSpotDiv.appendChild(span);
  // console.log(span.parentElement);
  span.parentElement.id = idHotsPots;
  idHotsPots++;
  span.style.width = span.scrollWidth - 20 + 'px';
  span.style.marginLeft =
   -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
  span.style.marginTop = -span.scrollHeight - 12 + 'px';
 }
 function hotspotPiso15(hotSpotDiv, args) {
  if (validadorAppend) {
   hotSpotDiv.innerHTML = '';
   validadorAppend = false;
  }
  hotSpotDiv.classList.add('custom-tooltip');
  var span = document.createElement('span');
  span.innerHTML = args;
  hotSpotDiv.appendChild(span);
  // console.log(span.parentElement);
  // console.log(
  //  hotSpotDiv.parentElement.parentElement
  //   .querySelector('.pnlm-title-box')
  //   .innerHTML.replace(' ', ''),
  //  'hotSpotDiv'
  // );
  span.parentElement.id = `${hotSpotDiv.parentElement.parentElement
   .querySelector('.pnlm-title-box')
   .innerHTML.replaceAll(' ', '')}`;
  idHotsPots++;
  span.style.width = span.scrollWidth - 20 + 'px';
  span.style.marginLeft =
   -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
  span.style.marginTop = -span.scrollHeight - 12 + 'px';
 }
}
/* FinFotos 360 */
