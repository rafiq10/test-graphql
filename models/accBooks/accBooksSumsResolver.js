const graphql = require('graphql')
const Conn = require('../../db')
const AccBooksType = require('./accBooksDetails/accBooks.Type')
const AccBooksArgs = require('./accBooksDetails/accBooksArgs')
const Sequelize = require('sequelize')

module.exports = {
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
        SUM(ISNULL([ingresos],0)) AS [sumIngresos] 
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
