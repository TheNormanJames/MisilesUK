const copy = require('copy')

copy(
  './src/statics/**/*.*',
  './public/',
  err => (err) ? console.log(err.message) : console.log('Archivos copiados con éxito')
)
