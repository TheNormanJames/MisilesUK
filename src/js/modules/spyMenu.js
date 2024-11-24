const section = document.querySelectorAll('section');
const spyMenu = document.querySelectorAll('#spyMenu a');
const observer = new IntersectionObserver((entradas, observador) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      // console.log('entrada');
      const id = '#' + entrada.target.id;
      history.pushState({}, '', id)


      spyMenu.forEach(enlace => {
        enlace.classList.remove('activo');
        const href = enlace.attributes.href.nodeValue;
        // console.log(href);
        if (href === id) {
          enlace.classList.add('activo')
        }
      });
    }

  });
}, {
  threshold: 0.1,
  // rootMargin: '0px 0px -50% 0px'
});

section.forEach(encabezado => {
  observer.observe(encabezado);
  // console.log(encabezado);
})
