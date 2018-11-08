const graphql = require('graphql')
const AccBooksModel = require('./accBooksModel')
const AccBooksType = require('./accBooks.Type')
const AccBooksArgs = require('./accBooksArgs')
const Sequelize = require('sequelize')

const accBooksDetailResolver = {
  type: new graphql.GraphQLList(AccBooksType),
  args: AccBooksArgs,
  resolve(root, args) {
    const opts = { where: args };
    return AccBooksModel.findAll(opts);
  }
}

const accBooksSumByCountry = {
  type: new graphql.GraphQLList(AccBooksType),
  args: AccBooksArgs,
  resolve(root, args) {
    const opts = { where: args };
    return AccBooksModel.find({opts,
      group: ['numProject'],
      attributes: [[Sequelize.fn('SUM', Sequelize.col('ingresos')), 'sumIngresos']],
    })
  }
}

module.exports.accBooksDetailResolver =  accBooksDetailResolver
module.exports.accBooksSumByCountry =  accBooksSumByCountry