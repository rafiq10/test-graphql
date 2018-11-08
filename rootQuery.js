const  graphql = require('graphql')
const usersResolver = require('./models/users/usersRresolver.js')
const accBooksDetailResolver = require('./models/accBooks/accBooksResolver')

const accBooksSum = require('./models/accBooks/accBooksSumsResolver')
const accBooksSumByCountry = accBooksSum.accBooksSumsByCountry
const accBooksSumsByNumProject = accBooksSum.accBooksSumsByNumProject


module.exports = new graphql.GraphQLObjectType({
    name: 'RootQuery',
    fields: {
      accBooks: accBooksDetailResolver,
      accBooksSumByCountry: accBooksSumByCountry,
      accBooksSumsByNumProject: accBooksSumsByNumProject,
      users: usersResolver,
      }
})