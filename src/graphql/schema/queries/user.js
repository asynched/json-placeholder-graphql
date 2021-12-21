import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'

import AddressType from './address.js'
import AlbumType, { AlbumTypeHandler } from './album.js'

import { getFile } from '../../../utils/file-handler.js'
import PostType, { PostTypeHandler } from './post.js'

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'Representation of a user for the API',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    username: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    address: {
      type: new GraphQLNonNull(AddressType),
    },
    albums: {
      type: new GraphQLList(AlbumType),
      resolve: AlbumTypeHandler.getUserAlbums,
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve: PostTypeHandler.getUserPosts,
    },
  }),
})

export const UserTypeHandler = {
  getUsers: async () => {
    return await getFile('users.json')
  },
  getUser: async (_source, args) => {
    const id = args.id
    const users = await getFile('users.json')
    const user = users.find((user) => user.id === id)

    return user
  },
}

export default UserType
