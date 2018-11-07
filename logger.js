const winston = require('winston') 
const config = require('./config')
require('winston-loggly');

winston.emitErrs = true;

const logger = new winston.Logger({
  transports: [
    new winston.transports.Loggly(config.winston),
    new winston.transports.Console({
      level: 'debug',
      json: false,
      handleExceptions: true,
      humanReadableUnhandledException: true,
      colorize: true
    })
  ],
  exitOnError: false
});

module.exports = logger
