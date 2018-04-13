const render = require('koa-swig')
const co = require('co')
const CONFIG = require('../config')

module.exports = app => {
  app.context.render = co.wrap(render({
    root: CONFIG.get('views'),
    autoescape: true,
    cache: false,
    ext: 'html'
  }))
}
