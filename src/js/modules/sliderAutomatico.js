export const sliderAutomaticoJS = () => {
  // const sliderAutomaticoLaVerdad = document.querySelectorAll(".laVerdad-proyecto .sliderAutomatico");
  // sliderAutomaticoLaVerdad.forEach((sliderAutomaticoLaVerdadItem, index) => {
  //   console.log(sliderAutomaticoLaVerdadItem);


  /*===============================================
  =============        Original         ===========
  ================================================*/

  const sliderAutomatico = document.querySelectorAll(".sliderAutomatico");
  sliderAutomatico.forEach((sliderAutomaticoItem, index) => {
    console.log(sliderAutomaticoItem);


    // let sliderAutomaticoSection = document.querySelectorAll(`#${sliderAutomaticoItem.id} .sliderAutomatico__section`),
    // let sliderAutomaticoSection = document.querySelectorAll(`.${sliderAutomaticoItem.classList[0]} .sliderAutomatico__section`),
    let sliderAutomaticoSection = document.querySelectorAll(`#${sliderAutomaticoItem.id} .sliderAutomatico__section`),
      sliderAutomaticoSectionLast = sliderAutomaticoSection[sliderAutomaticoSection.length - 1];

    const botonesLeft = document.querySelectorAll(' .sliderAutomatico__btn--left');
    const botonesRight = document.querySelectorAll(' .sliderAutomatico__btn--right');
    // console.log(botonesLeft[index]);

    // const btnLeft = document.querySelector(' .sliderAutomatico__btn--left');
    // const btnRight = document.querySelector(' .sliderAutomatico__btn--right');
    const btnLeft = botonesLeft[index];

    const btnRight = botonesRight[index];
    // const btnRight = document.querySelector(' .sliderAutomatico__btn--right');

    sliderAutomaticoItem.insertAdjacentElement('afterbegin', sliderAutomaticoSectionLast);

    sliderAutomaticoItem.style.width = `${sliderAutomaticoSection.length}00%`;

    var indexBotones = 1;

    function Next() {
      let sliderAutomaticoSectionFirst = document.querySelectorAll(`#${sliderAutomaticoItem.id} .sliderAutomatico__section`)[0];
      sliderAutomaticoItem.style.marginLeft = "-200%";
      sliderAutomaticoItem.style.transition = "all 0.5s";
      // /* Botones Navegadores */
      // let btnsNavegadores = document.querySelectorAll('.sliders_navegadores');
      // let btnsNavegadoresChilds = btnsNavegadores[index].querySelectorAll('.sliders_navegador');
      // // console.log(btnsNavegadoresChilds[indexBotones]);

      // if (indexBotones > 0) {
      //   let indexAtrasBtn = indexBotones - 1;
      //   btnsNavegadoresChilds[indexAtrasBtn].classList.remove('activo');
      // }
      // btnsNavegadoresChilds[indexBotones].classList.add('activo');
      // indexBotones++;
      // if (indexBotones == btnsNavegadoresChilds.length) {
      //   indexBotones = 0;
      // }

      /* Fin Botones Navegadores */

      setTimeout(function () {
        sliderAutomaticoItem.style.transition = "none";
        sliderAutomaticoItem.insertAdjacentElement('beforeend', sliderAutomaticoSectionFirst);
        sliderAutomaticoItem.style.marginLeft = "-100%";
      }, 500);
    }

    function Prev() {
      // let btnsNavegadores = document.querySelectorAll('.sliders_navegadores');
      // let btnsNavegadoresChilds = btnsNavegadores[index].querySelectorAll('.sliders_navegador');

      // if (i) {

      //   if (indexBotones < btnsNavegadoresChilds.length) {
      //     let indexAtrasBtn = indexBotones;
      //     btnsNavegadoresChilds[indexAtrasBtn].classList.remove('activo');
      //   }
      //   indexBotones--;

      //   btnsNavegadoresChilds[indexBotones].classList.add('activo');
      //   console.log(indexBotones);

      //   if (indexBotones == 0) {
      //     indexBotones = btnsNavegadoresChilds.length;
      //   }
      //   /* Fin de botones */
      // }
      let sliderAutomaticoSection = document.querySelectorAll(`#${sliderAutomaticoItem.id} .sliderAutomatico__section`),
        sliderAutomaticoSectionLast = sliderAutomaticoSection[sliderAutomaticoSection.length - 1];
      sliderAutomaticoItem.style.marginLeft = "0";
      sliderAutomaticoItem.style.transition = "all 0.5s";
      setTimeout(function () {
        sliderAutomaticoItem.style.transition = "none";
        sliderAutomaticoItem.insertAdjacentElement('afterbegin', sliderAutomaticoSectionLast);
        sliderAutomaticoItem.style.marginLeft = "-100%";
      }, 500);
    }

    btnLeft.addEventListener('click', function () {
      Prev();
    });
    btnRight.addEventListener('click', function () {
      Next();
    });



    // console.log(sliderAutomaticoItem);

    // if (!sliderAutomaticoItem.offsetParent.classList[1]) {
    //   // console.log(sliderAutomaticoItem.offsetParent.classList);

    //   setInterval(function () {
    //     Next();
    //   }, 5000)
    // }
  })

}
/*===============================================
=============        Funciona (Original)         ===========
================================================*/
// const sliderAutomatico = document.querySelector("#sliderAutomatico");
// let sliderAutomaticoSection = document.querySelectorAll('#sliderAutomatico .sliderAutomatico__section'),
//   sliderAutomaticoSectionLast = sliderAutomaticoSection[sliderAutomaticoSection.length - 1];

// const btnLeft = document.querySelector('#sliderAutomatico #btn-left');
// const btnRight = document.querySelector('#sliderAutomatico #btn-right');

// sliderAutomatico.insertAdjacentElement('afterbegin', sliderAutomaticoSectionLast);

// function Next() {
//   let sliderAutomaticoSectionFirst = document.querySelectorAll('#sliderAutomatico .sliderAutomatico__section')[0];
//   sliderAutomatico.style.marginLeft = "-200%";
//   sliderAutomatico.style.transition = "all 0.5s";
//   setTimeout(function () {
//     sliderAutomatico.style.transition = "none";
//     sliderAutomatico.insertAdjacentElement('beforeend', sliderAutomaticoSectionFirst);
//     sliderAutomatico.style.marginLeft = "-100%";
//   }, 500);
// }

// function Prev() {
//   let sliderAutomaticoSection = document.querySelectorAll('#sliderAutomatico .sliderAutomatico__section'),
//     sliderAutomaticoSectionLast = sliderAutomaticoSection[sliderAutomaticoSection.length - 1];
//   sliderAutomatico.style.marginLeft = "0";
//   sliderAutomatico.style.transition = "all 0.5s";
//   setTimeout(function () {
//     sliderAutomatico.style.transition = "none";
//     sliderAutomatico.insertAdjacentElement('afterbegin', sliderAutomaticoSectionLast);
//     sliderAutomatico.style.marginLeft = "-100%";
//   }, 500);
// }
// btnRight.addEventListener('click', function () {
//   Next();
// });

// btnLeft.addEventListener('click', function () {
//   Prev();
// });

// setInterval(function () {
//   Next();
// }, 5000)
