/*===============================================
                    ModalVideo
================================================*/

export const modalVideoJSNNJ = () => {

  const closeBtn = document.querySelectorAll('.closeBtn--video'),
    modalVideo = document.querySelectorAll('.modal_videoContainer'),
    swiperSliderRelative = document.querySelectorAll('.mySwiper');

  if (window.location.hash) {

    // console.log(swiperSliderRelative);
  }

  closeBtn.forEach(box => {
    box.addEventListener("click", () => {

      // modalVideo.style.display = 'none';
      window.location.hash = ' ';
    });
  });
  window.onclick = function (event) {
    modalVideo.forEach(modal => {

      if (event.target == modal) {
        // modalVideo.style.display = 'none';
        window.location.hash = ' ';
      }
    })
  }




}
