const  graphql = require('graphql')
const UserModel = require('./userModel')
const UserType = require('./userType')
const UserArgs = require('./userArgs')

module.exports = {
        type: new graphql.GraphQLList(UserType),
        args: UserArgs,
        resolve(root, args) {
          const opts = { where: args };
          return UserModel.findAll(opts);
        }
      }
