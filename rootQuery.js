const  graphql = require('graphql')
const usersResolver = require('./models/users/usersRresolver.js')
const accBooksDetailResolver = require('./models/accBooks/accBooksResolver')
const accBooksSumByCountry = require('./models/accBooks/accBooksSumsResolver')
module.exports = new graphql.GraphQLObjectType({
    name: 'RootQuery',
    fields: {
      accBooks: accBooksDetailResolver,
      accBooksSum: accBooksSumByCountry,
      users: usersResolver,
      }

})