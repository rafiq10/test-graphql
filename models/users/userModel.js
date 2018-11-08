const Conn = require('../../db')
const Sequelize = require('sequelize')

const ItemModel = Conn.define('tblUsers', {
  TIF: {
    primaryKey: true,
    type: Sequelize.STRING,
  },
  department: {
    type: Sequelize.STRING,
  },
  fullName: {
    type: Sequelize.STRING,
  }
},
{
  timestamps: false,
});

module.exports = ItemModel
