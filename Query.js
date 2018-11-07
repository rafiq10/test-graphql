const graphql = require('graphql')
const UserModel = require('./models/users/userModel')
const UserType = require('./models/users/UserType')
const UserArgs = require('./models/users/UserArgs')

module.exports = new graphql.GraphQLObjectType({
  name: 'Query',
  description: 'This is Users query',
  fields: () => {
    return {
      users: {
        type: new graphql.GraphQLList(UserType),
        args: UserArgs,
        resolve(root, args) {
          const opts = { where: args };

          if (args.hasOwnProperty("hasChanged")) {
            const hasChanged = args.hasChanged;
            delete args.hasChanged;
            opts.where.hasChanged = hasChanged ? 1 : 0;
          }
          return UserModel.findAll(opts);
        }
      }
    }
  }
});
