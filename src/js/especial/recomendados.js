const tituloModuloPatro = document.querySelector('.titulo-modulo-patro');
const patrocinados = document.querySelector('.patrocinados');
const especialMenu = document.querySelector('.especialMenu');

tituloModuloPatro.addEventListener('click', ()=>{
  patrocinados.classList.toggle('patrocinadosShow');
  especialMenu.classList.toggle('none');
});
