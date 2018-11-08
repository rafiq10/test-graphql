
const  graphql = require('graphql')
const RootQuery = require('./rootQuery')

const Schema = new graphql.GraphQLSchema({
  query: RootQuery,
  // mutation: Mutation
});

module.exports = Schema
