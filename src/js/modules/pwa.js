export const pwa = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then(registration => {
          console.log(registration)
          console.log(
            'Service Worker registrado con éxito',
            registration.scope
          )
        })
        .catch(err => console.log(`Registro de Service Worker fallido`, err))
    })
  }

  // Activar Notificaciones
  if (window.Notification && Notification.permission !== 'denied') {
    Notification.requestPermission(status => {
      console.log(status);
      let n = new Notification('Bienvenido', {
        body: 'Éste es el boilerplate NNJ',
        icon: './icon_192x192.png'
      })
    })
  }


  // // Activar Sincronización de fondo
  // if ('serviceWorker' in navigator && 'SyncManager' in window) {
  //   function registerBGSync() {
  //     navigator.serviceWorker.ready()
  //       .then(registration => {
  //         return registration.sync.register('github')
  //           .then(() => console.log('Sincronización de Fondo Registrada'))
  //           .catch(err => console.log('Fallo la Sincronización de Fondo'))
  //       })
  //   }
  // }

  // // Compartiedo Contenido con la API Share
  // if (navigator.share !== undefined) {
  //   document.addEventListener('DOMContentLoaded', e => {
  //     let shareBtn = document.getElementById('share')

  //     shareBtn.addEventListener('click', e => {
  //       navigator.share({
  //         title: document.title,
  //         text: 'Hola soy un contenido para compartir',
  //         url: window.location.href
  //       })
  //         .then(() => console.log('Contenido compartido con éxito'))
  //         .catch(err => console.log('Error al compartir: ', err))
  //     })
  //   })
  // }



  // Deteccion del estado de la Conexión

  const header = document.querySelector('.header'),
    footer = document.querySelector('.footer'),
    metaTagTheme = document.querySelector('meta[name=theme-color]')

  function networkStatus(e) {
    console.log(e, e.type);

    if (navigator.onLine) {
      metaTagTheme.setAttribute('content', '#f7df1e')
      footer.classList.remove('u-offline')
      header.classList.remove('u-offline')
      alert('Conexión Recuperada :)')
    } else {
      metaTagTheme.setAttribute('content', '#666')
      footer.classList.add('u-offline')
      header.classList.add('u-offline')
      alert('Conexión Perdida :(')
    }
  }
  document.addEventListener('DOMContentLoaded', e => {
    if (!navigator.onLine) {
      networkStatus(this)
    }
    window.addEventListener('online', networkStatus)
    window.addEventListener('offline', networkStatus)
  })
}
