
const  graphql = require('graphql')
const Query = require('./Query.js')

const Schema = new graphql.GraphQLSchema({
  query: Query,
  // mutation: Mutation
});

module.exports = Schema
