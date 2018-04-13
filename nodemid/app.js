const Koa = require('koa')
const initRender = require('./middlewares/render')
const CONFIG = require('./config')
require('./middlewares/log4')

const app = new Koa()

initRender(app)

app
  .use(require('./middlewares/static'))
  .use(require('./router'))
  .use(require('./middlewares/look_api'))
  .listen(CONFIG.get('port'))
