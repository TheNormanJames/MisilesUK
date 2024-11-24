let linternaJS = document.querySelector('.linternaJS');

function trackMouse(event){
  linternaJS.style.setProperty(
      '--cursorXpos', `${event.clientX}px`
  )
  linternaJS.style.setProperty(
      '--cursorYpos', `${event.clientY}px`
  )
}

linternaJS.addEventListener('mousemove', trackMouse);


let targetClick = document.getElementById('ventanaClick');
let lugarClaseUbicado = document.querySelector('#linternaJS');

targetClick.addEventListener('click', () => {
  lugarClaseUbicado.classList.remove("linternaJS");
  console.log('click en ventana abierta');
});

// console.log(window.location.href);

if (window.location.hash) {
  lugarClaseUbicado.classList.remove("linternaJS");
  clearInterval(trackMouse);
  document.querySelector(".redesSociales-afuera").style.display =  "block";
}
