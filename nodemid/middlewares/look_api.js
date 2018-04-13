const fs = require('fs')
const CONFIG = require('../config')

module.exports = async ctx => {
  const ws = fs.createWriteStream(CONFIG.get('look'), {
    flags: 'a',
    encoding: 'utf8',
    fd: null,
    mode: 0o666,
    autoClose: true
  })
  const look = [
    'url',
    'path',
    'query',
    'querystring'
  ]
  ws.write(`\n- ${new Date().toLocaleString()}\n`)
  let value = null
  look.forEach(key => {
    value = ctx[key]
    if (typeof value === 'object') {
      value = JSON.stringify(ctx[key])
    }
    ws.write(`\t- ctx.${key}\n\t\t- ${value}\n`)
  })
  ws.end()
}
