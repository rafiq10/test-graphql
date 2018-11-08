const graphql = require('graphql')

module.exports = {
  numProject: {type: graphql.GraphQLString, description: 'project number'},
  myMonth: {type: graphql.GraphQLInt, description: 'report month'},
  myYear: {type: graphql.GraphQLInt, description: 'report Year'},
  country: {type: graphql.GraphQLString, description: 'country'}
}
