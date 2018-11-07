const graphql = require('graphql')

module.exports = {
  TIF: {type: graphql.GraphQLString, description: 'employee identifier num'},
  department: {type: graphql.GraphQLString, description: 'employee department'}
}
