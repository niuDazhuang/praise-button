const Router = require('koa-router')
const axios = require('axios')

const router = new Router()

router.get('/api/*', async (ctx, next) => {
  await next()
  const url = `http://yii.hd/?r=${ctx.params[0]}&${ctx.querystring}`
  let res = ''
  try {
    res = await axios.get(url)
  } catch (e) {
    console.log(e.message)
  }

  ctx.body = res.data
})

router.get('/', async (ctx, next) => {
  res = await axios.get(`http://yii.hd/?r=home/list`)
  ctx.body = await ctx.render('home/index', res.data.data)
})

module.exports = router.routes()
