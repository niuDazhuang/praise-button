const path = require('path')
const CONFIG = new Map()

CONFIG
  .set('port', 3000)
  .set('static', path.join(__dirname, '..', 'public'))
  .set('views', path.join(__dirname, '..', 'views'))
  .set('look', path.join(__dirname, '..', 'log', 'visit.md'))

module.exports = CONFIG
