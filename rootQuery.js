const  graphql = require('graphql')
const usersResolver = require('./models/users/usersRresolver.js')
const accBooksResolver = require('./models/accBooks/accBooksResolver.js')
const accBooksDetailResolver = accBooksResolver.accBooksDetailResolver
const accBooksSumByCountry = accBooksResolver.accBooksSumByCountry
module.exports = new graphql.GraphQLObjectType({
    name: 'RootQuery',
    fields: {
      accBooks: accBooksDetailResolver,
      // accBooksSum: accBooksSumByCountry,
      users: usersResolver,
      }

})