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
  ingresos: {type: Sequelize.DECIMAL},

  MODI: {type: Sequelize.DECIMAL},

  ComReal: {type: Sequelize.DECIMAL},
  ComProvAlt: {type: Sequelize.DECIMAL},
  ComProvBaj: {type: Sequelize.DECIMAL},
  ComProv: {type: Sequelize.DECIMAL},
  COM: {type: Sequelize.DECIMAL},
  
  MoinReal: {type: Sequelize.DECIMAL},
  MoinProvAlt: {type: Sequelize.DECIMAL},
  MoinProvBaj: {type: Sequelize.DECIMAL},
  MoinProv: {type: Sequelize.DECIMAL},
  MOIN: {type: Sequelize.DECIMAL},

  OtrReal: {type: Sequelize.DECIMAL},
  OtrProvAlt: {type: Sequelize.DECIMAL},
  OtrProvBaj: {type: Sequelize.DECIMAL},
  OtrProv: {type: Sequelize.DECIMAL},
  OTR: {type: Sequelize.DECIMAL},

  OPEX: {type: Sequelize.DECIMAL},
  MG: {type: Sequelize.DECIMAL},

  CAPEX: {type: Sequelize.DECIMAL},
  AMTZ: {type: Sequelize.DECIMAL},
  OGNO: {type: Sequelize.DECIMAL},

  FacturacionFX: {type: Sequelize.DECIMAL},
  Facturacion: {type: Sequelize.DECIMAL},
  
},
{
  timestamps: false,
  freezeTableName: true,
});

module.exports = AccBooksModel