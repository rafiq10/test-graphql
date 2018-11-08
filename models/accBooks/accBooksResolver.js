const graphql = require('graphql')
const AccBooksModel = require('./accBooksDetails/accBooksModel')
const AccBooksType = require('./accBooksDetails/accBooks.Type')
const AccBooksArgs = require('./accBooksDetails/accBooksArgs')


module.exports = {
  type: new graphql.GraphQLList(AccBooksType),
  args: AccBooksArgs,
  resolve(root, args) {
    const opts = { where: args };
    return AccBooksModel.findAll(opts);
  }
}


