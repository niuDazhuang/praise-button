const log4js = require('log4js')

logger = log4js.getLogger();
logger.level = 'debug';
logger.debug("Some debug messages");
log4js.configure({
  appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
})
