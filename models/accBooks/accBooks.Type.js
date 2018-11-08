const graphql = require('graphql')

module.exports = new graphql.GraphQLObjectType({
  name: 'accBooks',
  description: 'This represents accounting table',
  fields: () => {
    return {
      numProject: {type: graphql.GraphQLString},
      myMonth: {type: graphql.GraphQLInt},
      myYear: {type: graphql.GraphQLInt},
      country: {type: graphql.GraphQLString},
      ingresos: {type: graphql.GraphQLFloat}
    };
  }
});