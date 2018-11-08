const Conn = require('../../../db')
const Sequelize = require('sequelize')

const AccBooksModel = Conn.define('tblAccBooksMgt', {
  numProject: {
    primaryKey: true,
    type: Sequelize.STRING,
  },
  myMonth: {
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  myYear: {
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  country: {
    primaryKey: true,
    type: Sequelize.STRING,
  },
  ingresos: {
    type: Sequelize.DECIMAL,
  },
},
{
  timestamps: false,
  freezeTableName: true,
});

module.exports = AccBooksModel