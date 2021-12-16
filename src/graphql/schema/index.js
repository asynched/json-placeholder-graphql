import { GraphQLInt, GraphQLList, GraphQLObjectType } from 'graphql'

import UserType, { UserTypeHandler } from './queries/users.js'

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query of the API',
  fields: () => ({
    users: {
      type: GraphQLList(UserType),
      description: 'Returns a list of all the users in the API',
      resolve: UserTypeHandler.getMultipleUsers,
    },
    user: {
      type: UserType,
      description: 'Returns a single user',
      args: {
        id: {
          type: GraphQLInt,
        },
      },
      resolve: UserTypeHandler.getASingleUser,
    },
  }),
})

export default RootQueryType
