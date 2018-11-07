const graphql = require('graphql')

module.exports = new graphql.GraphQLObjectType({
  name: 'User',
  description: 'This represents a item',
  fields: () => {
    return {
      TIF: {type: graphql.GraphQLString},
      department: {type: graphql.GraphQLString},
    };
  }
});
