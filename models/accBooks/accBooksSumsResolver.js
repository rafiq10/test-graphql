const graphql = require('graphql')
const Conn = require('../../db')
const AccBooksType = require('./accBooksDetails/accBooks.Type')
const AccBooksArgs = require('./accBooksDetails/accBooksArgs')
const Sequelize = require('sequelize')

accBooksSumsByCountry = {
  type: new graphql.GraphQLList(AccBooksType),
  args: AccBooksArgs,
  resolve(root, args) {
    console.log(args)
    let whereClause = 'WHERE '

    Object.keys(args).map(function(key, i) {
      let myVal = ''
      if (typeof(args[key])==="string"){myVal="'" + args[key] + "'"}
      else{myVal = args[key]}
      whereClause = whereClause + " [" + String(key) + "] = " +myVal+ " AND "  
   });
    whereClause = whereClause.substring(0,whereClause.length-5)

    return Conn.query(`
      SELECT 
      [country],
      SUM(ISNULL([ingresos],0)) AS [sumIngresos],
      SUM(ISNULL([MODI],0)) AS [sumMODI],

      SUM(ISNULL([ComReal],0)) AS [sumComReal], 
      SUM(ISNULL([ComProvAlt],0)) AS [sumComProvAlt],
      SUM(ISNULL([ComProvBaj],0)) AS [sumComProvBaj],
      SUM(ISNULL([ComProv],0)) AS [sumComProv],
      SUM(ISNULL([COM],0)) AS [sumCOM],

      SUM(ISNULL([MoinReal],0)) AS [sumMoinReal], 
      SUM(ISNULL([MoinProvAlt],0)) AS [sumMoinProvAlt],
      SUM(ISNULL([MoinProvBaj],0)) AS [sumMoinProvBaj],
      SUM(ISNULL([MoinProv],0)) AS [sumMoinProv],
      SUM(ISNULL([MOIN],0)) AS [sumMOIN],

      SUM(ISNULL([OtrReal],0)) AS [sumOtrReal], 
      SUM(ISNULL([OtrProvAlt],0)) AS [sumOtrProvAlt],
      SUM(ISNULL([OtrProvBaj],0)) AS [sumOtrProvBaj],
      SUM(ISNULL([OtrProv],0)) AS [sumOtrProv],
      SUM(ISNULL([OTR],0)) AS [sumOTR],

      SUM(ISNULL([OPEX],0)) AS [sumOPEX],
      SUM(ISNULL([MG],0)) AS [sumMG],

      SUM(ISNULL([CAPEX],0)) AS [sumCAPEX],
      SUM(ISNULL([AMTZ],0)) AS [sumAMTZ],
      SUM(ISNULL([OGNO],0)) AS [sumOGNO],

      SUM(ISNULL([FacturacionFX],0)) AS [sumFacturacionFX],
      SUM(ISNULL([Facturacion],0)) AS [sumFacturacion]
      FROM 
        tblAccBooksMgt 
      `
      + whereClause +
      `
        GROUP BY [country]`, 
    {type: Sequelize.QueryTypes.SELECT})
    .then(res =>{
      return res
    })
  }
}

accBooksSumsByNumProject = {
  type: new graphql.GraphQLList(AccBooksType),
  args: AccBooksArgs,
  resolve(root, args) {
    console.log(args)
    let whereClause = 'WHERE '

    Object.keys(args).map(function(key, i) {
      let myVal = ''
      if (typeof(args[key])==="string"){myVal="'" + args[key] + "'"}
      else{myVal = args[key]}
      whereClause = whereClause + " [" + String(key) + "] = " +myVal+ " AND "  
   });
    whereClause = whereClause.substring(0,whereClause.length-5)

    return Conn.query(`
      SELECT 
      [country],[numProject],
      SUM(ISNULL([ingresos],0)) AS [sumIngresos],
      SUM(ISNULL([MODI],0)) AS [sumMODI],

      SUM(ISNULL([ComReal],0)) AS [sumComReal], 
      SUM(ISNULL([ComProvAlt],0)) AS [sumComProvAlt],
      SUM(ISNULL([ComProvBaj],0)) AS [sumComProvBaj],
      SUM(ISNULL([ComProv],0)) AS [sumComProv],
      SUM(ISNULL([COM],0)) AS [sumCOM],

      SUM(ISNULL([MoinReal],0)) AS [sumMoinReal], 
      SUM(ISNULL([MoinProvAlt],0)) AS [sumMoinProvAlt],
      SUM(ISNULL([MoinProvBaj],0)) AS [sumMoinProvBaj],
      SUM(ISNULL([MoinProv],0)) AS [sumMoinProv],
      SUM(ISNULL([MOIN],0)) AS [sumMOIN],

      SUM(ISNULL([OtrReal],0)) AS [sumOtrReal], 
      SUM(ISNULL([OtrProvAlt],0)) AS [sumOtrProvAlt],
      SUM(ISNULL([OtrProvBaj],0)) AS [sumOtrProvBaj],
      SUM(ISNULL([OtrProv],0)) AS [sumOtrProv],
      SUM(ISNULL([OTR],0)) AS [sumOTR],

      SUM(ISNULL([OPEX],0)) AS [sumOPEX],
      SUM(ISNULL([MG],0)) AS [sumMG],

      SUM(ISNULL([CAPEX],0)) AS [sumCAPEX],
      SUM(ISNULL([AMTZ],0)) AS [sumAMTZ],
      SUM(ISNULL([OGNO],0)) AS [sumOGNO],

      SUM(ISNULL([FacturacionFX],0)) AS [sumFacturacionFX],
      SUM(ISNULL([Facturacion],0)) AS [sumFacturacion]
      FROM 
        tblAccBooksMgt 
      `
      + whereClause +
      `
        GROUP BY [country],[numProject]`, 
    {type: Sequelize.QueryTypes.SELECT})
    .then(res =>{
      return res
    })
  }
}

module.exports.accBooksSumsByCountry = accBooksSumsByCountry
module.exports.accBooksSumsByNumProject = accBooksSumsByNumProject