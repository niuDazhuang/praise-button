const static = require('koa-static')
const CONFIG = require('../config')

module.exports = static(CONFIG.get('static'))
