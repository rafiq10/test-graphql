const config = require( './config')
const Sequelize = require('sequelize')
const log = require('./logger')

const infoLogger = log.info;

const sqldb = config.sqldb;
const Conn = new Sequelize(sqldb.database, sqldb.username, sqldb.password, {
  host: sqldb.server,
  dialect: sqldb.dialect,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  logging: infoLogger
});

module.exports = Conn
