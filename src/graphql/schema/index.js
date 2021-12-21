import { GraphQLInt, GraphQLList, GraphQLObjectType } from 'graphql'
import AlbumType, { AlbumTypeHandler } from './queries/album.js'

import UserType, { UserTypeHandler } from './queries/user.js'

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query of the API',
  fields: () => ({
    getUsers: {
      type: GraphQLList(UserType),
      description: 'Returns a list of all the users in the API',
      resolve: UserTypeHandler.getUsers,
    },
    getUser: {
      type: UserType,
      description: 'Returns a single user',
      args: {
        id: {
          type: GraphQLInt,
        },
      },
      resolve: UserTypeHandler.getUser,
    },
    getAlbums: {
      type: GraphQLList(AlbumType),
      description: 'Returns a list of all the albums in the API',
      resolve: AlbumTypeHandler.getAlbums,
    },
    getAlbum: {
      type: AlbumType,
      description: 'Returns a single album from the API',
      args: {
        id: {
          type: GraphQLInt,
        },
      },
      resolve: AlbumTypeHandler.getAlbum,
    },
  }),
})

export default RootQueryType
