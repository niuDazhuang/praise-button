const Hapi = require('hapi')
const Inert = require('inert')
const Vision = require('vision')
const HapiPino = require('hapi-pino')
const handlebars = require('handlebars')
const handlers = require('./controllers')

const server = Hapi.server({
  host: '192.168.0.2',
  port: '3000'
})

const init = async () => {
  await server.register(Inert)
  // await server.register({
  //   plugin: HapiPino,
  //   options: {
  //     prettyPrint: true,
  //     logEvents: ['response']
  //   }
  // })
  await server.register(Vision)
  server.views({
    engines: {
      html: handlebars
    },
    relativeTo: __dirname,
    path: 'views'
  })

  server.route({ method: 'GET', path: '/{params*}', handler: handlers.static})
  server.route({ method: 'GET', path: '/', handler: handlers.home})
  server.route({ method: 'GET', path: '/api/{path*}', handler: handlers.api})

  try {
    await server.start()
  } catch (e) {
    console.log(e)
    process.exit(1)
  }
  console.log('server running at:', server.info.uri)
}

process.on('unhandleRejection', err => {
  console.log(err);
  process.exit(1)
})

init()
